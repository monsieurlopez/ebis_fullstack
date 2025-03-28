import express, { Express, Request, Response } from "express";
import { readTasks, writeTasks, readUsers, writeUsers } from "./file-ops";
import { Task, User } from "./types";

const app: Express = express();
const port: number = 3000;

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.sendFile("form.html", { root: "public" });
});

// TODO: All index-based endpoints work on a zero-based array. However, it'd be
// more intuitive to work with one-based indexes
// For the tests to pass, they need to be updated accordingly

app.get("/tasks", (req: Request, res: Response) => {
  const params = req.query;

  let tasks: Task[] = readTasks();
  if (params) {
    const { name, description, index, done } = params;
    // indexes. In other words, if "/tasks?index=1,3" I'll get the tasks
    // indexed either 1 or 3 (i.e. 0 and 2 since the reindexing still applies)

    tasks = tasks.filter((task: Task, taskIndex: number) => {
      if (
        name &&
        !task.name.toLowerCase().includes(String(name).toLowerCase())
      ) {
        return false;
      }
      if (
        description &&
        !task.description
          .toLowerCase()
          .includes(String(description).toLowerCase())
      ) {
        return false;
      }
      if (done && task.isDone != ["true", "1"].includes(String(done))) {
        return false;
      }
      if (index && taskIndex != Number(index)) {
        return false;
      }
      return true;
    });
  }

  res.send(tasks);
});
app.post("/tasks", (req: Request, res: Response) => {
  const {
    name,
    description,
    isDone,
  }: { name: string; description: string; isDone: boolean } = req.body;

  if (!name) {
    res.status(400).send("Bad request");
    return;
  }
  const newTask: Task = { name, description, isDone };

  writeTasks([...readTasks(), newTask]);
  res.status(201).send("New task created");
});

app.post("/tasks", (req: Request, res: Response) => {
  const { name, description, done } = req.body;
  // ? Why do we use `true` as a boolean here?
  const isDone = done !== undefined && done !== null && done === true;

  // TODO: The creation must comply with the following requirements:
  // - If data is bad (name not there or empty), return 400
  // - If type is bad for any field (e.g. int for name), also return 400
  // - If there's a repeated name (case insensitive), return 409
  const newTask: Task = { name, description, isDone };

  writeTasks([...readTasks(), newTask]);

  res.status(201).send(newTask);
});

app.delete("/tasks/:index", (req: Request, res: Response) => {
  const { index } = req.params;
  const indexNumber = Number(index);
  const tasks: Task[] = readTasks();

  const updatedTasks = tasks.filter(
    (_, taskIndex) => taskIndex !== indexNumber
  );

  if (tasks.length > updatedTasks.length) {
    writeTasks(updatedTasks);
  }
  res.status(201).send(`Task ${index} deleted`);
});

app.put("/tasks/:index", (req: Request, res: Response) => {
  // TODO: fix the endpoint so that if a field is not given, it doesn't get
  // updated.
  // TODO: The update follows the same rules as the creation:
  // - If data is bad (name not there or empty), return 400
  // - If type is bad for any field (e.g. int for name), also return 400
  // - If there's a repeated name (case insensitive, not the target task), return 400

  const toBeUpdated: Task | undefined = readTasks().find(
    (_, index: number) => index === Number(req.params.index)
  );

  if (toBeUpdated === undefined) {
    res.status(404).send("Not Found");
  } else {
    const { name, description, done } = req.body;
    // ? What's the problem here?
    const isDone = done !== undefined && done !== null && done === true;
    const updatedTask = { name, description, isDone };
    writeTasks(
      readTasks().map((task: Task, index: number) => {
        if (index === Number(req.params.index)) {
          return updatedTask;
        } else {
          return task;
        }
      })
    );

    res.send();
  }
});

// TODO: New User Entrypoints
// Create a users.json file in the same directory as tasks.json
// A User has a name, an email and a password, all strings
// We'll have the following endpoints
//
// GET /users
// Return for each user the name and email, but not the password
app.put("/users", (req: Request, res: Response) => {
  const params = req.query;

  let users: User[] = readUsers();
  if (params) {
    const { name, email, index } = params;
    // indexes. In other words, if "/tasks?index=1,3" I'll get the tasks
    // indexed either 1 or 3 (i.e. 0 and 2 since the reindexing still applies)

    users = users.filter((user: User, userIndex: number) => {
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

  const usersWithoutPassword = users.map(({ password, ...user }) => user);
  res.send(usersWithoutPassword);
});

// GET /users/:index
// Return a user (again no password) by index. 404 if it doesn't exist
app.get("/users/:index", (req: Request, res: Response) => {
  const users: User[] = readUsers();
  const userIndex = Number(req.params.index);

  if (userIndex < 0 || userIndex >= users.length || isNaN(userIndex)) {
    res.status(404).send("User not found");
    return;
  }

  const { password, ...userWithoutPassword } = users[userIndex];

  res.send(userWithoutPassword);
});

//TODO: The update follows the same rules as the creation:
// - If data is bad (name not there or empty), return 400
// - If type is bad for any field (e.g. int for name), also return 400
// - If there's a repeated name (case insensitive, not the target task), return 400
app.put("/users/:index", (req: Request, res: Response) => {
  const toBeUpdated: User | undefined = readUsers().find(
    (_, index: number) => index === Number(req.params.index)
  );

  if (toBeUpdated === undefined) {
    res.status(404).send("Not Found");
  } else {
    const { name, email, password, index } = req.body;
    const updatedUser = { name, email, password, index };
    writeUsers(
      readUsers().map((user: User, index: number) => {
        if (index === Number(req.params.index)) {
          return updatedUser;
        } else {
          return user;
        }
      })
    );

    res.send();
  }
});
//
// POST /register
// Create a new user, all three fields are required and must be a string
// The email has to have
// - Some text (one or more characters)
// - An "@" symbol
// - Some more text
// - a "."
// - Then some more text
// If any of these constraints fail -> return a 400
// Otherwise create the user and return a 201
app.post("/register", (req: Request, res: Response) => {
  const {
    name,
    email,
    password,
  }: { name: string; email: string; password: string } = req.body;

  if (
    typeof name !== "string" ||
    typeof email !== "string" ||
    typeof password !== "string"
  ) {
    res.status(400).send("All fields must be strings");
    return;
  }

  const emailRegex = /^[^@]+@[^@]+\.[^@]+$/;
  if (!emailRegex.test(email)) {
    res.status(400).send("Invalid email format");
    return;
  }

  const users = readUsers();
  users.push({ name, email, password });
  writeUsers(users);

  res.status(201).send("User created successfully");
});
// POST /login
// Receive an email and a password
// Return 200 if both match a user in the file, otherwise 401
app.post("/login", (req: Request, res: Response) => {
  const { email, password }: { email: string; password: string } = req.body;
  if (!email || !password) {
    res.status(400).send("Email and password are required");
    return;
  }

  if (typeof email !== "string" || typeof password !== "string") {
    res.status(400).send("Email and password must be strings");
    return;
  }

  const users = readUsers();
  const user = users.find((u) => u.email === email && u.password === password);

  if (!user) {
    res.status(401).send("Invalid email or password");
    return;
  }

  res.status(200).send("Login successful");
});

// Start only if it's executed directly, not imported
if (require.main === module) {
  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
  });
}

export { app };
