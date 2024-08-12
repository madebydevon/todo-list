export function clearDisplay() {
   const taskContainer = document.querySelector(".tasks")
   taskContainer.textContent = ""
}

export function populateTaskForm(taskInfo) {
   const taskModal = document.querySelector(
      ".update-modal-backdrop .update-modal"
   )
   taskModal.showModal()

   const modalTaskName = document.querySelector("dialog .update-task-name")
   modalTaskName.value = taskInfo.taskName
   const modalTaskNotes = document.querySelector("dialog .update-task-notes")
   modalTaskNotes.value = taskInfo.taskNotes
   const modalTaskPriority = document.querySelector(
      "dialog .update-task-priority"
   )
   modalTaskPriority.value = `${taskInfo.taskPriority}`
   const modalTaskProject = document.querySelector(
      "dialog .update-task-project"
   )
   modalTaskProject.value = `${taskInfo.taskProject}`
   const modalTaskDueDate = document.querySelector(
      "dialog .update-task-due-date"
   )
   if (taskInfo.taskDueDate) {
      const date = new Date(taskInfo.taskDueDate)
      const formattedDate = date.toISOString().split("T")[0]
      modalTaskDueDate.value = formattedDate
   } else {
      modalTaskDueDate.value = ""
   }
}
