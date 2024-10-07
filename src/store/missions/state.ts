import { LaunchInfo } from '@models/launchModel'
import { SortOptions } from '@models/sortOptions'

export interface MissionStateInterface {
  allLaunchMissionsData: LaunchInfo[];
  launchList: LaunchInfo[];
  limit: number;
  currentIndex: number;
  loading: boolean;
  searchQuery: string;
  sortFilter: SortOptions;
}

function state (): MissionStateInterface {
  return {
    allLaunchMissionsData: [], // List of All Launches
    launchList: [], // Filtered List of Launches
    limit: 5, // Number of cards to load each time
    currentIndex: 0, // Index to track loaded items
    loading: false, // Loading state
    searchQuery: '',
    sortFilter: { name: '', type: '', key: '' }
  }
}

export default state
