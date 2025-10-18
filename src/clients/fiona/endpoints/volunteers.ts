import type { $Fetch } from 'ofetch';

export interface VolunteerEditionListItem {
  id: string;
  name: string;
}

export interface VolunteerEdition {
  id: string;
  documentVersion?: string | null;
  publishedOn?: string;
  editions: Array<{
    id: string;
    _id: string;
    description: string;
  }>;
  endsOn: string;
  isActive: boolean;
  name: string;
  startsOn: string;
}

export interface VolunteerListItem {
  id: string;
  person: {
    fullName: string;
    sortedFullName: string;
  };
}

export interface VolunteerEdition {
  id: string;
  description: string;
}

export interface VolunteerPerson {
  id: string;
  contactDetails: Array<{
    id: string;
    subType: {
      key: string;
      translations: Array<{
        abbreviation: string;
        language: string;
        text: string;
      }>;
    };
    type: {
      key: string;
      translations: Array<{
        abbreviation: string;
        language: string;
        text: string;
      }>;
    };
    value: string;
  }>;
  externalAccountId?: string | null;
  firstName: string;
  fullName: string;
  lastName: string;
  mailingLanguage: string;
  prefix?: string | null;
  sortedFullName: string;
}

export interface VolunteerShift {
  id: string;
  endsOn: string;
  location: {
    id: string;
    abbreviation: string;
    description: string;
    isOnline: boolean;
  };
  positionType: {
    key: string;
    translations: Array<{
      abbreviation: string;
      language: string;
      text: string;
    }>;
  };
  shiftType: {
    key: string;
    translations: Array<{
      abbreviation: string;
      language: string;
      text: string;
    }>;
  };
  startsOn: string;
}

export interface Volunteer {
  id: string;
  documentVersion?: string | null;
  assignedPosition: {
    key: string;
    translations: Array<{
      abbreviation: string;
      language: string;
      text: string;
    }>;
  };
  badge: {
    key: string;
    translations: Array<{
      abbreviation: string;
      language: string;
      text: string;
    }>;
  };
  favoriteImageAttachmentId?: string | null;
  person: VolunteerPerson;
  publications: Array<{
    [key: string]: unknown;
  }>;
  qrCodeOnBadge: string;
  shifts: VolunteerShift[];
  volunteerEdition: {
    id: string;
    description: string;
  };
}

export interface VolunteersEndpoint {
  getAllEditions: () => Promise<VolunteerEditionListItem[]>;
  getEditionById: (volunteerEditionId: string) => Promise<VolunteerEdition>;
  getAllByEdition: (volunteerEditionId: string) => Promise<VolunteerListItem[]>;
  getById: (volunteerId: string) => Promise<Volunteer>;
}

/**
 * Creates the volunteers endpoint functions
 * @param client - The ofetch client instance
 * @returns Object with volunteers endpoint methods
 */
export function createVolunteersEndpoint(client: $Fetch): VolunteersEndpoint {
  return {
    getAllEditions: () => {
      return client<VolunteerEditionListItem[]>('/volunteereditions');
    },
    getEditionById: (volunteerEditionId: string) => {
      return client<VolunteerEdition>(`/volunteereditions/${volunteerEditionId}`);
    },
    getAllByEdition: (volunteerEditionId: string) => {
      return client<VolunteerListItem[]>(`/volunteereditions/${volunteerEditionId}/volunteers`);
    },
    getById: (volunteerId: string) => {
      return client<Volunteer>(`/volunteers/${volunteerId}`);
    },
  };
}

