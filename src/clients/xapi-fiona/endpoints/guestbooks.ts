import type { $Fetch } from 'ofetch';

// Accreditation profile reference
export interface AccreditationProfile {
  id: string;
  description: string;
}

// Badge reference (shared with accreditations)
export interface Badge {
  id: string;
  description: string;
}

// Base Guestbook interface (list item version)
export interface GuestbookListItem {
  id: string;
  createdOn: string;
  updatedOn: string;
  description: string;
}

// Complete Guestbook interface
export interface Guestbook {
  id: string;
  createdOn: string;
  updatedOn: string;
  description: string;
  accreditationProfiles: AccreditationProfile[];
  editions: Array<{
    id: string;
    description: string;
  }>;
  badges: Badge[];
  endsOn: string;
  isActive: boolean;
  name: string;
  startsOn: string;
}

// Meeting program participations response
export interface MeetingProgramParticipationsResponse {
  accreditation: {
    description: string;
    id: string;
  };
  accreditationStatus: {
    key: string;
    translations: Array<{
      abbreviation?: string | null;
      language: string;
      text: string;
    }>;
  };
  availabilityFormsClosesOn: string;
  availabilityFormsOpensOn: string;
  schedules: Array<{
    id: string;
    meetingPrograms: Array<{
      id: string;
      meetingRequestFormsClosesOn: string;
      meetingRequestFormsOpensOn: string;
      name: string;
    }>;
    name: string;
  }>;
}

// Meeting program meeting request
export interface CreateMeetingRequestRequest {
  id?: string;
  sortOrder: number;
  sourceMeetingProgramParticipationId: string;
  targetMeetingProgramParticipationId: string;
}

// Guestbooks endpoint interface
export interface GuestbooksEndpoint {
  // Get all guestbooks
  getAll: () => Promise<GuestbookListItem[]>;

  // Get guestbooks by edition
  getByEdition: (editionId: string) => Promise<GuestbookListItem[]>;

  // Get guestbook details by ID
  getById: (guestbookId: string) => Promise<Guestbook>;

  // Get meeting program participations for account
  getMeetingProgramParticipations: (providerName: string, externalIdentification: string, guestbookId: string) => Promise<MeetingProgramParticipationsResponse>;

  // Create meeting program meeting request
  createMeetingRequest: (providerName: string, externalIdentification: string, targetParticipationId: string, request: CreateMeetingRequestRequest) => Promise<void>;
}

/**
 * Creates the guestbooks endpoint functions
 * @param client - The ofetch client instance
 * @returns Object with guestbooks endpoint methods
 */
export function createGuestbooksEndpoint(client: $Fetch): GuestbooksEndpoint {
  return {
    /**
     * Get all available guestbooks
     * @returns Promise resolving to array of guestbook list items
     */
    getAll: () => {
      return client<GuestbookListItem[]>('/guestbooks');
    },

    /**
     * Get guestbooks associated with a specific edition
     * @param editionId - The unique identifier of the edition
     * @returns Promise resolving to array of guestbook list items for the edition
     */
    getByEdition: (editionId: string) => {
      return client<GuestbookListItem[]>(`/edition/${editionId}/guestbooks`);
    },

    /**
     * Get detailed information for a specific guestbook
     * @param guestbookId - The unique identifier of the guestbook
     * @returns Promise resolving to complete guestbook details including editions, badges, and profiles
     */
    getById: (guestbookId: string) => {
      return client<Guestbook>(`/guestbook/${guestbookId}`);
    },

    /**
     * Get meeting program participations for an account within a guestbook
     * @param providerName - The name of the authentication provider
     * @param externalIdentification - The unique external identifier for the account
     * @param guestbookId - The unique identifier of the guestbook
     * @returns Promise resolving to meeting program participations including schedules and programs
     */
    getMeetingProgramParticipations: (providerName: string, externalIdentification: string, guestbookId: string) => {
      return client<MeetingProgramParticipationsResponse>(`/account/${providerName}/${externalIdentification}/guestbook/${guestbookId}/meetingprogramparticipations`);
    },

    /**
     * Create a new meeting request between accounts for meeting programs
     * @param providerName - The name of the authentication provider
     * @param externalIdentification - The unique external identifier for the requesting account
     * @param targetParticipationId - The unique identifier of the target participation (film project or accreditation)
     * @param request - Meeting request details including sort order and participation IDs
     * @returns Promise resolving when the meeting request is created
     */
    createMeetingRequest: (providerName: string, externalIdentification: string, targetParticipationId: string, request: CreateMeetingRequestRequest) => {
      return client<void>(`/account/${providerName}/${externalIdentification}/meetingprogrammeetingrequest/${targetParticipationId}`, {
        method: 'POST',
        body: request,
      });
    },
  };
}
