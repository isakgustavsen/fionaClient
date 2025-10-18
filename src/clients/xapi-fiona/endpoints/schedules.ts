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
  getAllShowsByScheduleId: (scheduleId: string) => Promise<ShowListItem[]>;

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
    /**
     * Get all schedules within a specific edition
     * @param editionId - The unique identifier of the edition
     * @returns Promise resolving to array of schedule list items for the edition
     */
    getAllByEdition: (editionId: string) => {
      return client<ScheduleListItem[]>(`/edition/${editionId}/schedules`);
    },

    /**
     * Get all shows within a specific schedule
     * @param scheduleId - The unique identifier of the schedule
     * @returns Promise resolving to array of show list items for the schedule
     */
    getAllShowsByScheduleId: (scheduleId: string) => {
      return client<ShowListItem[]>(`/schedule/${scheduleId}/shows`);
    },

    /**
     * Get all shows within a schedule for a specific date
     * @param scheduleId - The unique identifier of the schedule
     * @param showDate - The date in YYYY-MM-DD format to filter shows by
     * @returns Promise resolving to array of show list items for the specified date
     */
    getShowsByDate: (scheduleId: string, showDate: string) => {
      return client<ShowListItem[]>(`/schedule/${scheduleId}/shows/${showDate}`);
    },
  };
}
