const tasks = {
   "Update website": {
      taskName: "Update website",
      taskNotes: "Maintain the website to standards",
      taskPriority: "High Priority",
      taskDueDate: new Date(),
      taskProject: "Web development",
      taskComplete: false,
   },
}

function createTask(
   taskName,
   taskNotes,
   taskPriority,
   taskDueDate,
   taskProject,
   taskComplete
) {
   taskName = `${taskName}`
   tasks[`${taskName}`] = {
      taskName,
      taskNotes,
      taskPriority,
      taskDueDate,
      taskProject,
      taskComplete,
   }
}

function removeTask(name) {
   delete tasks[`${name}`]
}

function updateTask() {}

export { tasks, createTask, removeTask, updateTask }
