import { tasks } from "./taskManager.js"
import { createTaskDisplay } from "./utility.js"
import { clearDisplay } from "./domManipulation.js"
import { translateDueDate } from "./dateHandler.js"
import { onTaskClick } from "./listenEvents.js"

// function to turn priority into color so I can properly create the UI (i might just scrap this part)

export function displayTasks() {
   clearDisplay()
   Object.values(tasks).forEach((task, index) => {
      createTaskDisplay(
         task.taskName,
         task.taskNotes,
         task.taskPriority,
         translateDueDate(task.taskDueDate), // translate the date to "Tue, 27 Aug" for example
         task.taskProject,
         task.taskComplete
      )
   })
}
