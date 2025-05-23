import readline, { Interface as ReadlineInterface } from "readline";

import { readTasks, writeTasks } from "src/file-ops";
import { Task } from "src/types";

let rl: ReadlineInterface;

export function main() {
  rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  console.log("Welcome to the task manager!");
  showUsage();
  rl.on("line", (line) => {
    const args = line.split(" ");

    switch (args[0]) {
      case "":
      case "help":
        break;
      case "read-all":
        showTasks();
        break;
      case "filter":
        showTasksByName(rl);
        break;
      case "create":
        creationMenu();
        break;
      case "delete":
        deleteTasksByIndex(rl);
        break;
      case "exit":
        console.log("Exiting...");
        rl.close();
        return;
      default:
        console.log("Unknown command");
        break;
    }

    showUsage();
  });
}

function showUsage() {
  console.log("Commands: help, read-all, filter, create, delete, exit");
}

/**
 * Reads tasks from the file and logs them to the console.
 */
function showTasks(): void {
  readTasks().forEach((t) => {
    console.log(`Nombre: ${t.name}`);
    if (t.description) {
      console.log(`Descripción: ${t.description}`);
    }
  });
}

/**
 * Asks the user for a name and filters tasks that contain that name, then
 * console.log it.
 */
function showTasksByName(rl: ReadlineInterface): void {
  rl.question("¿Nombre de la tarea?", (name: string) => {
    readTasks()
      .filter((t) => t.name.includes(name))
      .forEach((t) => {
        console.log(`Nombre: ${t.name}`);
        if (t.description) {
          console.log(`Descripción: ${t.description}`);
        }
      });
  });
}

/**
 * 1. Shows the tasks preceded by an index. (0 - Task 1)
 * 2. Asks the user for an index and deletes the task at that index.
 * 3. If a wrong index is provided, it shows an error message.
 */
function deleteTasksByIndex(rl: ReadlineInterface): void {
  const tasks: Task[] = readTasks();
  tasks.forEach((t: Task, i: number) => {
    console.log(`Indice ${i} - Name: ${t.name}`);
    if (t.description) {
      console.log(`Descripción: ${t.description}`);
    }
  });

  rl.question("¿Índice de la tarea que quieres eliminar?", (index: string) => {
    const indiceNumber: number = Number.parseInt(index);

    if (tasks.length <= indiceNumber || indiceNumber < 0) {
      console.log("El indice no es valido");
    } else {
      const tasksWithoutDeletedIndex = tasks.filter(
        (_, index) => index !== indiceNumber
      );
      console.log(`Tarea eliminada: ${tasks[indiceNumber].name}`);
      writeTasks(tasksWithoutDeletedIndex);
    }
  });
}

function creationMenu() {
  console.log("Creating a new task");
  rl.question("Name: ", (name) => {
    rl.question("Description: ", (description) => {
      createTask(name, description);
    });
  });
}

function createTask(name: string, description?: string | null): void {
  const newTask = { name, description } as Task;

  const tasks = readTasks();

  tasks.push(newTask);

  writeTasks(tasks);

  console.log(`New task added: \n\n${name}\n${description}`);
}

main();
