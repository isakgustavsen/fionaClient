import type { $Fetch } from 'ofetch';

// Address interface (shared with other entities)
export interface Address {
  address1: string;
  address2?: string | null;
  city?: string | null;
  country?: {
    id: string;
    description: string;
  } | null;
  postalCode?: string | null;
  state?: string | null;
}

// Company person relation interface
export interface CompanyPerson {
  id: string;
  company: {
    id: string;
    description: string;
  };
  department?: string | null;
  role: {
    id: string;
    description: string;
  };
}

// Communication item type and subtype references
export interface CommunicationItemType {
  id: string;
  description: string;
}

export interface CommunicationItemSubType {
  id: string;
  description: string;
}

// Base Person interface
export interface Person {
  id: string;
  address: Address;
  dateOfBirth?: string | null;
  firstName: string;
  lastName: string;
  mailingLanguage: string;
  mailToCompanyPerson?: {
    id: string;
    description: string;
  } | null;
  nationality?: {
    id: string;
    description: string;
  } | null;
  noCorrespondence: boolean;
  noCorrespondenceReason?: string | null;
  prefix?: string;
  profession?: {
    id: string;
    description: string;
  } | null;
  pronouns?: Array<{
    id: string;
    description: string;
  }>;
  salutation?: {
    id: string;
    description: string;
  } | null;
  tags: unknown[]; // Empty array, not in use according to API docs
  title?: {
    id: string;
    description: string;
  } | null;
}

// List item version (for array responses)
export interface PersonListItem {
  id: string;
  address: Address;
  dateOfBirth?: string | null;
  firstName: string;
  lastName: string;
  mailingLanguage: string;
  mailToCompanyPerson?: {
    id: string;
    description: string;
  } | null;
  nationality?: {
    id: string;
    description: string;
  } | null;
  noCorrespondence: boolean;
  noCorrespondenceReason?: string | null;
  prefix?: string;
  profession?: {
    id: string;
    description: string;
  } | null;
  pronouns?: Array<{
    id: string;
    description: string;
  }>;
  salutation?: {
    id: string;
    description: string;
  } | null;
  tags: unknown[];
  title?: {
    id: string;
    description: string;
  } | null;
}

// Communication item interface
export interface CommunicationItem {
  id: string;
  companyPerson?: {
    id: string;
    description: string;
  } | null;
  isDefault: boolean;
  notes?: string;
  sortOrder: number;
  subType: CommunicationItemSubType;
  type: CommunicationItemType;
  value: string; // Phone number, email address or online address
}

// Create/Update communication item request
export interface CreateCommunicationItemRequest {
  companyPerson?: {
    id: string;
    description?: string;
  } | null;
  isDefault: boolean;
  notes?: string;
  sortOrder?: number;
  subType: {
    id: string;
    description: string;
  };
  type: {
    id: string;
    description: string;
  };
  value: string;
}

export interface UpdateCommunicationItemRequest extends CreateCommunicationItemRequest {}

// Create/Update person request
export interface CreatePersonRequest extends Omit<Person, 'id' | 'tags'> {
  tags?: unknown[];
}

export interface UpdatePersonRequest extends Person {}

// People endpoint interface
export interface PeopleEndpoint {
  // Person CRUD operations
  create: (person: CreatePersonRequest) => Promise<Person>;
  getById: (personId: string) => Promise<Person>;
  updateById: (personId: string, person: UpdatePersonRequest) => Promise<Person>;
  deleteById: (personId: string) => Promise<void>;

  // Company relations for person
  getCompanies: (personId: string) => Promise<CompanyPerson[]>;
  getCompanyRelationById: (personId: string, companyPersonId: string) => Promise<CompanyPerson>;
  updateCompanyRelationById: (personId: string, companyPersonId: string, relation: CompanyPerson) => Promise<CompanyPerson>;
  deleteCompanyRelationById: (personId: string, companyPersonId: string) => Promise<void>;

  // Communication items for person
  getCommunicationItems: (personId: string) => Promise<CommunicationItem[]>;
  getCommunicationItemById: (personId: string, communicationItemId: string) => Promise<CommunicationItem>;
  updateCommunicationItemById: (personId: string, communicationItemId: string, item: UpdateCommunicationItemRequest) => Promise<CommunicationItem>;
  deleteCommunicationItemById: (personId: string, communicationItemId: string) => Promise<void>;
  createCommunicationItem: (personId: string, item: CreateCommunicationItemRequest) => Promise<CommunicationItem>;
}

/**
 * Creates the people endpoint functions
 * @param client - The ofetch client instance
 * @returns Object with people endpoint methods
 */
export function createPeopleEndpoint(client: $Fetch): PeopleEndpoint {
  return {
    // Person CRUD operations
    create: (person: CreatePersonRequest) => {
      return client<Person>('/person', {
        method: 'POST',
        body: person,
      });
    },

    getById: (personId: string) => {
      return client<Person>(`/person/${personId}`);
    },

    updateById: (personId: string, person: UpdatePersonRequest) => {
      return client<Person>(`/person/${personId}`, {
        method: 'POST',
        body: person,
      });
    },

    deleteById: (personId: string) => {
      return client<void>(`/person/${personId}`, {
        method: 'DELETE',
      });
    },

    // Company relations for person
    getCompanies: (personId: string) => {
      return client<CompanyPerson[]>(`/person/${personId}/companies`);
    },

    getCompanyRelationById: (personId: string, companyPersonId: string) => {
      return client<CompanyPerson>(`/person/${personId}/company/${companyPersonId}`);
    },

    updateCompanyRelationById: (personId: string, companyPersonId: string, relation: CompanyPerson) => {
      return client<CompanyPerson>(`/person/${personId}/company/${companyPersonId}`, {
        method: 'POST',
        body: relation,
      });
    },

    deleteCompanyRelationById: (personId: string, companyPersonId: string) => {
      return client<void>(`/person/${personId}/company/${companyPersonId}`, {
        method: 'DELETE',
      });
    },

    // Communication items for person
    getCommunicationItems: (personId: string) => {
      return client<CommunicationItem[]>(`/person/${personId}/communicationItems`);
    },

    getCommunicationItemById: (personId: string, communicationItemId: string) => {
      return client<CommunicationItem>(`/person/${personId}/communicationItem/${communicationItemId}`);
    },

    updateCommunicationItemById: (personId: string, communicationItemId: string, item: UpdateCommunicationItemRequest) => {
      return client<CommunicationItem>(`/person/${personId}/communicationItem/${communicationItemId}`, {
        method: 'POST',
        body: item,
      });
    },

    deleteCommunicationItemById: (personId: string, communicationItemId: string) => {
      return client<void>(`/person/${personId}/communicationItem/${communicationItemId}`, {
        method: 'DELETE',
      });
    },

    createCommunicationItem: (personId: string, item: CreateCommunicationItemRequest) => {
      return client<CommunicationItem>(`/person/${personId}/communicationitem`, {
        method: 'POST',
        body: item,
      });
    },
  };
}
