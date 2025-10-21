import type { $Fetch } from "ofetch";

import type { CompanyProfile } from "../types/company-profiles";

import type { ListItem } from "../types/shared";

// Company Profiles endpoint interface
export interface CompanyProfilesEndpoint {
  // Get all company profiles by guestbook
  getAllByGuestbook: (guestbookId: string) => Promise<ListItem[]>;

  // Get company profile details by ID
  getById: (companyProfileId: string) => Promise<CompanyProfile>;
}

/**
 * Creates the company profiles endpoint functions
 * @param client - The ofetch client instance
 * @returns Object with company profiles endpoint methods
 */
export function createCompanyProfilesEndpoint(
  client: $Fetch,
): CompanyProfilesEndpoint {
  return {
    // Get all company profiles by guestbook
    getAllByGuestbook: async (guestbookId: string) =>
      await client<ListItem[]>(`/guestbook/${guestbookId}/companyProfiles`),

    // Get company profile details by ID
    getById: async (companyProfileId: string) =>
      await client<CompanyProfile>(`/companyProfile/${companyProfileId}`),
  };
}
