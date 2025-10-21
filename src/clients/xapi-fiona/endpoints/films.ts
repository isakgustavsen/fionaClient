import type { $Fetch } from "ofetch";

import type { CreateFilmRequest, Credit, Film } from "../types/films";
import type { ListItem } from "../types/shared";

// Films endpoint interface
export interface FilmsEndpoint {
  // Get all films in an edition
  getAllByEdition: (editionId: string) => Promise<ListItem[]>;

  // CRUD operations for films
  create: (film: CreateFilmRequest) => Promise<Film>;
  getById: (filmId: string) => Promise<Film>;
  updateById: (filmId: string, film: Film) => Promise<Film>;
  deleteById: (filmId: string) => Promise<void>;

  // Credits management
  getCredits: (filmId: string) => Promise<Credit[]>;
  getCreditById: (filmId: string, creditId: string) => Promise<Credit>;
  updateCreditById: (
    filmId: string,
    creditId: string,
    credit: Credit,
  ) => Promise<Credit>;
  deleteCreditById: (filmId: string, creditId: string) => Promise<void>;
  createCredit: (filmId: string, credit: Omit<Credit, "id">) => Promise<Credit>;
}

/**
 * Creates the films endpoint functions
 * @param client - The ofetch client instance
 * @returns Object with films endpoint methods
 */
export function createFilmsEndpoint(client: $Fetch): FilmsEndpoint {
  return {
    /**
     * Get all films within a specific edition
     * @param editionId - The unique identifier of the edition
     * @returns Promise resolving to array of film list items for the edition
     */
    getAllByEdition: async (editionId: string) =>
      await client<ListItem[]>(`/films/${editionId}`),

    // CRUD operations for films
    /**
     * Create a new film
     * @param film - Film creation data including title, category, format, etc.
     * @returns Promise resolving to the created film details
     */
    create: async (film: CreateFilmRequest) =>
      await client<Film>("/film", {
        method: "POST",
        body: film,
      }),

    /**
     * Get film details by ID
     * @param filmId - The unique identifier of the film
     * @returns Promise resolving to complete film details including credits, attachments, and metadata
     */
    getById: async (filmId: string) => await client<Film>(`/film/${filmId}`),

    /**
     * Update an existing film (complete object replacement required)
     * @param filmId - The unique identifier of the film to update
     * @param film - Updated film data (complete object required, empty fields will be cleared)
     * @returns Promise resolving to updated film details
     */
    updateById: async (filmId: string, film: Film) =>
      await client<Film>(`/film/${filmId}`, {
        method: "POST",
        body: film,
      }),

    /**
     * Delete a film (not allowed for films with "Selected" final recommendation)
     * @param filmId - The unique identifier of the film to delete
     * @returns Promise resolving when deletion is complete
     */
    deleteById: async (filmId: string) => {
      await client<unknown>(`/film/${filmId}`, {
        method: "DELETE",
      });
    },

    // Credits management
    /**
     * Get all credits (cast/crew) for a film
     * @param filmId - The unique identifier of the film
     * @returns Promise resolving to array of film credits
     */
    getCredits: async (filmId: string) =>
      await client<Credit[]>(`/film/${filmId}/credits`),

    /**
     * Get a specific credit by ID
     * @param filmId - The unique identifier of the film
     * @param creditId - The unique identifier of the credit
     * @returns Promise resolving to credit details
     */
    getCreditById: async (filmId: string, creditId: string) =>
      await client<Credit>(`/film/${filmId}/credit/${creditId}`),

    /**
     * Update a specific credit (complete object replacement required)
     * @param filmId - The unique identifier of the film
     * @param creditId - The unique identifier of the credit to update
     * @param credit - Updated credit data (complete object required)
     * @returns Promise resolving to updated credit details
     */
    updateCreditById: async (
      filmId: string,
      creditId: string,
      credit: Credit,
    ) =>
      await client<Credit>(`/film/${filmId}/credit/${creditId}`, {
        method: "POST",
        body: credit,
      }),

    /**
     * Delete a credit from a film
     * @param filmId - The unique identifier of the film
     * @param creditId - The unique identifier of the credit to delete
     * @returns Promise resolving when deletion is complete
     */
    deleteCreditById: async (filmId: string, creditId: string) => {
      await client<unknown>(`/film/${filmId}/credit/${creditId}`, {
        method: "DELETE",
      });
    },

    /**
     * Create a new credit for a film
     * @param filmId - The unique identifier of the film
     * @param credit - Credit creation data including person/company and role
     * @returns Promise resolving to the created credit details
     */
    createCredit: async (filmId: string, credit: Omit<Credit, "id">) =>
      await client<Credit>(`/film/${filmId}/credit`, {
        method: "POST",
        body: credit,
      }),
  };
}
