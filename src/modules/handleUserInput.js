import { tasks, createTask } from "./taskManager.js"
import { closeModal } from "./listenEvents.js"

function getNewTaskFormOutput() {
   const nameInput = document.querySelector("input[class='task-name']")
   let taskName = nameInput.value

   const notesInput = document.querySelector("textarea[class='task-notes']")
   let taskNotes = notesInput.value

   const priorityInput = document.querySelector("select#task-priority")
   let taskPriority = priorityInput.value

   const dueDateInput = document.querySelector("input[type='date']")
   let taskDueDate = new Date(dueDateInput.value)

   const projectInput = document.querySelector("select#task-project")
   let taskProject = ""
   if (projectInput.value === "No priority") {
      return
   } else {
      taskProject = projectInput.value
   }

   if (validateInput(taskName, taskPriority, taskProject) == true) {
      closeModal()
      createTask(
         `${taskName}`,
         `${taskNotes}`,
         `${taskPriority}`,
         taskDueDate,
         `${taskProject}`,
         false
      )
   } else {
      return
   }
}

function validateInput(taskName, taskPriority, taskProject) {
   if (taskName === "" || taskPriority === "" || taskProject === "") {
      return false
   } else {
      return true
   }
}

function handleNewTaskFormOutput() {
   console.log(tasks)
}

export function processNewTask() {
   getNewTaskFormOutput()
   handleNewTaskFormOutput()
}
