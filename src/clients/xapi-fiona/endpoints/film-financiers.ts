import type { $Fetch } from "ofetch";

import type { Financier } from "../types/film-financiers";
// import type { ListItem } from '../types/shared'

// Film Financiers endpoint interface
export interface FilmFinanciersEndpoint {
  // Get all financiers for a film
  getAllByFilm: (filmId: string) => Promise<Financier[]>;

  // CRUD operations for individual financiers
  getById: (filmId: string, financierId: string) => Promise<Financier>;
  updateById: (
    filmId: string,
    financierId: string,
    financier: Financier,
  ) => Promise<Financier>;
  deleteById: (filmId: string, financierId: string) => Promise<void>;

  // Create new financier
  create: (filmId: string, financier: Financier) => Promise<Financier>;
}

/**
 * Creates the film financiers endpoint functions
 * @param client - The ofetch client instance
 * @returns Object with film financiers endpoint methods
 */
export function createFilmFinanciersEndpoint(
  client: $Fetch,
): FilmFinanciersEndpoint {
  return {
    // Get all financiers for a film
    getAllByFilm: async (filmId: string) =>
      await client<Financier[]>(`/film/${filmId}/financiers`),

    // CRUD operations for individual financiers
    getById: async (filmId: string, financierId: string) =>
      await client<Financier>(`/film/${filmId}/financier/${financierId}`),

    updateById: async (
      filmId: string,
      financierId: string,
      financier: Financier,
    ) =>
      await client<Financier>(`/film/${filmId}/financier/${financierId}`, {
        method: "POST",
        body: financier,
      }),

    deleteById: async (filmId: string, financierId: string) => {
      await client<unknown>(`/film/${filmId}/financier/${financierId}`, {
        method: "DELETE",
      });
    },

    // Create new financier
    create: async (filmId: string, financier: Financier) =>
      await client<Financier>(`/film/${filmId}/financier`, {
        method: "POST",
        body: financier,
      }),
  };
}
