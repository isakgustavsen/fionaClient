import type { $Fetch } from 'ofetch';

// Company reference (shared with companies endpoint)
export interface CompanyReference {
  id: string;
  description: string;
}

// Guestbook reference (shared with other endpoints)
export interface GuestbookReference {
  id: string;
  description: string;
}

// Company focus area reference
export interface CompanyFocus {
  id: string;
  description: string;
}

// Territory reference
export interface Territory {
  id: string;
  description: string;
}

// Working sector reference
export interface WorkingSector {
  id: string;
  description: string;
}

// Base Company Profile interface
export interface CompanyProfile {
  id: string;
  createdOn: string;
  updatedOn: string;
  description: string;
  company: CompanyReference;
  companyFocus: CompanyFocus[];
  guestbook: GuestbookReference;
  mainTerritories: Territory[];
  mainWorkingSector: WorkingSector;
  otherWorkingSectors: WorkingSector[];
}

// List item version (for array responses)
export interface CompanyProfileListItem {
  id: string;
  createdOn: string;
  updatedOn: string;
  description: string;
}

// Company Profiles endpoint interface
export interface CompanyProfilesEndpoint {
  // Get all company profiles by guestbook
  getAllByGuestbook: (guestbookId: string) => Promise<CompanyProfileListItem[]>;

  // Get company profile details by ID
  getById: (companyProfileId: string) => Promise<CompanyProfile>;
}

/**
 * Creates the company profiles endpoint functions
 * @param client - The ofetch client instance
 * @returns Object with company profiles endpoint methods
 */
export function createCompanyProfilesEndpoint(client: $Fetch): CompanyProfilesEndpoint {
  return {
    // Get all company profiles by guestbook
    getAllByGuestbook: (guestbookId: string) => {
      return client<CompanyProfileListItem[]>(`/guestbook/${guestbookId}/companyProfiles`);
    },

    // Get company profile details by ID
    getById: (companyProfileId: string) => {
      return client<CompanyProfile>(`/companyProfile/${companyProfileId}`);
    },
  };
}
