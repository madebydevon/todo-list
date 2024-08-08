import { displayTasks } from "./displayTasks.js"
import { processNewTask } from "./handleUserInput.js"
import { tasks } from "./taskManager.js"

export function handleNewTask() {
   let tasksLength = tasks.length
   const newTaskButton = document.querySelector("button.new-task")
   const newTaskModal = document.querySelector("#new-task-dialog")
   const submitButton = document.querySelector("button.submit-new-task")

   function handleTaskLocal() {
      processNewTask()
      newTaskModal.close()
      displayTasks()
   }

   newTaskButton.addEventListener("click", () => {
      newTaskModal.showModal()
      submitButton.removeEventListener("click", handleTaskLocal)
      submitButton.addEventListener("click", handleTaskLocal)
   })
}
