// TODO APP
import("./style.css")
import { handleNewTask, onTaskClick } from "./modules/listenEvents.js"
import { displayTasks } from "./modules/displayTasks.js"
import {
   tasks,
   createTask,
   removeTask,
   updateTask,
} from "./modules/taskManager.js"

const exampleTask = createTask(
   `Research topics`,
   "Investigate several topics for my research",
   "Medium priority",
   new Date(),
   "Default",
   false
)

document.addEventListener("DOMContentLoaded", () => {
   displayTasks()
   onTaskClick()
   handleNewTask()
})

console.log(tasks)
