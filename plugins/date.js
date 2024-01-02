export default defineNuxtPlugin(() => {
  return {
    provide: {
      formatDate: (date) => {
        let current_date = new Date(date)
        let month = current_date.getMonth() + 1
        let prepend = month < 10 ? 0 : ''
        return `${current_date.getFullYear()} · ${prepend}${month}`
      }
    }
  }
})
