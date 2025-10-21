import type { $Fetch } from "ofetch";

import type {
  EditionDetail,
  EditionType,
  EditionTypeDetail,
} from "../types/edition-types";
import type { IdDescription } from "../types/shared";

// EditionTypes endpoint interface
export interface EditionTypesEndpoint {
  // EditionType operations
  getAllEditionTypes: () => Promise<EditionType[]>;
  getEditionTypeById: (editionTypeId: string) => Promise<EditionTypeDetail>;
  // Edition operations
  getAllEditionsByType: (editionTypeId: string) => Promise<IdDescription[]>;
  getEditionById: (editionId: string) => Promise<EditionDetail>;
}

/**
 * Creates the edition types endpoint functions
 * @param client - The ofetch client instance
 * @returns Object with edition types endpoint methods
 */
export function createEditionTypesEndpoint(
  client: $Fetch,
): EditionTypesEndpoint {
  return {
    // EditionType operations
    getAllEditionTypes: async () =>
      await client<EditionType[]>("/editiontypes"),

    getEditionTypeById: async (editionTypeId: string) =>
      await client<EditionTypeDetail>(`/editiontype/${editionTypeId}`),

    // Edition operations
    getAllEditionsByType: async (editionTypeId: string) =>
      await client<IdDescription[]>(`/editions/${editionTypeId}`),

    getEditionById: async (editionId: string) =>
      await client<EditionDetail>(`/edition/${editionId}`),
  };
}
