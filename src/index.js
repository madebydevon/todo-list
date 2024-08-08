// TODO APP
import("./style.css")
import { handleNewTask } from "./modules/listenEvents.js"
import { displayTasks } from "./modules/displayTasks.js"
import {
   tasks,
   createTask,
   removeTask,
   updateTask,
} from "./modules/taskManager.js"

const task = createTask(
   "Update website1",
   "Maintain the website to standards",
   "High Priority",
   new Date(),
   "Web development",
   false
)

// tasks[task.taskName] = task

displayTasks()
handleNewTask()
console.log(tasks)

// console.log()

// removeTask(`${task[0]}`)

// console.log(tasks)
