export function translateDueDate(dueDate) {
   // turn the date into a string with basic info
   if (dueDate == "Invalid Date") {
      return "No due date"
   } else {
      const date = new Date(dueDate)
      const formatOptions = { weekday: "short", day: "numeric", month: "short" }
      const translatedDueDate = date.toLocaleDateString("en", formatOptions)

      return translatedDueDate
   }
}
