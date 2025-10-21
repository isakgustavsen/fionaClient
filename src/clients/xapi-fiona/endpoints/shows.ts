import type { $Fetch } from "ofetch";

import type {
  Attendee,
  Role,
  ShowDetail,
  ShowPart,
  UpsertShowPartRequest,
  UpsertShowRequest,
} from "../types/shows";

// Shows endpoint interface
export interface ShowsEndpoint {
  // Show CRUD
  create: (payload: UpsertShowRequest) => Promise<ShowDetail>;
  getById: (showId: string) => Promise<ShowDetail>;
  update: (showId: string, payload: UpsertShowRequest) => Promise<ShowDetail>;
  delete: (showId: string) => Promise<void>;

  // Show parts
  getShowParts: (showId: string) => Promise<ShowPart[]>;
  addShowPart: (
    showId: string,
    payload: UpsertShowPartRequest,
  ) => Promise<ShowDetail>;
  getShowPartById: (showId: string, showPartId: string) => Promise<ShowPart>;
  updateShowPart: (
    showId: string,
    showPartId: string,
    payload: UpsertShowPartRequest,
  ) => Promise<ShowPart>;
  deleteShowPart: (showId: string, showPartId: string) => Promise<void>;

  // Related account info
  getContributorRolesForShow: (
    providerName: string,
    showId: string,
  ) => Promise<Role[]>;
  getAttendeesForShowPart: (
    providerName: string,
    showPartId: string,
  ) => Promise<Attendee[]>;
  getAppointmentRolesForShowPart: (
    providerName: string,
    showPartId: string,
  ) => Promise<Role[]>;
}

/**
 * Creates the shows endpoint functions
 * @param client - The ofetch client instance
 * @returns Object with shows endpoint methods
 */
export function createShowsEndpoint(client: $Fetch): ShowsEndpoint {
  return {
    // Show CRUD
    /**
     * Create a new show
     * @param payload - Show creation data including title, location, schedule, etc.
     * @returns Promise resolving to the created show details
     */
    create: async (payload: UpsertShowRequest) =>
      await client<ShowDetail>("/show", {
        method: "POST",
        body: payload,
      }),

    /**
     * Get show details by ID
     * @param showId - The unique identifier of the show
     * @returns Promise resolving to show details including parts and metadata
     */
    getById: async (showId: string) =>
      await client<ShowDetail>(`/show/${showId}`),

    /**
     * Update an existing show
     * @param showId - The unique identifier of the show to update
     * @param payload - Updated show data (complete object required)
     * @returns Promise resolving to updated show details
     */
    update: async (showId: string, payload: UpsertShowRequest) =>
      await client<ShowDetail>(`/show/${showId}`, {
        method: "POST",
        body: payload,
      }),

    /**
     * Delete a show
     * @param showId - The unique identifier of the show to delete
     * @returns Promise resolving when deletion is complete
     */
    delete: async (showId: string) => {
      await client<unknown>(`/show/${showId}`, {
        method: "DELETE",
      });
    },

    // Show parts
    /**
     * Get all show parts for a specific show
     * @param showId - The unique identifier of the show
     * @returns Promise resolving to array of show parts (films or activities)
     */
    getShowParts: async (showId: string) =>
      await client<ShowPart[]>(`/show/${showId}/showparts`),

    /**
     * Add a new show part (film or activity) to a show
     * @param showId - The unique identifier of the show
     * @param payload - Show part data including film/activity details and timing
     * @returns Promise resolving to updated show details
     */
    addShowPart: async (showId: string, payload: UpsertShowPartRequest) =>
      await client<ShowDetail>(`/show/${showId}/showpart`, {
        method: "POST",
        body: payload,
      }),

    /**
     * Get a specific show part by ID
     * @param showId - The unique identifier of the show
     * @param showPartId - The unique identifier of the show part
     * @returns Promise resolving to show part details
     */
    getShowPartById: async (showId: string, showPartId: string) =>
      await client<ShowPart>(`/show/${showId}/showpart/${showPartId}`),

    /**
     * Update a specific show part
     * @param showId - The unique identifier of the show
     * @param showPartId - The unique identifier of the show part to update
     * @param payload - Updated show part data (complete object required)
     * @returns Promise resolving to updated show part details
     */
    updateShowPart: async (
      showId: string,
      showPartId: string,
      payload: UpsertShowPartRequest,
    ) =>
      await client<ShowPart>(`/show/${showId}/showpart/${showPartId}`, {
        method: "POST",
        body: payload,
      }),

    /**
     * Delete a show part from a show
     * @param showId - The unique identifier of the show
     * @param showPartId - The unique identifier of the show part to delete
     * @returns Promise resolving when deletion is complete
     */
    deleteShowPart: async (showId: string, showPartId: string) => {
      await client<unknown>(`/show/${showId}/showpart/${showPartId}`, {
        method: "DELETE",
      });
    },

    // Related account info
    /**
     * Get all contributor roles for a show (for a specific account)
     * @param providerName - The name of the authentication provider
     * @param showId - The unique identifier of the show
     * @returns Promise resolving to array of contributor roles for the account
     */
    getContributorRolesForShow: async (providerName: string, showId: string) =>
      await client<Role[]>(
        `/account/${providerName}/show/${showId}/contributorroles`,
      ),

    /**
     * Get all attendees for a specific show part (for a specific account)
     * @param providerName - The name of the authentication provider
     * @param showPartId - The unique identifier of the show part
     * @returns Promise resolving to array of attendees for the account
     */
    getAttendeesForShowPart: async (providerName: string, showPartId: string) =>
      await client<Attendee[]>(
        `/account/${providerName}/showpart/${showPartId}/attendees`,
      ),

    /**
     * Get all appointment roles for a specific show part (for a specific account)
     * @param providerName - The name of the authentication provider
     * @param showPartId - The unique identifier of the show part
     * @returns Promise resolving to array of appointment roles for the account
     */
    getAppointmentRolesForShowPart: async (
      providerName: string,
      showPartId: string,
    ) =>
      await client<Role[]>(
        `/account/${providerName}/showpart/${showPartId}/appointmentroles`,
      ),
  };
}
