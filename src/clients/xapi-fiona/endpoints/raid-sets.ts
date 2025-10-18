import type { $Fetch } from 'ofetch';

// Location server reference
export interface LocationServer {
  id: string;
  description: string;
}

// Status reference
export interface RaidSetStatus {
  id: string;
  description: string;
}

// DCP (Digital Cinema Package) interface
export interface DCP {
  id: string;
  ingestStatus?: {
    id: string;
    description: string;
  } | null;
  contentTitle?: string | null;
  filmTitle: string;
  name: string;
  uuid: string;
  firstScreeningOn: string;
  lastScreeningOn: string;
}

// Base Raid Set interface
export interface RaidSet {
  id: string;
  name: string;
  startsOn: string;
  endsOn: string;
  autoFill: boolean;
  capacity: number;
  locationServer: LocationServer;
  remarks?: string | null;
  status: RaidSetStatus;
  DCPs: DCP[];
}

// Raid Sets endpoint interface
export interface RaidSetsEndpoint {
  // Get raid set details with DCPs
  getById: (raidSetId: string) => Promise<RaidSet>;

  // Update DCP ingest status (only for autoFill raid sets)
  updateIngestStatus: (raidSetId: string, filmScreeningCopyId: string, ingestStatusId: string) => Promise<boolean>;

  // Reset DCP ingest status (only for autoFill raid sets)
  resetIngestStatus: (raidSetId: string, filmScreeningCopyId: string) => Promise<boolean>;
}

/**
 * Creates the raid sets endpoint functions
 * @param client - The ofetch client instance
 * @returns Object with raid sets endpoint methods
 */
export function createRaidSetsEndpoint(client: $Fetch): RaidSetsEndpoint {
  return {
    // Get raid set details with DCPs
    getById: (raidSetId: string) => {
      return client<RaidSet>(`/raidSet/${raidSetId}`);
    },

    // Update DCP ingest status (only for autoFill raid sets)
    updateIngestStatus: (raidSetId: string, filmScreeningCopyId: string, ingestStatusId: string) => {
      return client<boolean>(`/raidSet/${raidSetId}/copy/${filmScreeningCopyId}/status/${ingestStatusId}`, {
        method: 'POST',
      });
    },

    // Reset DCP ingest status (only for autoFill raid sets)
    resetIngestStatus: (raidSetId: string, filmScreeningCopyId: string) => {
      return client<boolean>(`/raidSet/${raidSetId}/copy/${filmScreeningCopyId}/status`, {
        method: 'DELETE',
      });
    },
  };
}
