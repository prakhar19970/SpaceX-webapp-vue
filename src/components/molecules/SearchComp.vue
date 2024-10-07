<template>
    <div class="search-wrapper">
        <q-input
            class="input-field"
            filled
            color="grey-5"
            v-model="searchTerm"
            borderless
            @update:model-value="getFilteredOptions"
            @keyup.enter="search"
        >
            <template v-if="searchTerm" v-slot:append>
                <q-icon color="white" name="close" @click="clearSearchInput()" class="pointer" />
            </template>
            <template v-slot:after>
                <q-btn color="white" round dense flat icon="search" @click="search" />
            </template>
        </q-input>
        <q-list v-if="filteredOptions && filteredOptions.length > 0" bordered separator class="options-wrapper">
            <q-item v-for="option in filteredOptions" :key="option?.id" clickable v-ripple>
                <q-item-section @click="selectOption(option)">
                    {{ option?.mission_name }}, {{ option?.rocket.rocket_name }}, {{ option?.launch_year }}
                </q-item-section>
            </q-item>
        </q-list>
    </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import { LaunchInfo } from '@models/launchModel'
import mixins from '@mixins/mixins'
import { mapActions, mapGetters } from 'vuex'
export default defineComponent({
  name: 'SearchComp',
  data () {
    const searchTerm = ''
    const filteredOptions: LaunchInfo[] = []
    const minSearchResults = 0
    const maxSearchResults = 7
    return { searchTerm, filteredOptions, minSearchResults, maxSearchResults }
  },
  mixins: [mixins],
  computed: {
    ...mapGetters('missions', ['searchQuery', 'allLaunchMissionsData', 'sortFilter'])
  },
  mounted () {
    if (this.searchQuery) {
      this.searchTerm = this.searchQuery
    }
  },
  methods: {
    ...mapActions('missions', ['getLaunchCardById', 'updateSearchQuery', 'reloadState', 'updateLaunchList']),
    getFilteredOptions () {
      if (!this.searchTerm) {
        this.filteredOptions = []
        this.updateSearchQuery('')
        this.reloadState()
      } else {
        const searchInput = this.lowerCase(this.searchTerm)
        this.filteredOptions = this.allLaunchMissionsData.filter((launchData: LaunchInfo) => (
          this.lowerCase(launchData?.mission_name).includes(searchInput) ||
            this.lowerCase(launchData?.rocket?.rocket_name).includes(searchInput) ||
            this.lowerCase(launchData?.launch_year).includes(searchInput)
        ))
        this.filteredOptions = this.filteredOptions.slice(this.minSearchResults, this.maxSearchResults)
      }
    },
    selectOption (option: LaunchInfo) {
      this.searchTerm = `${option.mission_name}, ${option.rocket.rocket_name}, ${option.launch_year}`
      this.updateSearchQuery(this.searchTerm)
      this.filteredOptions = []
      this.getLaunchCardById(option?.id)
    },
    clearSearchInput () {
      this.searchTerm = ''
      this.getFilteredOptions()
    },
    search () {
      const searchInput = this.lowerCase(this.searchTerm)
      const searchResults = this.allLaunchMissionsData.filter((launchInfo : LaunchInfo) =>
        (this.lowerCase(launchInfo?.mission_name).includes(searchInput) ||
            this.lowerCase(launchInfo?.rocket?.rocket_name).includes(searchInput) ||
            this.lowerCase(launchInfo?.launch_year).includes(searchInput)
        ))
      this.updateSearchQuery(this.searchTerm)
      this.updateLaunchList(searchResults)
      this.filteredOptions = []
    }
  }
})
</script>
<style lang="scss" scoped>
.search-wrapper {
    display: flex;
    flex-direction: column;
    position: relative;
}
.input-field {
    background: #1d1d1d;
    border-radius: 12px;
    color: #ffffff;
    padding: 0px 8px;
    width: 100%;
}
.options-wrapper {
    display: flex;
    flex-grow: 1;
    flex-direction: column;
    position: absolute;
    top: 70px;
    width: 100%;
    background: #ffffff;
    border-radius: 12px;
    z-index: 2;
}
:deep(){
  .q-field__native{
    color: white;
  }
}
</style>
