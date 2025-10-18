import type { $Fetch } from 'ofetch';

// Base Volunteer interface
export interface Volunteer {
  id: string;
  description: string;
}

// Volunteers endpoint interface
export interface VolunteersEndpoint {
  // Get all volunteers (placeholder - no specific endpoint found in docs)
  getAll: () => Promise<Volunteer[]>;
}

/**
 * Creates the volunteers endpoint functions
 * @param client - The ofetch client instance
 * @returns Object with volunteers endpoint methods
 */
export function createVolunteersEndpoint(client: $Fetch): VolunteersEndpoint {
  return {
    // Get all volunteers (placeholder - no specific endpoint found in docs)
    getAll: () => {
      return client<Volunteer[]>('/volunteers');
    },
  };
}
