import type { $Fetch } from 'ofetch';

// Base external authentication interface
export interface ExternalAuthentication {
  id: string;
  createdOn: string;
  externalIdentification: string;
}

// List item version (for array responses)
export interface ExternalAuthenticationListItem {
  id: string;
  createdOn: string;
  externalIdentification: string;
}

// Create/Update external authentication request
export interface CreateExternalAuthenticationRequest {
  externalIdentification: string;
}

export interface UpdateExternalAuthenticationRequest {
  externalIdentification: string;
}

// External accounts endpoint interface
export interface ExternalAccountsEndpoint {
  // Get all external authentications for a person and provider
  getAllByPerson: (personId: string, providerName: string) => Promise<ExternalAuthenticationListItem[]>;

  // CRUD operations for individual external authentications
  updateById: (personId: string, providerName: string, externalAuthenticationId: string, auth: UpdateExternalAuthenticationRequest) => Promise<ExternalAuthentication>;
  deleteById: (personId: string, providerName: string, externalAuthenticationId: string) => Promise<void>;

  // Create new external authentication
  create: (personId: string, providerName: string, auth: CreateExternalAuthenticationRequest) => Promise<ExternalAuthentication>;
}

/**
 * Creates the external accounts endpoint functions
 * @param client - The ofetch client instance
 * @returns Object with external accounts endpoint methods
 */
export function createExternalAccountsEndpoint(client: $Fetch): ExternalAccountsEndpoint {
  return {
    // Get all external authentications for a person and provider
    getAllByPerson: (personId: string, providerName: string) => {
      return client<ExternalAuthenticationListItem[]>(`/person/${personId}/${providerName}/externalauthentications`);
    },

    // CRUD operations for individual external authentications
    updateById: (personId: string, providerName: string, externalAuthenticationId: string, auth: UpdateExternalAuthenticationRequest) => {
      return client<ExternalAuthentication>(`/person/${personId}/${providerName}/externalauthentication/${externalAuthenticationId}`, {
        method: 'POST',
        body: auth,
      });
    },

    deleteById: (personId: string, providerName: string, externalAuthenticationId: string) => {
      return client<void>(`/person/${personId}/${providerName}/externalauthentication/${externalAuthenticationId}`, {
        method: 'DELETE',
      });
    },

    // Create new external authentication
    create: (personId: string, providerName: string, auth: CreateExternalAuthenticationRequest) => {
      return client<ExternalAuthentication>(`/person/${personId}/${providerName}/externalauthentication`, {
        method: 'POST',
        body: auth,
      });
    },
  };
}
