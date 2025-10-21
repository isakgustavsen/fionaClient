import type { $Fetch } from "ofetch";

import type { Entry } from "../types/entries";

// Entries endpoint interface
export interface EntriesEndpoint {
  // Get all entries for an account
  getAllByAccount: (
    providerName: string,
    externalIdentification: string,
  ) => Promise<Entry[]>;
}

/**
 * Creates the entries endpoint functions
 * @param client - The ofetch client instance
 * @returns Object with entries endpoint methods
 */
export function createEntriesEndpoint(client: $Fetch): EntriesEndpoint {
  return {
    // Get all entries for an account
    getAllByAccount: async (
      providerName: string,
      externalIdentification: string,
    ) =>
      await client<Entry[]>(
        `/entries/${providerName}/${externalIdentification}`,
      ),
  };
}
