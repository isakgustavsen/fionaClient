import type { $Fetch } from "ofetch";

import type { FilmEntry, Form } from "../types/forms";

// Forms endpoint interface
export interface FormsEndpoint {
  // Get all available forms
  getAll: () => Promise<Form[]>;

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
    getAll: async () => await client<Form[]>("/forms"),

    // Get film entry by ID
    getFilmEntryById: async (filmEntryId: string) =>
      await client<FilmEntry>(`/filmentry/${filmEntryId}`),
  };
}
