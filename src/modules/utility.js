import flagIcon from "../assets/flag-outline.svg"

export function createTaskDisplay(
   taskName,
   taskNotes,
   taskPriority,
   taskDueDate,
   taskProject,
   taskComplete
) {
   const container = document.querySelector("div.tasks")
   const wrapper = document.createElement("div")
   wrapper.classList.add("task")

   const taskNameText = document.createElement("p")
   taskNameText.classList.add("task-name")
   taskNameText.textContent = `${taskName}`

   const taskDetails = document.createElement("div")
   taskDetails.classList.add("task-details")

   // const icon = document.createElement("img")
   // icon.src = flagIcon
   // icon.classList.add("priority-indicator")
   // icon.setAttribute("aria-hidden", "true")
   // icon.setAttribute("width", "24px")
   // icon.setAttribute("color", taskPriority)

   const dueDate = document.createElement("p")
   dueDate.classList.add("due-date")
   dueDate.textContent = taskDueDate

   container.appendChild(wrapper)
   wrapper.appendChild(taskNameText)
   wrapper.appendChild(taskDetails)
   // taskDetails.appendChild(icon)
   taskDetails.appendChild(dueDate)
}
