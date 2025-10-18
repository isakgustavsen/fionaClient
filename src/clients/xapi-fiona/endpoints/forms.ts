import type { $Fetch } from 'ofetch';

// Form translations
export interface FormTranslation {
  description?: string | null;
  key?: string | null;
  language: string;
  title: string;
}

// Base Form interface
export interface Form {
  id: string;
  endsOn: string;
  startsOn: string;
  translations: FormTranslation[];
}

// List item version (for array responses)
export interface FormListItem extends Form {}

// Edition reference
export interface Edition {
  id: string;
  description: string;
}

// Submitter information
export interface Submitter {
  emailAddress: string;
  name: string;
}

// Film Entry interface
export interface FilmEntry {
  directors: string[];
  edition: Edition;
  formName: string;
  fullPreferredTitle: string;
  lengthInMinutes: number;
  linkedFilmId?: string | null;
  countriesOfProduction?: string | null;
  submittedBy: Submitter;
}

// Forms endpoint interface
export interface FormsEndpoint {
  // Get all available forms
  getAll: () => Promise<FormListItem[]>;

  // Get film entry by ID
  getFilmEntryById: (filmEntryId: string) => Promise<FilmEntry>;
}

/**
 * Creates the forms endpoint functions
 * @param client - The ofetch client instance
 * @returns Object with forms endpoint methods
 */
export function createFormsEndpoint(client: $Fetch): FormsEndpoint {
  return {
    // Get all available forms
    getAll: () => {
      return client<FormListItem[]>('/forms');
    },

    // Get film entry by ID
    getFilmEntryById: (filmEntryId: string) => {
      return client<FilmEntry>(`/filmentry/${filmEntryId}`);
    },
  };
}
