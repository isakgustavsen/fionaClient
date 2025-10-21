import type { $Fetch } from "ofetch";

import type { Volunteer, VolunteerEdition } from "../types/volunteers";
import type { IdDescription, ListItem } from "../types/shared";

// Volunteers endpoint interface
export interface VolunteersEndpoint {
  // Get all volunteer editions
  getAllEditions: () => Promise<IdDescription[]>;

  // Get volunteer edition by ID
  getEditionById: (volunteerEditionId: string) => Promise<VolunteerEdition>;

  // Get all volunteers in edition
  getAllByEdition: (volunteerEditionId: string) => Promise<ListItem[]>;

  // Get volunteer by ID
  getById: (volunteerId: string) => Promise<Volunteer>;

  // Set external identification for volunteer
  setExternalIdentification: (
    volunteerId: string,
    providerName: string,
    externalIdentification: string,
  ) => Promise<void>;
}

/**
 * Creates the volunteers endpoint functions
 * @param client - The ofetch client instance
 * @returns Object with volunteers endpoint methods
 */
export function createVolunteersEndpoint(client: $Fetch): VolunteersEndpoint {
  return {
    /**
     * Get all available volunteer editions
     * @returns Promise resolving to array of volunteer edition list items
     */
    getAllEditions: async () =>
      await client<IdDescription[]>("/volunteereditions"),

    /**
     * Get detailed information for a specific volunteer edition
     * @param volunteerEditionId - The unique identifier of the volunteer edition
     * @returns Promise resolving to volunteer edition details including start/end dates and active status
     */
    getEditionById: async (volunteerEditionId: string) =>
      await client<VolunteerEdition>(`/volunteeredition/${volunteerEditionId}`),

    /**
     * Get all volunteers within a specific volunteer edition
     * @param volunteerEditionId - The unique identifier of the volunteer edition
     * @returns Promise resolving to array of volunteers including their positions, badges, and status
     */
    getAllByEdition: async (volunteerEditionId: string) =>
      await client<ListItem[]>(
        `/volunteeredition/${volunteerEditionId}/volunteers`,
      ),

    /**
     * Get detailed information for a specific volunteer
     * @param volunteerId - The unique identifier of the volunteer
     * @returns Promise resolving to volunteer details including position, badge, contact info, and shifts
     */
    getById: async (volunteerId: string) =>
      await client<Volunteer>(`/volunteer/${volunteerId}`),

    /**
     * Set external identification for a volunteer (link to external account)
     * @param volunteerId - The unique identifier of the volunteer
     * @param providerName - The name of the authentication provider (e.g., 'SRO', 'KeyCloak')
     * @param externalIdentification - The unique external identifier for the account
     * @returns Promise resolving when the external identification is set
     */
    setExternalIdentification: async (
      volunteerId: string,
      providerName: string,
      externalIdentification: string,
    ) => {
      await client<unknown>(
        `/volunteer/${volunteerId}/${providerName}/externalIdentification/${externalIdentification}`,
        {
          method: "POST",
        },
      );
    },
  };
}
