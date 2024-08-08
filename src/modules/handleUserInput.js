import { tasks, createTask } from "./taskManager.js"

function getNewTaskFormOutput() {
   const nameInput = document.querySelector("input[class='task-name']")
   let taskName = nameInput.value
   nameInput.value = ""

   const notesInput = document.querySelector("textarea[class='task-notes']")
   let taskNotes = notesInput.value
   notesInput.value = ""

   const priorityInput = document.querySelector("select#task-priority")
   let taskPriority = priorityInput.value
   priorityInput.value = ""

   const dueDateInput = document.querySelector("input[type='date']")
   let taskDueDate = dueDateInput.value
   dueDateInput.value = ""

   const projectInput = document.querySelector("select#task-project")
   let taskProject = projectInput.value
   projectInput.value = ""

   if (
      validateInput(
         `${taskName}`,
         `${taskNotes}`,
         `${taskPriority}`,
         `${taskDueDate}`,
         `${taskProject}`
      ) == true
   ) {
      createTask(
         `${taskName}`,
         `${taskNotes}`,
         `${taskPriority}`,
         `${taskDueDate}`,
         `${taskProject}`
      )
   } else {
      return
   }
}

function validateInput(
   taskName,
   taskNotes,
   taskPriority,
   taskDueDate,
   taskProject
) {
   console.log(taskName, taskNotes, taskPriority, taskDueDate, taskProject)
   if (taskName === "" || taskPriority === "" || taskProject === "") {
      return
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
