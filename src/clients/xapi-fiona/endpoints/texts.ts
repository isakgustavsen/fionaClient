import type { $Fetch } from 'ofetch';

// Base Text interface
export interface Text {
  id: string;
  description: string;
}

// Texts endpoint interface
export interface TextsEndpoint {
  // Get all texts (placeholder - no specific endpoint found in docs)
  getAll: () => Promise<Text[]>;
}

/**
 * Creates the texts endpoint functions
 * @param client - The ofetch client instance
 * @returns Object with texts endpoint methods
 */
export function createTextsEndpoint(client: $Fetch): TextsEndpoint {
  return {
    // Get all texts (placeholder - no specific endpoint found in docs)
    getAll: () => {
      return client<Text[]>('/texts');
    },
  };
}
