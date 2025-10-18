import type { $Fetch } from 'ofetch';

// Lookup list interface (for the main lookup lists)
export interface LookupList {
  id: string;
  description: string;
}

// Lookup value translations
export interface LookupValueTranslation {
  abbreviation?: string;
  language: string;
  text: string;
}

// Lookup value interface
export interface LookupValue {
  id: string;
  groupId?: string | null;
  indexNumber: number;
  isActive: boolean;
  key: string;
  translations: LookupValueTranslation[];
}

// Complete lookup with values
export interface LookupWithValues {
  id: string;
  defaultLookupValueId?: string;
  isCustomizable: boolean;
  lookupValues: LookupValue[];
}

// Lookups endpoint interface
export interface LookupsEndpoint {
  // Get all lookup lists
  getAll: () => Promise<LookupList[]>;

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
    getAll: () => {
      return client<LookupList[]>('/lookups');
    },

    // Get lookup values for a specific lookup
    getValuesById: (lookupId: string) => {
      return client<LookupWithValues>(`/lookup/${lookupId}`);
    },
  };
}
