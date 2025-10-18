import type { $Fetch } from 'ofetch';

export interface PersonListItem {
  id: string;
  fullName: string;
  sortedFullName: string;
}

export interface PersonFilm {
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

export interface PersonCompany {
  id: string;
  companyId: string;
  isPreferredCompany: boolean;
  name: string;
  department?: string;
  role: {
    key: string;
    translations: Array<{
      abbreviation: string;
      language: string;
      text: string;
    }>;
  };
}

export interface PersonAccreditation {
  id: string;
  guestbook: {
    id: string;
    description: string;
  };
}

export interface Person {
  id: string;
  documentVersion?: string | null;
  publishedOn?: string;
  accreditations: PersonAccreditation[];
  awards: Array<{
    [key: string]: unknown;
  }>;
  companies: PersonCompany[];
  customFieldValues: Array<{
    [key: string]: unknown;
  }>;
  customFieldOptions: Array<{
    [key: string]: unknown;
  }>;
  favoriteImageAttachmentId?: string | null;
  films: PersonFilm[];
  firstName: string;
  fullName: string;
  lastName: string;
  nationality?: {
    key: string;
    translations: Array<{
      abbreviation?: string;
      language: string;
      text: string;
    }>;
  };
  prefix?: string | null;
  professions?: {
    key: string;
    translations: Array<{
      abbreviation: string;
      language: string;
      text: string;
    }>;
  };
  publications: Array<{
    [key: string]: unknown;
  }>;
  sortedFullName: string;
  texts: Array<{
    [key: string]: unknown;
  }>;
}

export interface PersonsEndpoint {
  getAllByEdition: (editionId: string) => Promise<PersonListItem[]>;
  getById: (personId: string) => Promise<Person>;
}

/**
 * Creates the persons endpoint functions
 * @param client - The ofetch client instance
 * @returns Object with persons endpoint methods
 */
export function createPersonsEndpoint(client: $Fetch): PersonsEndpoint {
  return {
    getAllByEdition: (editionId: string) => {
      return client<PersonListItem[]>(`/editions/${editionId}/persons`);
    },
    getById: (personId: string) => {
      return client<Person>(`/persons/${personId}`);
    },
  };
}

