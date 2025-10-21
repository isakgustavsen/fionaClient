import type { $Fetch } from "ofetch";

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
  awards: Array<Record<string, unknown>>;
  companies: PersonCompany[];
  customFieldValues: Array<Record<string, unknown>>;
  customFieldOptions: Array<Record<string, unknown>>;
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
  publications: Array<Record<string, unknown>>;
  sortedFullName: string;
  texts: Array<Record<string, unknown>>;
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
    getAllByEdition: async (editionId: string) =>
      await client<PersonListItem[]>(`/editions/${editionId}/persons`),
    getById: async (personId: string) =>
      await client<Person>(`/persons/${personId}`),
  };
}
