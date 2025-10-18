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

export interface AccountEndpoint {
  getDetails: (providerName: string, externalIdentificationId: string) => Promise<AccountDetails>;
}

/**
 * Creates the account endpoint functions
 * @param client - The ofetch client instance
 * @returns Object with account endpoint methods
 */
export function createAccountEndpoint(client: $Fetch): AccountEndpoint {
  return {
    getDetails: (providerName: string, externalIdentificationId: string) => {
      return client<AccountDetails>(`/account/details/${providerName}/${externalIdentificationId}/`);
    },
  };
}

