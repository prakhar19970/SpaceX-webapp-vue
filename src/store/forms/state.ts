import { LaunchFormModel } from '@models/launchFormModel'

export interface FormStateInterface {
    launchForm: LaunchFormModel;
}

function state (): FormStateInterface {
  return {
    launchForm: {
      mission_name: '',
      rocket: {
        rocket_name: ''
      },
      launch_year: 0,
      details: ''
    } // Launch form
  }
}

export default state
