import express, { Express, Request, Response } from "express";
import { readTasks, readUsers, writeTasks, writeUsers } from "./file-ops";
import { Task, User } from "./types";
import {
  Document,
  InsertOneResult,
  ObjectId,
  UpdateResult,
  WithId,
} from "mongodb";
import dotenv from "dotenv";
import { client } from "../src/db/mongodb";
dotenv.config();

const app: Express = express();
const port: number | string = process.env.PORT ?? 3000;

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const dbName = process.env.DB_NAME;

app.get("/", (req: Request, res: Response) => {
  res.redirect("/tasks");
});

// TODO: Allow filtering by name/description/isDone/comma-separated ids
app.get("/tasks", async (req: Request, res: Response) => {
  try {
    const tasksDocuments = await client
      .db(dbName)
      .collection("tasks")
      .find()
      .toArray();
    res.send(tasksDocuments);
  } catch (error) {
    console.error("Error reading tasks from DB:", error);
  }
});

app.get("/tasks/:id", async (req: Request, res: Response) => {
  try {
    
  } catch (error) {
  }
});

app.post("/tasks", async (req: Request, res: Response) => {
  // TODO: Error on non-unique names and bad params as we did on the file ones
  // - Name is required
  // - Description, if present, has to be a string
  // - isDone (received as done), if not present, defaults to false. If present, it has to be a boolean
  try {
    const { name, description, done } = req.body;

    const newTask : Task = {
      name,
      description,
      isDone: typeof done === "boolean" ? done : false
    };

    await client.db(dbName).collection("tasks").insertOne(newTask);
    res.sendStatus(201);
  } catch (error) {
    console.error("Error creating task in DB:", error);
  }
});

app.delete("/tasks/:id", async (req: Request, res: Response) => {
  const id = req.params.id;

  try {
    const result = await client
      .db(dbName)
      .collection("tasks")
      .deleteOne({ _id: new ObjectId(id) });
    console.log(`Tasks deleted: ${result.deletedCount}`);

    res.status(200).send();
  } catch (error) {
    // TODO: Try to get to this point by running a bad request!
    console.error("Error deleting tasks in DB:", error);
    res.status(500).send();
  }
});

app.put("/tasks/:id", async (req: Request, res: Response) => {
  const id = req.params.id;
  const { name, description, done } = req.body;
  const update: any = {};

  // TODO: This is wrong! Fix validations so we don't get surprising updates
  if (!!name) update.name = name;
  if (!!description) update.description = description;
  if (!!done) update.isDone = done;

  try {
    const updatedTask = await client
      .db(dbName)
      .collection("tasks")
      .findOneAndUpdate(
        { _id: new ObjectId(id) },
        { $set: update },
        { returnDocument: "after" }
      );

    if (updatedTask === null) {
      res.status(404).send("Task not found");
    } else {
      console.log("Task updated", updatedTask);
      // TODO: Again, something's not quite right (_id field)
      res.status(200).send(updatedTask);
    }
  } catch (error) {
    console.error("Error updating task in DB:", error);
    res.status(500).send("Error updating task");
  }
});

app.get("/users", (req, res) => {
  const params = req.query;
  // TODO: Let's do this on MongoDB!
  // As expected, users will go in client.db(dbName).collection("users")
  // User can be filtered by email or by name but, naturally, not by password

  let users: User[] = readUsers();

  if (params) {
    const { name, email, index } = params;

    users = users.filter((user, userIndex) => {
      if (
        name &&
        !user.name.toLowerCase().includes(String(name).toLowerCase())
      ) {
        return false;
      }
      if (
        email &&
        !user.email.toLowerCase().includes(String(email).toLowerCase())
      ) {
        return false;
      }
      if (index && userIndex != Number(index)) {
        return false;
      }
      return true;
    });
  }

  res.send(users.map((user: User) => ({ name: user.name, email: user.email })));
});

app.get("/users/:index", (req, res) => {
  // TODO: MongoDB by id
  const user = readUsers()[Number(req.params.index) - 1];
  if (user) {
    res.send({ name: user.name, email: user.email });
  } else {
    res.status(404).send();
  }
});

app.post("/register", (req, res) => {
  // TODO:
  // - A user must have all three fields
  // - The email must follow the pattern XXX@YYY.ZZZ
  // - A user name can be repeated, but an email must be unique
  const { name, email, password } = req.body;
  if (
    !name ||
    !email ||
    !password ||
    typeof name != "string" ||
    typeof email != "string" ||
    typeof password != "string"
  ) {
    res.status(400).send("name, email and password required");
  } else {
    const [beforeAt, afterAt] = String(email).split("@");
    if (!beforeAt || !afterAt || afterAt.split(".").length != 2) {
      res.status(400).send("email has to follow pattern xxx@yyy.zzz");
    } else {
      writeUsers([...readUsers(), { name, email, password }]);
      res.send(201);
    }
  }
});

app.post("/login", (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    // TODO: Should these check for undefined or null or are they ok as they are?
    res.status(400).send("email and password required");
  } else {
    const user = readUsers().find(
      (user) => user.email === email && user.password === password
    );
    console.log(email, password, user);
    if (user) {
      res.send({ name: user.name, email: user.email });
    } else {
      res.status(401).send("Wrong credentials");
    }
  }
});

export { app };

// Start only if it's executed directly, not imported
if (require.main === module) {
  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
  });
}
