export interface LaunchInfo {
    mission_name: string,
    rocket: {
      rocket_name: string
    },
    id: string,
    launch_date_utc: string,
    launch_year: string,
    details: string,
    links: {
      article_link: string
    }
  }
