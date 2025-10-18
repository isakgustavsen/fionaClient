import type { $Fetch } from 'ofetch';

// Film reference
export interface Film {
  id: string;
  description: string;
}

// Medium type reference
export interface MediumType {
  id: string;
  description: string;
}

// Base Screening Copy interface
export interface ScreeningCopy {
  id: string;
  filmTitle: string;
  contentTitle?: string | null;
  uuid?: string | null;
  mediumType: MediumType;
  printNumber: number;
  createdOn: string;
  updatedOn: string;
  description: string;
}

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
export function createScreeningCopiesEndpoint(client: $Fetch): ScreeningCopiesEndpoint {
  return {
    // Get all screening copies in an edition
    getAllByEdition: (editionId: string) => {
      return client<ScreeningCopy[]>(`/edition/${editionId}/filmscreeningcopies`);
    },
  };
}
