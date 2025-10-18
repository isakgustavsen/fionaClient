import type { $Fetch } from 'ofetch';

export interface CompanyListItem {
  id: string;
  name: string;
}

export interface CompanyPerson {
  id: string;
  fullName: string;
  personId: string;
  role: {
    key: string;
    translations: Array<{
      abbreviation: string;
      language: string;
      text: string;
    }>;
  };
  sortedFullName: string;
}

export interface CompanyFilm {
  id: string;
  edition: {
    id: string;
    description: string;
  };
  film: {
    id: string;
    description: string;
  };
  fullTitle: string;
  role: {
    key: string;
    translations: Array<{
      abbreviation: string;
      language: string;
      text: string;
    }>;
  };
}

export interface CompanyAddress {
  id: string;
  address1: string;
  address2?: string | null;
  city: string;
  country: {
    key: string;
    translations: Array<{
      abbreviation?: string;
      language: string;
      text: string;
    }>;
  };
  latitude: string;
  longitude: string;
  postalCode: string;
  state: string;
}

export interface Company {
  id: string;
  documentVersion?: string | null;
  publishedOn?: string;
  address?: CompanyAddress | null;
  awards: Array<{
    [key: string]: unknown;
  }>;
  customFieldValues: Array<{
    [key: string]: unknown;
  }>;
  customFieldOptions: Array<{
    [key: string]: unknown;
  }>;
  email?: string | null;
  films: CompanyFilm[];
  name: string;
  persons: CompanyPerson[];
  phone?: string | null;
  publications: Array<{
    [key: string]: unknown;
  }>;
  texts: Array<{
    [key: string]: unknown;
  }>;
  website?: string | null;
}

export interface CompaniesEndpoint {
  getAllByEdition: (editionId: string) => Promise<CompanyListItem[]>;
  getById: (companyId: string) => Promise<Company>;
}

/**
 * Creates the companies endpoint functions
 * @param client - The ofetch client instance
 * @returns Object with companies endpoint methods
 */
export function createCompaniesEndpoint(client: $Fetch): CompaniesEndpoint {
  return {
    getAllByEdition: (editionId: string) => {
      return client<CompanyListItem[]>(`/editions/${editionId}/companies`);
    },
    getById: (companyId: string) => {
      return client<Company>(`/companies/${companyId}`);
    },
  };
}

