import type { $Fetch } from "ofetch";

import type { LookupWithValues } from "../types/lookups";
import type { IdDescription } from "../types/shared";

// Lookups endpoint interface
export interface LookupsEndpoint {
  // Get all lookup lists
  getAll: () => Promise<IdDescription[]>;

  // Get lookup values for a specific lookup
  getValuesById: (lookupId: string) => Promise<LookupWithValues>;
}

/**
 * Creates the lookups endpoint functions
 * @param client - The ofetch client instance
 * @returns Object with lookups endpoint methods
 */
export function createLookupsEndpoint(client: $Fetch): LookupsEndpoint {
  return {
    // Get all lookup lists
    getAll: async () => await client<IdDescription[]>("/lookups"),

    // Get lookup values for a specific lookup
    getValuesById: async (lookupId: string) =>
      await client<LookupWithValues>(`/lookup/${lookupId}`),
  };
}
