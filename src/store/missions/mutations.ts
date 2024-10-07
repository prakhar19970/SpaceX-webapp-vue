import { MutationTree } from 'vuex'
import { MissionStateInterface } from './state'

const mutation: MutationTree<MissionStateInterface> = {
  setLaunchList (state, payload) {
    state.launchList = payload
  },
  setAllLaunchMissionsData (state, payload) {
    state.allLaunchMissionsData = payload
  },
  setCurrentIndex (state, payload) {
    state.currentIndex = payload
    localStorage.currentIndex = payload
  },
  setSearchQuery (state, payload) {
    state.searchQuery = payload
    localStorage.searchQuery = payload
  },
  setSortFilter (state, payload) {
    state.sortFilter = payload

    if (payload && payload.type === 'desc') {
      state.launchList.sort((previousItem, nextItem) =>
        Number(nextItem[payload.key]) - Number(previousItem[payload.key]))
    } else {
      state.launchList.sort((previousItem, nextItem) =>
        Number(previousItem[payload.key]) - Number(nextItem[payload.key]))
    }
  }
}

export default mutation
