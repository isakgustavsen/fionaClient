import type { $Fetch } from 'ofetch';

// Accreditation profile reference
export interface AccreditationProfile {
  id: string;
  description: string;
}

// Badge reference (shared with accreditations)
export interface Badge {
  id: string;
  description: string;
}

// Base Guestbook interface (list item version)
export interface GuestbookListItem {
  id: string;
  createdOn: string;
  updatedOn: string;
  description: string;
}

// Complete Guestbook interface
export interface Guestbook {
  id: string;
  createdOn: string;
  updatedOn: string;
  description: string;
  accreditationProfiles: AccreditationProfile[];
  editions: Array<{
    id: string;
    description: string;
  }>;
  badges: Badge[];
  endsOn: string;
  isActive: boolean;
  name: string;
  startsOn: string;
}

// Guestbooks endpoint interface
export interface GuestbooksEndpoint {
  // Get all guestbooks
  getAll: () => Promise<GuestbookListItem[]>;

  // Get guestbooks by edition
  getByEdition: (editionId: string) => Promise<GuestbookListItem[]>;

  // Get guestbook details by ID
  getById: (guestbookId: string) => Promise<Guestbook>;
}

/**
 * Creates the guestbooks endpoint functions
 * @param client - The ofetch client instance
 * @returns Object with guestbooks endpoint methods
 */
export function createGuestbooksEndpoint(client: $Fetch): GuestbooksEndpoint {
  return {
    // Get all guestbooks
    getAll: () => {
      return client<GuestbookListItem[]>('/guestbooks');
    },

    // Get guestbooks by edition
    getByEdition: (editionId: string) => {
      return client<GuestbookListItem[]>(`/edition/${editionId}/guestbooks`);
    },

    // Get guestbook details by ID
    getById: (guestbookId: string) => {
      return client<Guestbook>(`/guestbook/${guestbookId}`);
    },
  };
}
