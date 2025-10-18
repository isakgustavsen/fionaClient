import type { $Fetch } from 'ofetch';

// Person reference (shared with people endpoint)
export interface Person {
  id: string;
  description: string;
}

// Target group reference
export interface TargetGroup {
  id: string;
  description: string;
}

// Location reference
export interface Location {
  id: string;
  description: string;
}

// Schedule reference
export interface Schedule {
  id: string;
  description: string;
}

// User reference (shared with other endpoints)
export interface User {
  id: string;
  description: string;
}

// RSVP event attendee
export interface RsvpEventAttendee {
  person: Person;
  targetGroup: TargetGroup;
}

// Base RSVP Event interface (list item version)
export interface RsvpEventListItem {
  id: string;
  createdOn: string;
  updatedOn: string;
  description: string;
}

// Complete RSVP Event interface
export interface RsvpEvent {
  id: string;
  createdOn: string;
  updatedOn: string;
  name: string;
  displayName?: string | null;
  date: string;
  startsOn: string;
  endsOn: string;
  numberedSeats: boolean;
  automaticTransferOfInvitees: boolean;
  contactDetailsVerificationEnabled: boolean;
  opensOn: string;
  closesOn: string;
  allowAnonymousFormSubmissions: boolean;
  location: Location;
  schedule: Schedule;
  people: RsvpEventAttendee[];
  createdBy: User;
  updatedBy: User;
}

// RSVP Events endpoint interface
export interface RsvpEventsEndpoint {
  // Get all RSVP events per schedule
  getAllBySchedule: (scheduleId: string) => Promise<RsvpEventListItem[]>;

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
    getAllBySchedule: (scheduleId: string) => {
      return client<RsvpEventListItem[]>(`/schedule/${scheduleId}/rsvpevents`);
    },

    // Get RSVP event details by ID
    getById: (rsvpEventId: string) => {
      return client<RsvpEvent>(`/rsvpevent/${rsvpEventId}`);
    },
  };
}
