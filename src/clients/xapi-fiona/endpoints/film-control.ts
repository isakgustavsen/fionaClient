import type { $Fetch } from "ofetch";

import type { FilmControlEdition } from "../types/film-control";
import type { ListItem } from "../types/shared";

// Film Control endpoint interface
export interface FilmControlEndpoint {
  // Get all film control editions
  getAll: () => Promise<ListItem[]>;

  // Get only active film control editions
  getActive: () => Promise<ListItem[]>;

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
    getAll: async () => await client<ListItem[]>("/filmControlEditions"),

    // Get only active film control editions
    getActive: async () =>
      await client<ListItem[]>("/filmControlEditions/active"),

    // Get film control edition details
    getById: async (filmControlEditionId: string) =>
      await client<FilmControlEdition>(
        `/filmControlEdition/${filmControlEditionId}`,
      ),
  };
}
