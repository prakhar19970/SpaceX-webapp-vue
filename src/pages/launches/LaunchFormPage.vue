<template>
    <q-page class="row items-center justify-evenly">
      <div class="row no-wrap items-center justify-evenly">
        Launch Form Page
        *we will use Vuelidate in this form
      </div>
    </q-page>
  </template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'LaunchFormPage',
  components: { },
  data () {
    return {
      form: null
    }
  }
})
</script>
