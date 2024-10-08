<template>
  <div id="main-toolbar" class="toolbar">
    <slot/>
    <q-tabs v-if="showTabs" v-model="tab" shrink>
      <q-tab v-for="tab in tabsList" :key="tab?.name" :name="tab?.name" @click="navigateTo(tab?.name)">
        <div class="flex items-center justify-center">
          <q-icon :name="tab?.icon" size="sm" class="q-mr-sm" />{{ tab?.name }}
        </div>
      </q-tab>
    </q-tabs>
  </div>
</template>
<script lang="ts">
import { defineComponent, PropType } from 'vue'
import mixins from '../../mixins/mixins'
import { Tab } from '@models/tabsModel'
export default defineComponent({
  name: 'NavbarComp',
  props: {
    defaultTab: {
      type: String as PropType<string>,
      default: ''
    },
    tabsList: {
      type: Array as PropType<Tab[]>,
      default: () => []
    },
    currentTab: {
      type: String as PropType<string>,
      default: ''
    }
  },
  mixins: [mixins],
  computed: {
    showTabs () {
      if (this.$route && (this.$route.name === 'Home' || this.$route.name === 'Launch Form' || !this.$route.name)) {
        return true
      }
      return false
    }
  },
  data () {
    const tab = '' as string

    return { tab }
  },
  watch: {
    currentTab: {
      handler (newVal) {
        this.tab = newVal
      },
      immediate: true
    }
  },
  mounted () {
    if (this.showTabs && (localStorage.tabName || this.defaultTab || this.currentTab)) {
      this.tab = localStorage.tabName || this.currentTab || this.defaultTab
      this.$router.push({ name: this.tab })
    }
  },
  methods: {
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
    color: $primary;
    justify-content: space-between;
    background: transparent;
    height: 80px;
    z-index: 1;
    transition: 0.5s ease;
  }
</style>
