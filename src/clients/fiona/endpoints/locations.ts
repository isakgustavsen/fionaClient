import type { $Fetch } from "ofetch";

export interface ContactDetail {
  id: string;
  _id: string;
  subType: {
    key: string;
    translations: Array<{
      abbreviation: string;
      language: string;
      text: string;
    }>;
  };
  type: {
    key: string;
    translations: Array<{
      abbreviation: string;
      language: string;
      text: string;
    }>;
  };
  value: string;
}

export interface Country {
  key: string;
  translations: Array<{
    abbreviation?: string;
    language: string;
    text: string;
  }>;
}

export interface Address {
  id: string;
  address1: string;
  address2?: string | null;
  city: string;
  country: Country;
  latitude: string;
  longitude: string;
  postalCode: string;
  state: string;
}

export interface ParentLocation {
  id: string;
  name: string;
}

export interface LocationType {
  key: string;
  translations: Array<{
    abbreviation: string;
    language: string;
    text: string;
  }>;
}

export interface Location {
  id: string;
  documentVersion?: string | null;
  publishedOn?: string;
  abbreviation: string;
  capacity?: number;
  contactDetails: ContactDetail[];
  customFieldValues: Array<Record<string, unknown>>;
  customFieldOptions: Array<Record<string, unknown>>;
  favoriteImageAttachmentId?: string | null;
  favoritePreviewAttachmentId?: string | null;
  isOnline: boolean;
  name: string;
  parentLocation?: ParentLocation | null;
  publications: Array<Record<string, unknown>>;
  type: LocationType;
}

export interface LocationsEndpoint {
  getAll: () => Promise<Location[]>;
  getById: (locationId: string) => Promise<Location>;
}

/**
 * Creates the locations endpoint functions
 * @param client - The ofetch client instance
 * @returns Object with locations endpoint methods
 */
export function createLocationsEndpoint(client: $Fetch): LocationsEndpoint {
  return {
    getAll: async () => await client<Location[]>("/locations"),
    getById: async (locationId: string) =>
      await client<Location>(`/locations/${locationId}`),
  };
}
