import type { $Fetch } from 'ofetch';

// Basic lookup value interface (shared across multiple entities)
export interface LookupValue {
  id: string;
  description: string;
}

// User reference (created/updated by)
export interface User {
  id: string;
  description: string;
}

// Edition reference
export interface Edition {
  id: string;
  description: string;
}

// Person reference
export interface Person {
  id: string;
  description: string;
}

// Company reference
export interface Company {
  id: string;
  description: string;
}

// Tag reference
export interface Tag {
  id: string;
  description: string;
}

// Screening copy reference
export interface ScreeningCopy {
  id: string;
  description: string;
}

// Contact within a credit
export interface CreditContact {
  company?: Company | null;
  person?: Person | null;
  sourceType: number;
}

// Credit interface
export interface Credit {
  id: string;
  contacts: CreditContact[];
  isContactPerson: boolean;
  publishContactDetails: boolean;
  role: LookupValue;
  selectedSourceType: number;
  sortOrder: number;
}

// Base Film interface (list item version)
export interface FilmListItem {
  id: string;
  createdOn: string;
  updatedOn: string;
  description: string;
}

// Country reference with sort order
export interface CountryWithSortOrder {
  sortOrder: number;
  id: string;
  description: string;
}

// Complete Film interface
export interface Film extends FilmListItem {
  appliedForFestivals: LookupValue[];
  archivedOn?: string | null;
  assignedTo?: User | null;
  category?: LookupValue | null;
  colour?: LookupValue | null;
  completed: boolean;
  countriesLookingForPartner: CountryWithSortOrder[];
  countriesOfProduction: CountryWithSortOrder[];
  countriesSold: CountryWithSortOrder[];
  edition?: Edition | null;
  eligibleFors: LookupValue[];
  filmRatings: LookupValue[];
  financingInPlace: number;
  finalRecommendation?: LookupValue | null;
  firstScreenedAt?: string | null;
  firstScreenedOn: string;
  format?: LookupValue | null;
  genre?: LookupValue | null;
  inEditionSequenceNumber: number;
  internationalArticle?: string | null;
  internationalTitle?: string | null;
  lengthAdditionalSeconds: number;
  lengthInMinutes: number;
  memo?: string | null;
  monthOfProduction: number;
  noDialogue: boolean;
  numberOfEpisodes: number;
  originalArticle?: string | null;
  originalTitle?: string | null;
  preliminaryRecommendation?: LookupValue | null;
  premiere?: LookupValue | null;
  priority?: LookupValue | null;
  requestedFinancing: number;
  round?: string;
  screenedOnFestivals: LookupValue[];
  screeningCopies: ScreeningCopy[];
  sections: LookupValue[];
  selectionSequenceNumber: number;
  source: LookupValue;
  spokenLanguages: LookupValue[];
  statusLookup: LookupValue;
  tags: Tag[];
  totalBudget: number;
  useOriginalTitle: boolean;
  yearOfProduction: number;
  createdBy: User;
  updatedBy: User;
  fullInternationalTitle?: string | null;
  fullOriginalTitle?: string | null;
  fullPreferredTitle: string;
}

// Create/Update film request
export interface CreateFilmRequest extends Omit<Film, 'id' | 'createdOn' | 'updatedOn' | 'createdBy' | 'updatedBy' | 'fullInternationalTitle' | 'fullOriginalTitle' | 'fullPreferredTitle'> {}
export interface UpdateFilmRequest extends Film {}

// Films endpoint interface
export interface FilmsEndpoint {
  // Get all films in an edition
  getAllByEdition: (editionId: string) => Promise<FilmListItem[]>;

  // CRUD operations for films
  create: (film: CreateFilmRequest) => Promise<Film>;
  getById: (filmId: string) => Promise<Film>;
  updateById: (filmId: string, film: UpdateFilmRequest) => Promise<Film>;
  deleteById: (filmId: string) => Promise<void>;

  // Credits management
  getCredits: (filmId: string) => Promise<Credit[]>;
  getCreditById: (filmId: string, creditId: string) => Promise<Credit>;
  updateCreditById: (filmId: string, creditId: string, credit: Credit) => Promise<Credit>;
  deleteCreditById: (filmId: string, creditId: string) => Promise<void>;
  createCredit: (filmId: string, credit: Omit<Credit, 'id'>) => Promise<Credit>;
}

/**
 * Creates the films endpoint functions
 * @param client - The ofetch client instance
 * @returns Object with films endpoint methods
 */
export function createFilmsEndpoint(client: $Fetch): FilmsEndpoint {
  return {
    // Get all films in an edition
    getAllByEdition: (editionId: string) => {
      return client<FilmListItem[]>(`/films/${editionId}`);
    },

    // CRUD operations for films
    create: (film: CreateFilmRequest) => {
      return client<Film>('/film', {
        method: 'POST',
        body: film,
      });
    },

    getById: (filmId: string) => {
      return client<Film>(`/film/${filmId}`);
    },

    updateById: (filmId: string, film: UpdateFilmRequest) => {
      return client<Film>(`/film/${filmId}`, {
        method: 'POST',
        body: film,
      });
    },

    deleteById: (filmId: string) => {
      return client<void>(`/film/${filmId}`, {
        method: 'DELETE',
      });
    },

    // Credits management
    getCredits: (filmId: string) => {
      return client<Credit[]>(`/film/${filmId}/credits`);
    },

    getCreditById: (filmId: string, creditId: string) => {
      return client<Credit>(`/film/${filmId}/credit/${creditId}`);
    },

    updateCreditById: (filmId: string, creditId: string, credit: Credit) => {
      return client<Credit>(`/film/${filmId}/credit/${creditId}`, {
        method: 'POST',
        body: credit,
      });
    },

    deleteCreditById: (filmId: string, creditId: string) => {
      return client<void>(`/film/${filmId}/credit/${creditId}`, {
        method: 'DELETE',
      });
    },

    createCredit: (filmId: string, credit: Omit<Credit, 'id'>) => {
      return client<Credit>(`/film/${filmId}/credit`, {
        method: 'POST',
        body: credit,
      });
    },
  };
}
