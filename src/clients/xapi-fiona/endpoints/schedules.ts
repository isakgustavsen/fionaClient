import type { $Fetch } from 'ofetch';

// Base Schedule interface (list item version)
export interface ScheduleListItem {
  id: string;
  createdOn: string;
  updatedOn: string;
  description: string;
}

// Base Show interface (list item version)
export interface ShowListItem {
  id: string;
  createdOn: string;
  updatedOn: string;
  description: string;
}

// Schedules endpoint interface
export interface SchedulesEndpoint {
  // Get all schedules per edition
  getAllByEdition: (editionId: string) => Promise<ScheduleListItem[]>;

  // Get all shows per schedule
  getAllShows: (scheduleId: string) => Promise<ShowListItem[]>;

  // Get all shows per schedule per day
  getShowsByDate: (scheduleId: string, showDate: string) => Promise<ShowListItem[]>;
}

/**
 * Creates the schedules endpoint functions
 * @param client - The ofetch client instance
 * @returns Object with schedules endpoint methods
 */
export function createSchedulesEndpoint(client: $Fetch): SchedulesEndpoint {
  return {
    // Get all schedules per edition
    getAllByEdition: (editionId: string) => {
      return client<ScheduleListItem[]>(`/edition/${editionId}/schedules`);
    },

    // Get all shows per schedule
    getAllShows: (scheduleId: string) => {
      return client<ShowListItem[]>(`/schedule/${scheduleId}/shows`);
    },

    // Get all shows per schedule per day
    getShowsByDate: (scheduleId: string, showDate: string) => {
      return client<ShowListItem[]>(`/schedule/${scheduleId}/shows/${showDate}`);
    },
  };
}
