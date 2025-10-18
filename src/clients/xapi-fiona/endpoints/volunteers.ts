import type { $Fetch } from 'ofetch';

// Volunteer Edition interface
export interface VolunteerEditionListItem {
  id: string;
  description: string;
}

export interface VolunteerEdition {
  id: string;
  endsOn: string;
  isActive: boolean;
  name: string;
  startsOn: string;
}

// Volunteer interface
export interface Volunteer {
  id: string;
  assignedPosition: {
    description: string;
    id: string;
  };
  badge: {
    description: string;
    id: string;
  };
  extras: Array<{
    description: string;
    id: string;
  }>;
  hasDriversLicence: boolean;
  isWillingToWorkMore: boolean;
  languages: Array<{
    description: string;
    id: string;
  }>;
  person: {
    description: string;
    id: string;
  };
  remarks?: string | null;
  status: {
    description: string;
    id: string;
  };
  volunteerEdition: {
    description: string;
    id: string;
  };
  dietType?: {
    description: string;
    id: string;
  } | null;
  driversLicenseType?: {
    description: string;
    id: string;
  } | null;
  shirtSize?: {
    description: string;
    id: string;
  } | null;
  favoriteImageAttachment?: {
    category: number;
    contentType?: string | null;
    createdOn: string;
    id: string;
    originalFileName: string;
    password?: string | null;
    serialNumber: number;
    title: string;
    type: {
      description: string;
      id: string;
    };
    value: string;
  } | null;
  createdBy: {
    description: string;
    id: string;
  };
  createdOn: string;
  updatedBy: {
    description: string;
    id: string;
  };
  updatedOn: string;
}

// Volunteers endpoint interface
export interface VolunteersEndpoint {
  // Get all volunteer editions
  getAllEditions: () => Promise<VolunteerEditionListItem[]>;

  // Get volunteer edition by ID
  getEditionById: (volunteerEditionId: string) => Promise<VolunteerEdition>;

  // Get all volunteers in edition
  getAllByEdition: (volunteerEditionId: string) => Promise<Volunteer[]>;

  // Get volunteer by ID
  getById: (volunteerId: string) => Promise<Volunteer>;

  // Set external identification for volunteer
  setExternalIdentification: (volunteerId: string, providerName: string, externalIdentification: string) => Promise<void>;
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
    getAllEditions: () => {
      return client<VolunteerEditionListItem[]>('/volunteereditions');
    },

    /**
     * Get detailed information for a specific volunteer edition
     * @param volunteerEditionId - The unique identifier of the volunteer edition
     * @returns Promise resolving to volunteer edition details including start/end dates and active status
     */
    getEditionById: (volunteerEditionId: string) => {
      return client<VolunteerEdition>(`/volunteeredition/${volunteerEditionId}`);
    },

    /**
     * Get all volunteers within a specific volunteer edition
     * @param volunteerEditionId - The unique identifier of the volunteer edition
     * @returns Promise resolving to array of volunteers including their positions, badges, and status
     */
    getAllByEdition: (volunteerEditionId: string) => {
      return client<Volunteer[]>(`/volunteeredition/${volunteerEditionId}/volunteers`);
    },

    /**
     * Get detailed information for a specific volunteer
     * @param volunteerId - The unique identifier of the volunteer
     * @returns Promise resolving to volunteer details including position, badge, contact info, and shifts
     */
    getById: (volunteerId: string) => {
      return client<Volunteer>(`/volunteer/${volunteerId}`);
    },

    /**
     * Set external identification for a volunteer (link to external account)
     * @param volunteerId - The unique identifier of the volunteer
     * @param providerName - The name of the authentication provider (e.g., 'SRO', 'KeyCloak')
     * @param externalIdentification - The unique external identifier for the account
     * @returns Promise resolving when the external identification is set
     */
    setExternalIdentification: (volunteerId: string, providerName: string, externalIdentification: string) => {
      return client<void>(`/volunteer/${volunteerId}/${providerName}/externalIdentification/${externalIdentification}`, {
        method: 'POST',
      });
    },
  };
}
