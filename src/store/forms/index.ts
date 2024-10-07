import { Module } from 'vuex'
import { StateInterface } from '../index'
import state, { FormStateInterface } from './state'
import actions from './actions'
import getters from './getters'
import mutations from './mutations'

const forms: Module<FormStateInterface, StateInterface> = {
  namespaced: true,
  actions,
  getters,
  mutations,
  state
}

export default forms
