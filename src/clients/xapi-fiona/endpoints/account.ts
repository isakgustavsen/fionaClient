import type { $Fetch } from 'ofetch';

export interface AccountGroup {
  description: string;
  id: string;
}

export interface Address {
  address1: string;
  address2?: string;
  city: string;
  country: {
    key: string;
    translations: Array<{
      abbreviation?: string;
      language: string;
      text: string;
    }>;
  };
  latitude?: string;
  longitude?: string;
  postalCode: string;
  state?: string;
}

export interface ContactDetail {
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
}

export interface Company {
  id: string;
  name: string;
  role: {
    key: string;
    translations: Array<{
      abbreviation?: string;
      language: string;
      text: string;
    }>;
  };
}

export interface Person {
  address: Address;
  appliedCustomFieldOptions: Array<{
    customField: string;
    option: string;
    sortOrder: number;
  }>;
  appliedCustomFieldValues: Array<{
    customField: string;
    value: string | number | boolean;
  }>;
  companies: Company[];
  contactDetails: ContactDetail[];
  firstName: string;
  id: string;
  lastName: string;
  prefix?: string;
  profession: {
    key: string;
    translations: Array<{
      abbreviation?: string;
      language: string;
      text: string;
    }>;
  };
}

export interface AccountDetails {
  accountGroups: AccountGroup[];
  person: Person;
}

export interface VolunteerInfo {
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
  id: string;
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

export interface AccountEndpoint {
  getDetails: (providerName: string, externalIdentificationId: string) => Promise<AccountDetails>;
  getGroups: (providerName: string, externalIdentification: string) => Promise<AccountGroup[]>;
  getVolunteerInfo: (providerName: string, externalIdentification: string, volunteerEditionId: string) => Promise<VolunteerInfo>;
}

/**
 * Creates the account endpoint functions
 * @param client - The ofetch client instance
 * @returns Object with account endpoint methods
 */
export function createAccountEndpoint(client: $Fetch): AccountEndpoint {
  return {
    /**
     * Get detailed account information including person details and account groups
     * @param providerName - The name of the authentication provider (e.g., 'SRO', 'KeyCloak')
     * @param externalIdentificationId - The unique external identifier for the account
     * @returns Promise resolving to account details with person information and associated groups
     */
    getDetails: (providerName: string, externalIdentificationId: string) => {
      return client<AccountDetails>(`/account/details/${providerName}/${externalIdentificationId}/`);
    },

    /**
     * Get all account groups associated with an external account
     * @param providerName - The name of the authentication provider
     * @param externalIdentification - The unique external identifier for the account
     * @returns Promise resolving to array of account groups
     */
    getGroups: (providerName: string, externalIdentification: string) => {
      return client<AccountGroup[]>(`/account/${providerName}/${externalIdentification}/`);
    },

    /**
     * Get volunteer information for an account within a specific volunteer edition
     * @param providerName - The name of the authentication provider
     * @param externalIdentification - The unique external identifier for the account
     * @param volunteerEditionId - The unique identifier of the volunteer edition
     * @returns Promise resolving to volunteer information including position, badge, and status
     */
    getVolunteerInfo: (providerName: string, externalIdentification: string, volunteerEditionId: string) => {
      return client<VolunteerInfo>(`/account/${providerName}/${externalIdentification}/volunteeredition/${volunteerEditionId}/volunteer`);
    },
  };
}

