<template>
<div class="homepage-wrapper">
  <div class="hero-img-container">
    <q-img class="hero-img" loading="lazy" src="../../assets/jpg/spacex-launch-cover.jpg" fit="cover"/>
  </div>
  <div class="text-h2 text-white text-center q-my-xl">LAUNCHES</div>
  <div class="cards-section q-mx-lg q-mb-lg">
    <mission-card :launch-list="visibleItems"/>
  </div>
</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import payload from '../../constants/Payload.json'
import MissionCard from 'src/components/cards/MissionCard.vue'
interface Item {
  mission_name: string,
  rocket: {
    rocket_name: string
  },
  id: string,
  launch_date_utc: Date,
  launch_year: string,
  details: string,
  links: {
    article_link: string
  }
}
export default defineComponent({
  name: 'HomePage',
  components: {
    MissionCard
  },
  data () {
    const items: Item[] = []
    const visibleItems : Item[] = [] // Array to hold the currently visible items
    const itemsPerPage = 5 // Number of items to load each time
    const currentIndex = 0 // Index to track loaded items
    const loading = false // Loading state
    return { items, visibleItems, itemsPerPage, currentIndex, loading }
  },
  created () {
    localStorage.spaceXLaunchesData = JSON.stringify(payload.data.launches)
  },
  mounted () {
    this.items = JSON.parse(localStorage.spaceXLaunchesData)
    this.getLaunchesData()
  },
  methods: {
    getLaunchesData () {
      const launchesNewData = this.items.slice(this.currentIndex, this.currentIndex + this.itemsPerPage)
      console.log(launchesNewData)
      this.visibleItems.push(...launchesNewData)
    }
  }
})
</script>

<style lang="scss" scoped>
.homepage-wrapper{
}
.hero-img-container{
  width: 100%;
  object-fit: contain;
}
.cards-section{
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
}
</style>
