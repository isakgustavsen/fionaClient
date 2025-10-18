import type { $Fetch } from 'ofetch';

// Edition type reference (for nested responses)
export interface EditionTypeReference {
  id: string;
  description: string;
}

// Edition reference (for nested responses)
export interface EditionReference {
  id: string;
  description: string;
}

// Guestbook reference (shared with other endpoints)
export interface GuestbookReference {
  id: string;
  description: string;
}

// Base EditionType interface
export interface EditionType {
  id: string;
  description: string;
}

// Detailed EditionType with all editions
export interface EditionTypeDetail extends EditionType {
  abbreviation?: string;
  active: boolean;
  activeEdition?: EditionReference | null;
  editions: Edition[];
  name: string;
  startsInMonth: number;
}

// Base Edition interface
export interface Edition {
  id: string;
  description?: string | null;
}

// List item version (for array responses)
export interface EditionListItem extends Edition {
  description?: string | null;
}

// Detailed Edition interface
export interface EditionDetail extends Edition {
  editionType: EditionTypeReference;
  endFestivalEvent: string;
  endFestivalYear: string;
  guestbook?: GuestbookReference;
  isActiveEdition: boolean;
  name?: string;
  round?: string;
  sequenceNumber?: number;
  startFestivalEvent: string;
  startFestivalYear: string;
  year: number;
}

// EditionTypes and Editions endpoint interface
export interface EditionTypesEditionsEndpoint {
  // EditionType operations
  getAllEditionTypes: () => Promise<EditionType[]>;
  getEditionTypeById: (editionTypeId: string) => Promise<EditionTypeDetail>;

  // Edition operations
  getEditionsByEditionType: (editionTypeId: string) => Promise<EditionListItem[]>;
  getEditionById: (editionId: string) => Promise<EditionDetail>;
}

/**
 * Creates the edition types and editions endpoint functions
 * @param client - The ofetch client instance
 * @returns Object with edition types and editions endpoint methods
 */
export function createEditionTypesEditionsEndpoint(client: $Fetch): EditionTypesEditionsEndpoint {
  return {
    // EditionType operations
    getAllEditionTypes: () => {
      return client<EditionType[]>('/editiontypes');
    },

    getEditionTypeById: (editionTypeId: string) => {
      return client<EditionTypeDetail>(`/editiontype/${editionTypeId}`);
    },

    // Edition operations
    getEditionsByEditionType: (editionTypeId: string) => {
      return client<EditionListItem[]>(`/editions/${editionTypeId}`);
    },

    getEditionById: (editionId: string) => {
      return client<EditionDetail>(`/edition/${editionId}`);
    },
  };
}
