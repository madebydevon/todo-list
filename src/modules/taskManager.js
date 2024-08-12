export const tasks = {
   "Update website": {
      taskName: "Update website",
      taskNotes: "Maintain the website to standards",
      taskPriority: "High priority",
      taskDueDate: new Date(),
      taskProject: "Default",
      taskComplete: false,
   },
}

export function createTask(
   taskName,
   taskNotes,
   taskPriority,
   taskDueDate,
   taskProject,
   taskComplete
) {
   tasks[`${taskName}`] = {
      taskName,
      taskNotes,
      taskPriority,
      taskDueDate,
      taskProject,
      taskComplete,
   }
}

export function removeTask(name) {
   delete tasks[`${name}`]
}

export function updateTask(taskInfo) {
   tasks[taskInfo.newTaskName] = taskInfo
   console.log(tasks)
}

export function getTaskInfo(taskDataValue) {
   return {
      taskName: `${tasks[taskDataValue].taskName}`,
      taskNotes: `${tasks[taskDataValue].taskNotes}`,
      taskPriority: `${tasks[taskDataValue].taskPriority}`,
      taskProject: `${tasks[taskDataValue].taskProject}`,
      taskDueDate: `${tasks[taskDataValue].taskDueDate}`,
      taskComplete: `${tasks[taskDataValue].taskComplete}`,
   }
}
