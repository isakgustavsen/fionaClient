import type { $Fetch } from 'ofetch';

// Base Show interface
export interface Show {
  id: string;
  createdOn: string;
  updatedOn: string;
  description: string;
}

// Shows endpoint interface
export interface ShowsEndpoint {
  // Get all shows (placeholder - no specific endpoint found in docs)
  getAll: () => Promise<Show[]>;
}

/**
 * Creates the shows endpoint functions
 * @param client - The ofetch client instance
 * @returns Object with shows endpoint methods
 */
export function createShowsEndpoint(client: $Fetch): ShowsEndpoint {
  return {
    // Get all shows (placeholder - no specific endpoint found in docs)
    getAll: () => {
      return client<Show[]>('/shows');
    },
  };
}
