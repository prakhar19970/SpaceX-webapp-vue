import { MutationTree } from 'vuex'
import { FormStateInterface } from './state'

const mutation: MutationTree<FormStateInterface> = {

  setLaunchFormData (state, payload) {
    localStorage.spaceXLaunchesData = JSON.stringify(payload)
  }
}

export default mutation
