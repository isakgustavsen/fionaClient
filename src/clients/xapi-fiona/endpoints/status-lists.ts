import type { $Fetch } from 'ofetch';

// Base Status List interface
export interface StatusList {
  id: string;
  description: string;
}

// Status Lists endpoint interface
export interface StatusListsEndpoint {
  // Get all status lists (placeholder - no specific endpoint found in docs)
  getAll: () => Promise<StatusList[]>;
}

/**
 * Creates the status lists endpoint functions
 * @param client - The ofetch client instance
 * @returns Object with status lists endpoint methods
 */
export function createStatusListsEndpoint(client: $Fetch): StatusListsEndpoint {
  return {
    // Get all status lists (placeholder - no specific endpoint found in docs)
    getAll: () => {
      return client<StatusList[]>('/statuslists');
    },
  };
}
