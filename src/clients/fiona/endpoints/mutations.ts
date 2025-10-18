import type { $Fetch } from 'ofetch';

export interface Mutation {
  id: string;
  documentVersion: string | null;
  createdOn: string;
  entityId: string;
  entityName: string;
  entityUpdatedOn: string;
  isReferenceUpdate: boolean;
  mutation: number; // 0 = Insert, 1 = Update, 2 = Delete
}

export interface MutationsEndpoint {
  getFromDateTime: (dateTime: string) => Promise<Mutation[]>;
}

/**
 * Creates the mutations endpoint functions
 * @param client - The ofetch client instance
 * @returns Object with mutations endpoint methods
 */
export function createMutationsEndpoint(client: $Fetch): MutationsEndpoint {
  return {
    getFromDateTime: (dateTime: string) => {
      return client<Mutation[]>(`/mutations/${dateTime}`);
    },
  };
}

