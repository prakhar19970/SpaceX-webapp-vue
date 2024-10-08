<template>
  <div class="card" v-for="launchData in launchList" :key="launchData?.id" @click="goToLaunchInfoPage(launchData?.id)">
    <div class="flex justify-between items-center no-wrap">
      <div class="card-title text-white ellipsis q-mr-md">{{ launchData?.mission_name }}</div>
      <info-text-comp
        v-if="launchData?.launch_year"
        class="card-body-title" icon-name="event"
        :info-text="launchData.launch_year"
      />
    </div>
    <q-separator color="grey-5" class="q-my-sm"/>
    <template  v-if="launchData?.details">
      <div v-if="launchData?.details" class="card-body-title">Details</div>
      <info-text-comp
        v-if="launchData?.details"
        class="card-body-title"
      >
      {{stringEllipsis(launchData?.details, 90)}}
      </info-text-comp>
    </template>
    <template v-else>
      Mission Details not available. <br>Click More to See other details.
    </template>
    <div class="flex flex-1 items-end justify-end" @click.stop="goToLaunchInfoPage(launchData?.id)">
      <div class="text-orange-4">More...</div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import InfoTextComp from '../atoms/InfoTextComp.vue'
import mixins from 'src/mixins/mixins'
import { useQuasar } from 'quasar'
import { LaunchInfo } from '@models/launchModel'
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
  setup () {
    const q$ = useQuasar()

    return { q$ }
  },
  methods: {
    goToLaunchInfoPage (launchId: string) {
      if (launchId) {
        this.$router.push({ name: 'Launch Details Page', params: { id: launchId } })
      } else {
        this.q$.notify({
          color: 'indigo-4',
          position: 'top',
          icon: 'warning',
          message: 'Launch Id not Found'
        })
      }
    }
  }
})
</script>

<style lang="scss" scoped>
.homepage-wrapper{
  background: $surface-dark-main;
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
  background: $surface-dark-1;
  color: $primary;
  border-radius: 12px;
  padding: 16px;
  gap: 8px;
  cursor: pointer;
  opacity: 1;
  transition: opacity 1.5s ease;
}
.details-section{
  height:40px;
}
.card-title{
  font-size: 24px;
  font-weight: 600;
}

.card-body-title{
  font-size: 16px;
  font-weight: 500;
}

@media only screen and (max-width: 600px) {
  .card{
    width: 100%;
  }
  .card-title{
    font-size: 18px;
    font-weight: 600;
  }

  .card-body-title{
    font-size: 12px;
    font-weight: 500;
  }
}
</style>
