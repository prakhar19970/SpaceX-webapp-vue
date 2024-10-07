import { ActionTree } from 'vuex'
import { StateInterface } from '../index'
import { MissionStateInterface } from './state'
import payload from 'src/constants/Payload.json'

const actions: ActionTree<MissionStateInterface, StateInterface> = {
  updateLaunchList ({ state, commit }, payload) {
    if (payload && payload.length > 0) {
      commit('setLaunchList', payload)
      if (state.sortFilter && state.sortFilter.key) {
        commit('setSortFilter', state.sortFilter)
      }
    } else {
      const launchesPaginatedData = state.allLaunchMissionsData.slice(state.currentIndex, state.currentIndex + state.limit)
      commit('setCurrentIndex', state.currentIndex + state.limit)
      commit('setLaunchList', [...state.launchList, ...launchesPaginatedData])
      if (state.sortFilter && state.sortFilter.key) {
        commit('setSortFilter', state.sortFilter)
      }
    }
  },
  getAllMissionsLaunchList ({ commit }) {
    if (localStorage.spaceXLaunchesData) {
      const launchesData = JSON.parse(localStorage.spaceXLaunchesData)
      commit('setAllLaunchMissionsData', launchesData)
    } else {
      localStorage.spaceXLaunchesData = JSON.stringify(payload.data.launches)
      commit('setAllLaunchMissionsData', payload?.data?.launches)
    }
  },
  reloadState ({ state, commit }) {
    if (localStorage.currentIndex && localStorage.currentIndex > 0 && !state.searchQuery) {
      const currentIndex = JSON.parse(localStorage.currentIndex)
      const launchesPaginatedData = state.allLaunchMissionsData.slice(0, currentIndex)
      commit('setCurrentIndex', currentIndex)
      commit('setLaunchList', launchesPaginatedData)
      if (state.sortFilter && state.sortFilter.key) {
        commit('setSortFilter', state.sortFilter)
      }
    }
  },
  resetSort ({ commit }) {
    commit('setSortFilter', { name: '', type: '', key: '' })
  },
  updateSearchQuery ({ commit }, payload) {
    commit('setSearchQuery', payload)
  },
  getLaunchCardById ({ state, commit }, missionId) {
    const launchesFilteredData = state.allLaunchMissionsData.filter((mission) => mission?.id === missionId)
    commit('setLaunchList', launchesFilteredData)
  },
  sortListByFilter ({ commit }, payload) {
    commit('setSortFilter', payload)
  }
}

export default actions
