import { tasks } from "./taskManager.js"
import { createTaskDisplay } from "./utility.js"
import { clearDisplay } from "./domManipulation.js"

// function to turn priority into color so I can properly create the UI (i might just scrap this part)
function getTaskPriorityColor(priority) {
   let color = ""
   if (priority == "High") {
      color = "red"
      console.log(color)
      return color
   }
}

// function translateDueDate(dueDate) {
//    console.log(dueDate.getDay())
// }

export function displayTasks() {
   clearDisplay();

   Object.values(tasks).forEach((task, index) => {
      createTaskDisplay(
         task.taskName,
         task.taskNotes,
         getTaskPriorityColor(task.taskPriority),
         task.taskDueDate, // translate the date to "Tue, 27 Aug" for example
         task.taskProject,
         task.taskComplete
      )
   })
}
