<template>
  <div class="card" v-for="launchData in launchList" :key="launchData.id" @click="goToLaunchInfoPage(launchData.id)">
    <div class="fw-600 f-24 text-white">{{ launchData.mission_name }}</div>
    <q-separator color="grey-5" class="q-my-sm"/>
    <info-text-comp
      v-if="launchData?.rocket"
      class="f-16 fw-500"
      icon-name="rocket"
      :info-text="launchData?.rocket?.rocket_name"
    />
    <info-text-comp
      v-if="launchData?.launch_date_utc"
      class="f-16 fw-500" icon-name="event"
      :info-text="getFormattedDate(launchData.launch_date_utc)"
    />
    <div class="fw-500 f-16">Article Shortcut :-</div>
    <info-text-comp
      v-if="launchData?.links?.article_link"
      class="f-16 fw-500" icon-name="article"
    >
      <a class="link-text" :href="launchData?.links?.article_link">{{launchData?.links?.article_link}}</a>
    </info-text-comp>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import InfoTextComp from '../atoms/InfoTextComp.vue'
import mixins from '../../mixins/mixins'
import { LaunchInfo } from '../../models/launchModel'
export default defineComponent({
  name: 'MissionCard',
  components: { InfoTextComp },
  mixins: [mixins],
  props: {
    launchList: {
      type: Array as PropType<LaunchInfo[]>,
      required: true,
      default: () => []
    }
  },
  methods: {
    goToLaunchInfoPage (launchId: string) {
      this.$router.push({ name: 'Launch Details Page', params: { id: launchId } })
    }
  }
})
</script>

<style lang="scss" scoped>
.homepage-wrapper{
  background: #121212;
  overflow-y:scroll;
  height: 94vh;
  max-height: 94vh;
}
.cards-section{
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
}
.card{
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  width: 350px;
  box-shadow: 0 1px 5px #fff3, 0 2px 2px #ffffff24, 0 3px 1px -2px #ffffff1f;
  background: #1d1d1d;
  color: #ffffff;
  border-radius: 12px;
  padding: 16px;
  gap: 8px;
  cursor: pointer;
}
.details-section{
  height:40px;
}
.link-text{
  color: #ffffff;
  overflow-wrap: anywhere;
}
@media only screen and (max-width: 600px) {
  .card{
    width: 100%;
  }
}
</style>
