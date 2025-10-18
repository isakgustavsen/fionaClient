import type { $Fetch } from 'ofetch';

// Schedule reference (shared with schedules endpoint)
export interface Schedule {
  id: string;
  description: string;
}

// Raid set reference (shared with raid-sets endpoint)
export interface RaidSet {
  id: string;
  description: string;
}

// Base Film Control Edition interface (list item version)
export interface FilmControlEditionListItem {
  id: string;
  description: string;
}

// Complete Film Control Edition interface
export interface FilmControlEdition {
  id: string;
  description: string;
  schedules: Schedule[];
  raidSets: RaidSet[];
  endsOn: string;
  isActive: boolean;
  name: string;
  startsOn: string;
}

// Film Control endpoint interface
export interface FilmControlEndpoint {
  // Get all film control editions
  getAll: () => Promise<FilmControlEditionListItem[]>;

  // Get only active film control editions
  getActive: () => Promise<FilmControlEditionListItem[]>;

  // Get film control edition details
  getById: (filmControlEditionId: string) => Promise<FilmControlEdition>;
}

/**
 * Creates the film control endpoint functions
 * @param client - The ofetch client instance
 * @returns Object with film control endpoint methods
 */
export function createFilmControlEndpoint(client: $Fetch): FilmControlEndpoint {
  return {
    // Get all film control editions
    getAll: () => {
      return client<FilmControlEditionListItem[]>('/filmControlEditions');
    },

    // Get only active film control editions
    getActive: () => {
      return client<FilmControlEditionListItem[]>('/filmControlEditions/active');
    },

    // Get film control edition details
    getById: (filmControlEditionId: string) => {
      return client<FilmControlEdition>(`/filmControlEdition/${filmControlEditionId}`);
    },
  };
}
