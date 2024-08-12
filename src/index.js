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

const task = createTask(
   "Research topics",
   "Maintain the website to standards",
   "Medium priority",
   new Date(),
   "Default",
   false
)

// tasks[task.taskName] = task

displayTasks()
handleNewTask()
onTaskClick()
console.log(tasks)

// console.log()

// removeTask(`${task[0]}`)

// console.log(tasks)
