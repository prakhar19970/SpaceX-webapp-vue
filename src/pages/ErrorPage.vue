<template>
  <div class="page-wrapper fullscreen text-white text-center q-pa-md flex flex-center">
    <div>
      <div style="font-size: 10vh">
        <q-icon name="mood_bad" style="font-size: 10vh" size="xl"/>
        <div> Oops. Nothing here</div>
      </div>

      <div class="text-h5" style="opacity:.4">
        We dont have this path yet
      </div>

      <q-btn
        class="q-mt-xl"
        color="white"
        text-color="blue"
        unelevated
        to="/"
        label="Go Home"
        no-caps
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'ErrorNotFound'
})
</script>
<style lang="scss" scoped>
.page-wrapper{
  background: $surface-dark-main;
}
</style>
