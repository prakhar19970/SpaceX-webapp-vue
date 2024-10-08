<template>
    <navbar-comp>
        <div class="flex q-pa-lg items-center pointer" @click="navigateTo('Home')">
          <q-icon
            name="arrow_back_ios"
            size="md"
          />
          <div class="text-h6">Launches</div>
        </div>
    </navbar-comp>
    <div class="details-page-wrapper text-white q-px-lg" @scroll="onPageScroll">
        <div class="text-h4">Mission Details</div>
        <div class="row">
            <div class="details-wrapper q-mr-lg">
            <info-text-comp class="f-16 fw-500" iconName="confirmation_number">
                Name : {{ missionDetails?.mission_name }}
            </info-text-comp>
            <info-text-comp class="f-16 fw-500" iconName="rocket">
                Rocket Name : {{ missionDetails?.rocket?.rocket_name }}
            </info-text-comp>
            <info-text-comp
                v-if="missionDetails?.launch_date_utc"
                class="f-16 fw-500" icon-name="event"
            >
                Launch Date : {{getFormattedDate(missionDetails.launch_date_utc)}}
            </info-text-comp>
            <info-text-comp
                v-if="missionDetails?.details"
                class="f-16 fw-500 items-start" icon-name="description"
            >
                Details : {{ missionDetails?.details }}
            </info-text-comp>
            <info-text-comp
                v-if="missionDetails?.links?.article_link"
                class="f-16 fw-500" icon-name="article"
                >
                <div>
                    Article : <a class="link-text" target="_blank" :href="missionDetails?.links?.article_link">{{missionDetails?.links?.article_link}}</a>
                </div>
            </info-text-comp>
            </div>
            <q-img class="mission-image" :ratio="16/9" :src="missionImg" />
        </div>
    </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import InfoTextComp from 'src/components/atoms/InfoTextComp.vue'
import { LaunchInfo } from '@models/launchModel'
import mixins from 'src/mixins/mixins'
import NavbarComp from 'src/components/molecules/NavbarComp.vue'
import missionImg from '@assets/jpg/spacex-cover-starlink.jpg'
export default defineComponent({
  name: 'LaunchDetailsPage',
  components: { InfoTextComp, NavbarComp },
  mixins: [mixins],
  created () {
    if (this.$route && this.$route?.params?.id) {
      this.getLaunchInfoById(this.$route?.params?.id)
    }
  },
  data () {
    const missionDetails = {} as LaunchInfo | null
    return { missionDetails, missionImg }
  },
  methods: {
    getLaunchInfoById (launchId: string) {
      const missionsData = JSON.parse(localStorage.spaceXLaunchesData)
      const index = missionsData.findIndex((launchData : LaunchInfo) => launchData?.id === launchId)
      this.missionDetails = missionsData[index]
    },
    onPageScroll (event: Event): void {
      const element = event.target as HTMLElement
      if (element) {
        const scrollTop = element.scrollTop
        const toolbarElement = document.getElementById('main-toolbar') as HTMLElement
        if (toolbarElement && scrollTop >= 10) {
          toolbarElement.classList.add('blur-effect')
        } else {
          toolbarElement.classList.remove('blur-effect')
        }
      }
    }
  }
})
</script>
<style lang="scss" scoped>
.details-page-wrapper{
    display: flex;
    flex-direction: column;
    height: 100vh;
    overflow-y: scroll;
    padding-top: 80px;
}
.details-wrapper{
    display: flex;
    flex-direction: column;
    width:40%;
    gap:16px;
    padding:24px;
}
.link-text{
  color: $primary;
  overflow-wrap: anywhere;
}
.mission-image{
    display: flex;
    flex-grow: 1;
    border-radius: 16px;
    width: 420px;
    height: 350px;
}
@media only screen and (max-width: 800px) {
  .details-wrapper{
    width: 100%;
  }
}
</style>
