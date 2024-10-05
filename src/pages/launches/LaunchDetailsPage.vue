<template>
    <div class="page-wrapper text-white">
        <info-text-comp> Hello </info-text-comp>
        {{ launchDetails }}
    </div>
</template>
<script lang="ts">
import { defineComponent, PropType } from 'vue'
import InfoTextComp from '../../components/atoms/InfoTextComp.vue'
import { LaunchInfo } from '../../models/launchModel'
export default defineComponent({
  name: 'LaunchDetailsPage',
  components: { InfoTextComp },
  created () {
    if (this.$route && this.$route?.params?.id) {
      this.getLaunchInfoById(this.$route?.params?.id)
    }
  },
  data () {
    return { launchDetails: {} as LaunchInfo }
  },
  methods: {
    getLaunchInfoById (launchId: string) {
      const items = JSON.parse(localStorage.spaceXLaunchesData)
      this.launchDetails = items.filter((launchData : LaunchInfo) => launchData.id === launchId)
    }
  }
})
</script>
<style lang="scss" scoped>
.page-wrapper{
    display: flex;
    flex-direction: column;
    padding-top: 80px;
}
</style>
