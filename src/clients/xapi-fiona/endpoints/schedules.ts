import type { $Fetch } from "ofetch";

import type { ListItem } from "../types/shared";

// Schedules endpoint interface
export interface SchedulesEndpoint {
  // Get all schedules per edition
  getAllByEdition: (editionId: string) => Promise<ListItem[]>;

  // Get all shows per schedule
  getAllShowsByScheduleId: (scheduleId: string) => Promise<ListItem[]>;

  // Get all shows per schedule per day
  getShowsByDate: (scheduleId: string, showDate: string) => Promise<ListItem[]>;
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
    getAllByEdition: async (editionId: string) =>
      await client<ListItem[]>(`/edition/${editionId}/schedules`),

    /**
     * Get all shows within a specific schedule
     * @param scheduleId - The unique identifier of the schedule
     * @returns Promise resolving to array of show list items for the schedule
     */
    getAllShowsByScheduleId: async (scheduleId: string) =>
      await client<ListItem[]>(`/schedule/${scheduleId}/shows`),

    /**
     * Get all shows within a schedule for a specific date
     * @param scheduleId - The unique identifier of the schedule
     * @param showDate - The date in YYYY-MM-DD format to filter shows by
     * @returns Promise resolving to array of show list items for the specified date
     */
    getShowsByDate: async (scheduleId: string, showDate: string) =>
      await client<ListItem[]>(`/schedule/${scheduleId}/shows/${showDate}`),
  };
}
