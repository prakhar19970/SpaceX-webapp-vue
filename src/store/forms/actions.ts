import { ActionTree } from 'vuex'
import { StateInterface } from '../index'
import { FormStateInterface } from './state'

const actions: ActionTree<FormStateInterface, StateInterface> = {
  createLaunchFormData ({ state, commit }, payload) {
    commit('setLaunchFormData', payload)
  }
}

export default actions
