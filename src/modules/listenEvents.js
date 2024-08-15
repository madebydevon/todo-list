import { displayTasks } from "./displayTasks.js"
import { processNewTask } from "./handleUserInput.js"
import { tasks, updateTask } from "./taskManager.js"
import { getTaskInfo } from "./taskManager.js"
import { populateTaskForm } from "./domManipulation.js"
import { translateDueDate } from "./dateHandler.js"

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
   console.log("onTaskClick has ran")
   const modal = document.querySelector("dialog.update-modal")
   const tasks = document.querySelectorAll(".task")

   let originalTaskName = ""

   function handleClick(event) {
      if (event.target.classList.contains("complete-task")) {
         return
      }

      const selectedElement = event.target

      const taskInfo = getTaskInfo(
         `${selectedElement.closest(".task").getAttribute("data-value")}`
      )

      originalTaskName = taskInfo.taskName

      if (modal) {
         modal.showModal()
         console.log("Modal opened")
         populateTaskForm(taskInfo)
         setupUpdateListeners()
         // Set up update button listener for the task
      }
   }

   function setupUpdateListeners() {
      const updateButton = document.querySelector("button.update-task")
      updateButton.removeEventListener("click", handleUpdateClick)
      updateButton.addEventListener("click", handleUpdateClick)
   }

   function handleUpdateClick() {
      // get input, either by seperate function or in this function
      const taskName = document.querySelector("textarea.update-task-name").value
      const taskNotes = document.querySelector(
         "textarea.update-task-notes"
      ).value
      const taskPriority = document.querySelector(
         "select.update-task-priority"
      ).value
      const taskProject = document.querySelector(
         "select.update-task-project"
      ).value
      const taskDueDate = document.querySelector(
         "input.update-task-due-date"
      ).value

      const updatedTask = {
         taskName,
         taskNotes,
         taskPriority,
         taskProject,
         taskDueDate: new Date(taskDueDate),
         taskComplete: false,
      }

      // update the task with that input
      updateTask(updatedTask, originalTaskName)
      // display the tasks again
      displayTasks()
      console.log("Modal closed")
      modal.close()
   }
   
   tasks.forEach((task) => {
      task.removeEventListener("click", handleClick) // Clear existing listeners
      task.addEventListener("click", handleClick)
   })
}
