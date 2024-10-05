<template>
  <q-layout view="hHh Lpr lFf" class="fixed">
    <div id="main-toolbar" class="toolbar">
      <q-img class="main-logo" src="../assets/svg/spaceX-white-logo.svg"/>
      <q-tabs v-model="tab" shrink>
        <q-tab name="tab1" @click="navigateTo('Home')">
          <div class="flex items-center justify-center"><q-icon name="home" size="sm" class="q-mr-sm"/>Home</div>
          </q-tab>
        <q-tab name="tab2" @click="navigateTo('Launch Form')">
          <div class="flex items-center justify-center"><q-icon name="rocket" size="sm" class="q-mr-sm"/>Launch Form</div>
          </q-tab>
      </q-tabs>
    </div>
    <q-page-container class="page-wrapper" @scroll="onPageScroll">
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'MainLayout',

  components: {
  },

  data () {
    const tab = 'tab1'
    return {
      tab
    }
  },

  methods: {
    navigateTo (pageName: string) {
      console.log(pageName)
      this.$router.push({ name: pageName })
    },
    onPageScroll (event: Event): void {
      const element = event.target as HTMLElement
      const toolbarElement = document.getElementById('main-toolbar') as HTMLElement
      if (element && toolbarElement && element.scrollTop >= 400) {
        toolbarElement.classList.add('blur-effect')
      } else {
        toolbarElement.classList.remove('blur-effect')
      }
    }
  }
})
</script>
<style lang="scss" scoped>
  .toolbar{
    position: absolute;
    display: flex;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    color:#ffffff;
    justify-content: space-between;
    background: transparent;
    height: 80px;
    z-index: 1;
    transition: 0.5s ease;
  }
  .blur-effect{
    backdrop-filter: blur(15px);
  }
  .page-wrapper{
    background: #121212;
    overflow-y:scroll;
    height: 100vh;
    max-height: 100vh;
  }
  .main-logo{
    height: 80px;
    width: 250px;
  }
</style>
