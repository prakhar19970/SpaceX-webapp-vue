<template>
<div class="homepage-wrapper" @scroll="onPageScroll">
  <div class="hero-img-container">
    <q-img class="hero-img" loading="lazy" :src="heroImg" fit="cover"/>
  </div>
  <div class="hero-title q-my-xl">LAUNCHES</div>
  <div class="flex row q-mb-lg q-px-lg no-wrap items-center justify-between">
    <search-comp class="flex-1 q-mr-lg" />
    <sort-comp :options-list="sortOptions" class="flex justify-end"/>
  </div>
  <div class="q-mb-lg">
    <div class="cards-section q-mx-lg">
      <mission-card :launch-list="launchList"/>
    </div>
    <div v-if="loading" class="flex flex-1 justify-center">
      <q-img class="loader" :src="loader"/>
    </div>
  </div>
</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { mapActions, mapGetters } from 'vuex'
import MissionCard from 'src/components/cards/MissionCard.vue'
import { LaunchInfo } from '@models/launchModel'
import { SortOptions } from '@models/sortOptions'
import loader from '@assets/gifs/loader-orange.gif'
import heroImg from '@assets/jpg/spacex-launch-cover.jpg'
import SearchComp from 'src/components/molecules/SearchComp.vue'
import SortComp from 'src/components/molecules/SortComp.vue'
export default defineComponent({
  name: 'HomePage',
  components: {
    MissionCard,
    SearchComp,
    SortComp
  },
  data () {
    const launchMissionsList: LaunchInfo[] = []
    const loading = false // Loading state for the list Loader Animation

    // Sort Options List for the Sort Filter
    const sortOptions: SortOptions[] = [
      { name: 'Launch year', key: 'launch_year', type: 'asc' },
      { name: 'Launch year', key: 'launch_year', type: 'desc' }
    ]
    return { launchMissionsList, loading, loader, heroImg, sortOptions }
  },
  computed: {
    ...mapGetters('missions', ['launchList', 'searchQuery'])
  },
  created () {
    this.getAllMissionsLaunchList() // function for loading all the Launch Missions list
    if (!localStorage.currentIndex) {
      this.updateLaunchList() // function for loading initial launch missions list  if the count does not exisits.
    } else {
      this.reloadState() // function for loading launch missions data if the count of documents loaded before is present.
    }
  },
  methods: {
    ...mapActions('missions', ['getAllMissionsLaunchList', 'updateLaunchList', 'reloadState']),

    // function to detect the page srcoll
    onPageScroll (event: Event): void {
      const element = event.target as HTMLElement
      if (element) {
        // this will give us the scroll position of scroll for homepage-wrapper
        const scrollTop = element.scrollTop

        // this will give us the total height of the element's content (homepage-wrapper) in our case
        const scrollHeight = element.scrollHeight
        const toolbarElement = document.getElementById('main-toolbar') as HTMLElement

        /* Floor values are taken to avoid any decimal values issues
           here we find the difference between the total height of container and scroll position of cursor
           then we will comapare it with the client height (which is visible height of the container)

           on finding less value than the visible height, (our cursor has reached near to bottom of our page)
           now a loader is triggered and launch list is updated by fetching more data.
        */
        const heightDiff = Math.floor(scrollHeight - scrollTop)
        const scrollPositionAtBottom = heightDiff <= Math.floor(element.clientHeight)

        /* we take a delay of one second once scrollPositionAtBottom is reached ,
           this helps with smooth execution of the loader */
        if (scrollPositionAtBottom && !this.loading && !this.searchQuery) {
          this.loading = true
          setTimeout(() => {
            this.updateLaunchList()
            this.loading = false
          }, 1000)
        }
        if (toolbarElement && element.scrollTop >= 30) {
          toolbarElement.classList.add('blur-effect') // gives a blur background to the toolbar
        } else {
          toolbarElement.classList.remove('blur-effect') // reverts the blur background of the toolbar
        }
      }
    }
  }
})
</script>

<style lang="scss" scoped>
.homepage-wrapper{
  overflow-y: scroll;
  height: 100vh;
  max-height: 100vh;
  padding-bottom: 40px;
}
.hero-img-container{
  width: 100%;
  object-fit: contain;
}
.hero-title{
  font-size: 72px;
  color: $primary;
  text-align: center;
}
.cards-section{
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
}
.loader{
  width: 128px;
}
@media only screen and (max-width: 600px) {
  .hero-title{
    font-size: 48px;
  }
}
@media only screen and (max-width: 400px) {
  .hero-title{
    font-size: 32px;
  }
}
</style>
