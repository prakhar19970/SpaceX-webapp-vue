import { Module } from 'vuex'
import { StateInterface } from '../index'
import state, { MissionStateInterface } from './state'
import actions from './actions'
import getters from './getters'
import mutations from './mutations'

const missions: Module<MissionStateInterface, StateInterface> = {
  namespaced: true,
  actions,
  getters,
  mutations,
  state
}

export default missions
