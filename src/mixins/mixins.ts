import { defineComponent } from 'vue'

export default defineComponent({
  data () {
    // Defining a constant list of Months so later it can be used in Date Formats like eg:- July 26, 2004
    const months: string[] = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

    return { months }
  },
  methods: {
    getFormattedDate (dateString: string) {
      const givenDate = new Date(dateString)

      // Return in Date Format : (Month Name) DD, YYYY
      return `${this.months[givenDate.getUTCMonth()]} ${givenDate.getUTCDate()}, ${givenDate.getUTCFullYear()}`
    },
    navigateTo (pageName: string) {
      localStorage.tabName = pageName
      this.$router.push({ name: pageName })
    },
    lowerCase (value: string) {
      return value.toLowerCase()
    },
    stringEllipsis (stringValue: string, limit: number) {
      if (stringValue.length > limit) {
        return `${stringValue.slice(0, limit)}....`
      }
      return stringValue
    }
  }
})
