export interface LaunchFormModel {
    mission_name: string,
    rocket: {
      rocket_name: string
    },
    launch_year: number | null,
    details: string
  }
