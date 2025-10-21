import type { $Fetch } from "ofetch";

import type { ScreeningCopy } from "../types/screening-copies";

// Screening Copies endpoint interface
export interface ScreeningCopiesEndpoint {
  // Get all screening copies in an edition
  getAllByEdition: (editionId: string) => Promise<ScreeningCopy[]>;
}

/**
 * Creates the screening copies endpoint functions
 * @param client - The ofetch client instance
 * @returns Object with screening copies endpoint methods
 */
export function createScreeningCopiesEndpoint(
  client: $Fetch,
): ScreeningCopiesEndpoint {
  return {
    // Get all screening copies in an edition
    getAllByEdition: async (editionId: string) =>
      await client<ScreeningCopy[]>(
        `/edition/${editionId}/filmscreeningcopies`,
      ),
  };
}
