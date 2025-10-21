import type { $Fetch } from "ofetch";

import type {
  AccountDetails,
  AccountGroup,
  VolunteerInfo,
} from "../types/account";

export interface AccountEndpoint {
  getDetails: (
    providerName: string,
    externalIdentificationId: string,
  ) => Promise<AccountDetails>;
  getGroups: (
    providerName: string,
    externalIdentification: string,
  ) => Promise<AccountGroup[]>;
  getVolunteerInfo: (
    providerName: string,
    externalIdentification: string,
    volunteerEditionId: string,
  ) => Promise<VolunteerInfo>;
}

/**
 * Creates the account endpoint functions
 * @param client - The ofetch client instance
 * @returns Object with account endpoint methods
 */
export function createAccountEndpoint(client: $Fetch): AccountEndpoint {
  return {
    /**
     * Get detailed account information including person details and account groups
     * @param providerName - The name of the authentication provider (e.g., 'SRO', 'KeyCloak')
     * @param externalIdentificationId - The unique external identifier for the account
     * @returns Promise resolving to account details with person information and associated groups
     */
    getDetails: async (
      providerName: string,
      externalIdentificationId: string,
    ) =>
      await client<AccountDetails>(
        `/account/details/${providerName}/${externalIdentificationId}/`,
      ),

    /**
     * Get all account groups associated with an external account
     * @param providerName - The name of the authentication provider
     * @param externalIdentification - The unique external identifier for the account
     * @returns Promise resolving to array of account groups
     */
    getGroups: async (providerName: string, externalIdentification: string) =>
      await client<AccountGroup[]>(
        `/account/${providerName}/${externalIdentification}/`,
      ),

    /**
     * Get volunteer information for an account within a specific volunteer edition
     * @param providerName - The name of the authentication provider
     * @param externalIdentification - The unique external identifier for the account
     * @param volunteerEditionId - The unique identifier of the volunteer edition
     * @returns Promise resolving to volunteer information including position, badge, and status
     */
    getVolunteerInfo: async (
      providerName: string,
      externalIdentification: string,
      volunteerEditionId: string,
    ) =>
      await client<VolunteerInfo>(
        `/account/${providerName}/${externalIdentification}/volunteeredition/${volunteerEditionId}/volunteer`,
      ),
  };
}
