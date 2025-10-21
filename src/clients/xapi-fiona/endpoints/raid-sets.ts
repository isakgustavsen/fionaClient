import type { $Fetch } from "ofetch";

import type { RaidSet } from "../types/raid-sets";

// Raid Sets endpoint interface
export interface RaidSetsEndpoint {
  // Get raid set details with DCPs
  getById: (raidSetId: string) => Promise<RaidSet>;

  // Update DCP ingest status (only for autoFill raid sets)
  updateIngestStatus: (
    raidSetId: string,
    filmScreeningCopyId: string,
    ingestStatusId: string,
  ) => Promise<boolean>;

  // Reset DCP ingest status (only for autoFill raid sets)
  resetIngestStatus: (
    raidSetId: string,
    filmScreeningCopyId: string,
  ) => Promise<boolean>;
}

/**
 * Creates the raid sets endpoint functions
 * @param client - The ofetch client instance
 * @returns Object with raid sets endpoint methods
 */
export function createRaidSetsEndpoint(client: $Fetch): RaidSetsEndpoint {
  return {
    // Get raid set details with DCPs
    getById: async (raidSetId: string) =>
      await client<RaidSet>(`/raidSet/${raidSetId}`),

    // Update DCP ingest status (only for autoFill raid sets)
    updateIngestStatus: async (
      raidSetId: string,
      filmScreeningCopyId: string,
      ingestStatusId: string,
    ) =>
      await client<boolean>(
        `/raidSet/${raidSetId}/copy/${filmScreeningCopyId}/status/${ingestStatusId}`,
        {
          method: "POST",
        },
      ),

    // Reset DCP ingest status (only for autoFill raid sets)
    resetIngestStatus: async (raidSetId: string, filmScreeningCopyId: string) =>
      await client<boolean>(
        `/raidSet/${raidSetId}/copy/${filmScreeningCopyId}/status`,
        {
          method: "DELETE",
        },
      ),
  };
}
