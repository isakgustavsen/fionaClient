import type { $Fetch } from "ofetch";

export interface EditionType {
  id: string;
  description: string;
}

export interface EditionListItem {
  id: string;
  editionType: EditionType;
  endFestivalEvent: string;
  name: string;
  startFestivalEvent: string;
  year: number;
}

export interface Edition extends EditionListItem {
  documentVersion?: string | null;
  publishedOn?: string;
}

export interface EditionsEndpoint {
  getAllByEditionType: (editionTypeId: string) => Promise<EditionListItem[]>;
  getById: (editionId: string) => Promise<Edition>;
}

/**
 * Creates the editions endpoint functions
 * @param client - The ofetch client instance
 * @returns Object with editions endpoint methods
 */
export function createEditionsEndpoint(client: $Fetch): EditionsEndpoint {
  return {
    getAllByEditionType: async (editionTypeId: string) =>
      await client<EditionListItem[]>(
        `/editiontypes/${editionTypeId}/editions`,
      ),
    getById: async (editionId: string) =>
      await client<Edition>(`/editions/${editionId}`),
  };
}
