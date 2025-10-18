import type { $Fetch } from 'ofetch';

export interface ActiveEdition {
  id: string;
  description: string;
}

export interface EditionType {
  id: string;
  activeEdition: ActiveEdition | null;
  description: string;
  name: string;
}

export interface EditionTypesEndpoint {
  getAll: () => Promise<EditionType[]>;
}

/**
 * Creates the edition types endpoint functions
 * @param client - The ofetch client instance
 * @returns Object with edition types endpoint methods
 */
export function createEditionTypesEndpoint(client: $Fetch): EditionTypesEndpoint {
  return {
    getAll: () => {
      return client<EditionType[]>('/editiontypes/');
    },
  };
}

