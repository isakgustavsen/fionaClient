import type { $Fetch } from "ofetch";
import type { IdDescription } from '../types/shared'
import type { Company } from '../types/index'


export interface CompaniesEndpoint {
  getAllByEdition: (editionId: string) => Promise<IdDescription[]>;
  getById: (companyId: string) => Promise<Company>;
}

/**
 * Creates the companies endpoint functions
 * @param client - The ofetch client instance
 * @returns Object with companies endpoint methods
 */
export function createCompaniesEndpoint(client: $Fetch): CompaniesEndpoint {
  return {
    getAllByEdition: async (editionId: string) =>
      await client<IdDescription[]>(`/editions/${editionId}/companies`),
    getById: async (companyId: string) =>
      await client<Company>(`/companies/${companyId}`),
  };
}
