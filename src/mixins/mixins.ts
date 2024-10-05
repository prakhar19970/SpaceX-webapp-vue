import { defineComponent } from 'vue'

export default defineComponent({
  data () {
    const months: string[] = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

    return { months }
  },
  methods: {
    getFormattedDate (dateString : Date) {
      const givenDate = new Date(dateString)
      return `${this.months[givenDate.getUTCMonth()]} ${givenDate.getUTCDate()}, ${givenDate.getUTCFullYear()}`
    }
  }
})
