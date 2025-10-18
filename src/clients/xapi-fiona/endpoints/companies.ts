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

// Company lookup reference
export interface CompanyReference {
  id: string;
  description: string;
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

// Base Company interface
export interface Company {
  id: string;
  address: Address;
  mailingLanguage: string;
  name: string;
  tags: unknown[]; // Empty array, not in use according to API docs
  vatNumber?: string | null;
  yearOfFoundation: number;
}

// List item version (for array responses)
export interface CompanyListItem {
  id: string;
  address: Address;
  mailingLanguage: string;
  name: string;
  tags: unknown[];
  vatNumber?: string | null;
  yearOfFoundation: number;
}

// Communication item interfaces
export interface CommunicationItem {
  id: string;
  company: CompanyReference;
  isDefault: boolean;
  notes?: string;
  sortOrder: number;
  subType: CommunicationItemSubType;
  type: CommunicationItemType;
  value: string; // Phone number, email address or online address
}

// Create/Update communication item request
export interface CreateCommunicationItemRequest {
  company: {
    id: string;
    description: string;
  };
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

// Companies endpoint interface
export interface CompaniesEndpoint {
  // Company CRUD operations
  getById: (companyId: string) => Promise<Company>;
  updateById: (companyId: string, company: Company) => Promise<Company>;
  deleteById: (companyId: string) => Promise<void>;

  // Communication items for company
  getCommunicationItems: (companyId: string) => Promise<CommunicationItem[]>;
  getCommunicationItemById: (companyId: string, communicationItemId: string) => Promise<CommunicationItem>;
  updateCommunicationItemById: (companyId: string, communicationItemId: string, item: UpdateCommunicationItemRequest) => Promise<CommunicationItem>;
  deleteCommunicationItemById: (companyId: string, communicationItemId: string) => Promise<void>;
  createCommunicationItem: (companyId: string, item: CreateCommunicationItemRequest) => Promise<CommunicationItem>;
}

/**
 * Creates the companies endpoint functions
 * @param client - The ofetch client instance
 * @returns Object with companies endpoint methods
 */
export function createCompaniesEndpoint(client: $Fetch): CompaniesEndpoint {
  return {
    // Company CRUD operations
    getById: (companyId: string) => {
      return client<Company>(`/company/${companyId}`);
    },

    updateById: (companyId: string, company: Company) => {
      return client<Company>(`/company/${companyId}`, {
        method: 'POST',
        body: company,
      });
    },

    deleteById: (companyId: string) => {
      return client<void>(`/company/${companyId}`, {
        method: 'DELETE',
      });
    },

    // Communication items for company
    getCommunicationItems: (companyId: string) => {
      return client<CommunicationItem[]>(`/company/${companyId}/communicationItems`);
    },

    getCommunicationItemById: (companyId: string, communicationItemId: string) => {
      return client<CommunicationItem>(`/company/${companyId}/communicationItem/${communicationItemId}`);
    },

    updateCommunicationItemById: (companyId: string, communicationItemId: string, item: UpdateCommunicationItemRequest) => {
      return client<CommunicationItem>(`/company/${companyId}/communicationItem/${communicationItemId}`, {
        method: 'POST',
        body: item,
      });
    },

    deleteCommunicationItemById: (companyId: string, communicationItemId: string) => {
      return client<void>(`/company/${companyId}/communicationItem/${communicationItemId}`, {
        method: 'DELETE',
      });
    },

    createCommunicationItem: (companyId: string, item: CreateCommunicationItemRequest) => {
      return client<CommunicationItem>(`/company/${companyId}/communicationItem`, {
        method: 'POST',
        body: item,
      });
    },
  };
}
