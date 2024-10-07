import { GetterTree } from 'vuex'
import { StateInterface } from '../index'
import { MissionStateInterface } from './state'

const getters: GetterTree<MissionStateInterface, StateInterface> = {
  allLaunchMissionsData: state => state.allLaunchMissionsData,
  launchList: state => state.launchList,
  currentIndex: state => state.currentIndex,
  limit: state => state.limit,
  searchQuery: state => state.searchQuery,
  sortFilter: state => state.sortFilter
}

export default getters
