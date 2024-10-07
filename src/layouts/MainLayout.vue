<template>
  <q-layout view="hHh Lpr lFf" class="fixed">
    <navbar-comp v-if="showNavbar" default-tab="Home" :current-tab="tab" :tabs-list="tabsList">
      <q-img
        class="main-logo pointer"
        :src="SpaceXLogo"
        @click="navigateTo('Home')"
      />
    </navbar-comp>
    <q-page-container class="page-wrapper">
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">
import NavbarComp from 'src/components/molecules/NavbarComp.vue'
import SpaceXLogo from '@assets/svg/spaceX-white-logo.svg'
import mixins from '@mixins/mixins'
import { defineComponent } from 'vue'
import { Tab } from '@models/tabsModel'
export default defineComponent({
  name: 'MainLayout',
  data () {
    const tab = ''
    const tabsList: Tab[] = [
      {
        name: 'Home',
        icon: 'home'
      },
      {
        name: 'Launch Form',
        icon: 'rocket'
      }
    ]
    return { tab, tabsList, SpaceXLogo }
  },
  components: {
    NavbarComp
  },
  mixins: [mixins],
  computed: {
    showNavbar () {
      if (this.$route && (this.$route.name === 'Home' || this.$route.name === 'Launch Form' || !this.$route.name)) {
        return true
      }
      return false
    }
  },
  watch: {
    $route: {
      handler (newVal, oldVal) {
        if (newVal && newVal.name) {
          this.tab = newVal.name
        }
      },
      immediate: true
    }
  },
  mounted () {
    if (localStorage.tabName) {
      this.tab = localStorage.tabName
    }
  }
})
</script>
<style lang="scss" scoped>
  .page-wrapper{
    background: $surface-dark-main;
    overflow-y:scroll;
    height: 100vh;
  }
  .main-logo{
    height: 80px;
    width: 250px;
  }
</style>
