import type { $Fetch } from "ofetch";

import type {
  CreateMeetingRequestRequest,
  Guestbook,
  MeetingProgramParticipationsResponse,
} from "../types/guestbooks";
import type { ListItem } from "../types/shared";

// Guestbooks endpoint interface
export interface GuestbooksEndpoint {
  // Get all guestbooks
  getAll: () => Promise<ListItem[]>;

  // Get guestbooks by edition
  getByEdition: (editionId: string) => Promise<ListItem[]>;

  // Get guestbook details by ID
  getById: (guestbookId: string) => Promise<Guestbook>;

  // Get meeting program participations for account
  getMeetingProgramParticipations: (
    providerName: string,
    externalIdentification: string,
    guestbookId: string,
  ) => Promise<MeetingProgramParticipationsResponse>;

  // Create meeting program meeting request
  createMeetingRequest: (
    providerName: string,
    externalIdentification: string,
    targetParticipationId: string,
    request: CreateMeetingRequestRequest,
  ) => Promise<void>;
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
    getAll: async () => await client<ListItem[]>("/guestbooks"),

    /**
     * Get guestbooks associated with a specific edition
     * @param editionId - The unique identifier of the edition
     * @returns Promise resolving to array of guestbook list items for the edition
     */
    getByEdition: async (editionId: string) =>
      await client<ListItem[]>(`/edition/${editionId}/guestbooks`),

    /**
     * Get detailed information for a specific guestbook
     * @param guestbookId - The unique identifier of the guestbook
     * @returns Promise resolving to complete guestbook details including editions, badges, and profiles
     */
    getById: async (guestbookId: string) =>
      await client<Guestbook>(`/guestbook/${guestbookId}`),

    /**
     * Get meeting program participations for an account within a guestbook
     * @param providerName - The name of the authentication provider
     * @param externalIdentification - The unique external identifier for the account
     * @param guestbookId - The unique identifier of the guestbook
     * @returns Promise resolving to meeting program participations including schedules and programs
     */
    getMeetingProgramParticipations: async (
      providerName: string,
      externalIdentification: string,
      guestbookId: string,
    ) =>
      await client<MeetingProgramParticipationsResponse>(
        `/account/${providerName}/${externalIdentification}/guestbook/${guestbookId}/meetingprogramparticipations`,
      ),

    /**
     * Create a new meeting request between accounts for meeting programs
     * @param providerName - The name of the authentication provider
     * @param externalIdentification - The unique external identifier for the requesting account
     * @param targetParticipationId - The unique identifier of the target participation (film project or accreditation)
     * @param request - Meeting request details including sort order and participation IDs
     * @returns Promise resolving when the meeting request is created
     */
    createMeetingRequest: async (
      providerName: string,
      externalIdentification: string,
      targetParticipationId: string,
      request: CreateMeetingRequestRequest,
    ) => {
      await client<unknown>(
        `/account/${providerName}/${externalIdentification}/meetingprogrammeetingrequest/${targetParticipationId}`,
        {
          method: "POST",
          body: request,
        },
      );
    },
  };
}
