import type { $Fetch } from 'ofetch';

export interface LookupListItem {
  id: string;
  documentVersion?: string | null;
  key: string;
  name: string;
}

export interface LookupValue {
  id: string;
  documentVersion?: string | null;
  publishedOn?: string;
  indexNumber: number;
  key: string;
  translations: Array<{
    abbreviation: string;
    language: string;
    text: string;
  }>;
}

export interface LookupsEndpoint {
  getAll: () => Promise<LookupListItem[]>;
  getValuesById: (lookupId: string) => Promise<LookupValue[]>;
}

/**
 * Creates the lookups endpoint functions
 * @param client - The ofetch client instance
 * @returns Object with lookups endpoint methods
 */
export function createLookupsEndpoint(client: $Fetch): LookupsEndpoint {
  return {
    getAll: () => {
      return client<LookupListItem[]>('/lookups');
    },
    getValuesById: (lookupId: string) => {
      return client<LookupValue[]>(`/lookups/${lookupId}`);
    },
  };
}

