import type { $Fetch } from 'ofetch';

// Base Financier interface
export interface Financier {
  id: string;
  contribution: number;
  name: string;
  sortOrder: number;
}

// List item version (for array responses)
export interface FinancierListItem {
  id: string;
  contribution: number;
  name: string;
  sortOrder: number;
}

// Create/Update financier request
export interface CreateFinancierRequest {
  contribution: number;
  name: string;
  sortOrder?: number;
}

export interface UpdateFinancierRequest extends Financier {}

// Film Financiers endpoint interface
export interface FilmFinanciersEndpoint {
  // Get all financiers for a film
  getAllByFilm: (filmId: string) => Promise<FinancierListItem[]>;

  // CRUD operations for individual financiers
  getById: (filmId: string, financierId: string) => Promise<Financier>;
  updateById: (filmId: string, financierId: string, financier: UpdateFinancierRequest) => Promise<Financier>;
  deleteById: (filmId: string, financierId: string) => Promise<void>;

  // Create new financier
  create: (filmId: string, financier: CreateFinancierRequest) => Promise<Financier>;
}

/**
 * Creates the film financiers endpoint functions
 * @param client - The ofetch client instance
 * @returns Object with film financiers endpoint methods
 */
export function createFilmFinanciersEndpoint(client: $Fetch): FilmFinanciersEndpoint {
  return {
    // Get all financiers for a film
    getAllByFilm: (filmId: string) => {
      return client<FinancierListItem[]>(`/film/${filmId}/financiers`);
    },

    // CRUD operations for individual financiers
    getById: (filmId: string, financierId: string) => {
      return client<Financier>(`/film/${filmId}/financier/${financierId}`);
    },

    updateById: (filmId: string, financierId: string, financier: UpdateFinancierRequest) => {
      return client<Financier>(`/film/${filmId}/financier/${financierId}`, {
        method: 'POST',
        body: financier,
      });
    },

    deleteById: (filmId: string, financierId: string) => {
      return client<void>(`/film/${filmId}/financier/${financierId}`, {
        method: 'DELETE',
      });
    },

    // Create new financier
    create: (filmId: string, financier: CreateFinancierRequest) => {
      return client<Financier>(`/film/${filmId}/financier`, {
        method: 'POST',
        body: financier,
      });
    },
  };
}
