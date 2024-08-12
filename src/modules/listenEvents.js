import { displayTasks } from "./displayTasks.js"
import { processNewTask } from "./handleUserInput.js"
import { tasks, updateTask } from "./taskManager.js"
import { getTaskInfo } from "./taskManager.js"
import { populateTaskForm } from "./domManipulation.js"

export function closeModal() {
   const newTaskModal = document.querySelector("#new-task-dialog")
   newTaskModal.close()
}

export function handleNewTask() {
   const priorityInput = document.querySelector("select#task-priority")
   priorityInput.value = "No priority"
   const newTaskButton = document.querySelector("button.new-task")
   const newTaskModal = document.querySelector("#new-task-dialog")
   const form = document.querySelector("#new-task-dialog > form")
   const submitButton = document.querySelector("button.submit-new-task")
   const cancelButton = document.querySelector("button.cancel-new-task")

   function handleTask(event) {
      processNewTask()
      displayTasks()
      event.preventDefault()
      form.reset()
   }

   newTaskButton.addEventListener("click", () => {
      newTaskModal.showModal()
      submitButton.removeEventListener("click", handleTask)
      submitButton.addEventListener("click", handleTask)
      cancelButton.removeEventListener("click", closeModal)
      cancelButton.addEventListener("click", closeModal)
   })
}

export function onTaskClick() {
   const tasks = document.querySelectorAll(".task")
   const modal = document.querySelector("dialog.update-modal")
   const updateButton = document.querySelector("button.update-task")
   const deleteButton = document.querySelector("button.delete-task")

   function handleEventListeners(taskInfo) {
      updateTask(taskInfo)

      const updateModal = document.querySelector("dialog.update-modal")
      updateModal.close()

      displayTasks()
      onTaskClick()
   }

   function handleClick(event) {
      if (event.target.classList.contains("complete-task")) {
         return
      }

      const selectedElement = event.target
      const taskInfo = getTaskInfo(
         `${selectedElement.closest(".task").getAttribute("data-value")}`
      )

      modal.showModal()
      populateTaskForm(taskInfo)

      updateButton.removeEventListener("click", () => {
         handleEventListeners(taskInfo)
      })
      updateButton.addEventListener("click", () => {
         handleEventListeners(taskInfo)
      })
   }

   tasks.forEach((task, index) => {
      task.removeEventListener("click", handleClick)
      console.log("Event listener for each task attached")
      task.addEventListener("click", handleClick)
   })
}

function setupUpdateButtonListener(taskInfo) {
   const updateButton = document.querySelector("button.update-task")
   function updateTaskHandler() {
      // Update the taskInfo object with form values before saving
      taskInfo.taskName = document.querySelector(".update-task-name").value
      taskInfo.taskNotes = document.querySelector(".update-task-notes").value
      taskInfo.taskPriority = document.querySelector(
         ".update-task-priority"
      ).value
      taskInfo.taskProject = document.querySelector(
         ".update-task-project"
      ).value
      taskInfo.taskDueDate = document.querySelector(
         ".update-task-due-date"
      ).value

      // Update the main tasks object
      updateTask(taskInfo)

      // Close the update modal
      const updateModal = document.querySelector("dialog.update-modal")
      updateModal.close()

      displayTasks()
   }

   updateButton.removeEventListener("click", updateTaskHandler)
   updateButton.addEventListener("click", updateTaskHandler)
}
