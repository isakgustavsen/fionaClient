import type { $Fetch } from "ofetch";

import type {
  CreateExternalAuthenticationRequest,
  ExternalAuthentication,
  UpdateExternalAuthenticationRequest,
} from "../types/external-accounts";

// External accounts endpoint interface
export interface ExternalAccountsEndpoint {
  // Get all external authentications for a person and provider
  getAllByPerson: (
    personId: string,
    providerName: string,
  ) => Promise<ExternalAuthentication[]>;

  // CRUD operations for individual external authentications
  updateById: (
    personId: string,
    providerName: string,
    externalAuthenticationId: string,
    auth: UpdateExternalAuthenticationRequest,
  ) => Promise<ExternalAuthentication>;
  deleteById: (
    personId: string,
    providerName: string,
    externalAuthenticationId: string,
  ) => Promise<void>;

  // Create new external authentication
  create: (
    personId: string,
    providerName: string,
    auth: CreateExternalAuthenticationRequest,
  ) => Promise<ExternalAuthentication>;
}

/**
 * Creates the external accounts endpoint functions
 * @param client - The ofetch client instance
 * @returns Object with external accounts endpoint methods
 */
export function createExternalAccountsEndpoint(
  client: $Fetch,
): ExternalAccountsEndpoint {
  return {
    // Get all external authentications for a person and provider
    getAllByPerson: async (personId: string, providerName: string) =>
      await client<ExternalAuthentication[]>(
        `/person/${personId}/${providerName}/externalauthentications`,
      ),

    // CRUD operations for individual external authentications
    updateById: async (
      personId: string,
      providerName: string,
      externalAuthenticationId: string,
      auth: UpdateExternalAuthenticationRequest,
    ) =>
      await client<ExternalAuthentication>(
        `/person/${personId}/${providerName}/externalauthentication/${externalAuthenticationId}`,
        {
          method: "POST",
          body: auth,
        },
      ),

    deleteById: async (
      personId: string,
      providerName: string,
      externalAuthenticationId: string,
    ) => {
      await client<unknown>(
        `/person/${personId}/${providerName}/externalauthentication/${externalAuthenticationId}`,
        {
          method: "DELETE",
        },
      );
    },

    // Create new external authentication
    create: async (
      personId: string,
      providerName: string,
      auth: CreateExternalAuthenticationRequest,
    ) =>
      await client<ExternalAuthentication>(
        `/person/${personId}/${providerName}/externalauthentication`,
        {
          method: "POST",
          body: auth,
        },
      ),
  };
}
