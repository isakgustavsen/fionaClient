import type { $Fetch } from "ofetch";

import type { CompanyCommunicationItem, Company } from "../types/companies";

// Companies endpoint interface
export interface CompaniesEndpoint {
  // Company CRUD operations
  getById: (companyId: string) => Promise<Company>;
  updateById: (companyId: string, company: Company) => Promise<Company>;
  deleteById: (companyId: string) => Promise<void>;

  // Communication items for company
  getCommunicationItems: (
    companyId: string,
  ) => Promise<CompanyCommunicationItem[]>;
  getCommunicationItemById: (
    companyId: string,
    communicationItemId: string,
  ) => Promise<CompanyCommunicationItem>;
  updateCommunicationItemById: (
    companyId: string,
    communicationItemId: string,
    item: CompanyCommunicationItem,
  ) => Promise<CompanyCommunicationItem>;
  deleteCommunicationItemById: (
    companyId: string,
    communicationItemId: string,
  ) => Promise<void>;
  createCommunicationItem: (
    companyId: string,
    item: CompanyCommunicationItem,
  ) => Promise<CompanyCommunicationItem>;
}

/**
 * Creates the companies endpoint functions
 * @param client - The ofetch client instance
 * @returns Object with companies endpoint methods
 */
export function createCompaniesEndpoint(client: $Fetch): CompaniesEndpoint {
  return {
    // Company CRUD operations
    getById: async (companyId: string) =>
      await client<Company>(`/company/${companyId}`),

    updateById: async (companyId: string, company: Company) =>
      await client<Company>(`/company/${companyId}`, {
        method: "POST",
        body: company,
      }),

    deleteById: async (companyId: string) => {
      await client<unknown>(`/company/${companyId}`, {
        method: "DELETE",
      });
    },

    // Communication items for company
    getCommunicationItems: async (companyId: string) =>
      await client<CompanyCommunicationItem[]>(
        `/company/${companyId}/communicationItems`,
      ),

    getCommunicationItemById: async (
      companyId: string,
      communicationItemId: string,
    ) =>
      await client<CompanyCommunicationItem>(
        `/company/${companyId}/communicationItem/${communicationItemId}`,
      ),

    updateCommunicationItemById: async (
      companyId: string,
      communicationItemId: string,
      item: CompanyCommunicationItem,
    ) =>
      await client<CompanyCommunicationItem>(
        `/company/${companyId}/communicationItem/${communicationItemId}`,
        {
          method: "POST",
          body: item,
        },
      ),

    deleteCommunicationItemById: async (
      companyId: string,
      communicationItemId: string,
    ) => {
      await client<unknown>(
        `/company/${companyId}/communicationItem/${communicationItemId}`,
        {
          method: "DELETE",
        },
      );
    },

    createCommunicationItem: async (
      companyId: string,
      item: CompanyCommunicationItem,
    ) =>
      await client<CompanyCommunicationItem>(
        `/company/${companyId}/communicationItem`,
        {
          method: "POST",
          body: item,
        },
      ),
  };
}
