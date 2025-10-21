import type { $Fetch } from "ofetch";

import type { RsvpEvent } from "../types/rsvp-events";
import type { ListItem } from "../types/shared";

// RSVP Events endpoint interface
export interface RsvpEventsEndpoint {
  // Get all RSVP events per schedule
  getAllBySchedule: (scheduleId: string) => Promise<ListItem[]>;

  // Get RSVP event details by ID
  getById: (rsvpEventId: string) => Promise<RsvpEvent>;
}

/**
 * Creates the RSVP events endpoint functions
 * @param client - The ofetch client instance
 * @returns Object with RSVP events endpoint methods
 */
export function createRsvpEventsEndpoint(client: $Fetch): RsvpEventsEndpoint {
  return {
    // Get all RSVP events per schedule
    getAllBySchedule: async (scheduleId: string) =>
      await client<ListItem[]>(`/schedule/${scheduleId}/rsvpevents`),

    // Get RSVP event details by ID
    getById: async (rsvpEventId: string) =>
      await client<RsvpEvent>(`/rsvpevent/${rsvpEventId}`),
  };
}
