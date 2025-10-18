import type { $Fetch } from 'ofetch';

// Status list value interface
export interface StatusListValue {
  id: string;
  description: string;
  key: string;
  section: string;
  sortOrder: number;
  translations: Array<{
    label: string;
    language: string;
  }>;
}

// Applied status list value interface
export interface AppliedStatusListValue {
  id: string;
  checkedBy: {
    description: string;
    id: string;
  };
  checkedOn: string;
  value: {
    description: string;
    id: string;
  };
}

// Status Lists endpoint interface
export interface StatusListsEndpoint {
  // Get all status list definitions for owner type
  getStatusListDefinitions: (ownerType: string) => Promise<StatusListValue[]>;

  // Get applied status list values for owner
  getAppliedStatusListValues: (ownerType: string, ownerId: string) => Promise<AppliedStatusListValue[]>;

  // Get applied status list value by ID
  getAppliedStatusListValueById: (ownerType: string, ownerId: string, statusListValueId: string) => Promise<AppliedStatusListValue>;

  // Create new applied status list value
  createAppliedStatusListValue: (ownerType: string, ownerId: string, request: {
    checkedBy: { id: string };
    checkedOn: string;
    value: { id: string };
  }) => Promise<AppliedStatusListValue>;

  // Delete applied status list value
  deleteAppliedStatusListValue: (ownerType: string, ownerId: string, statusListValueId: string) => Promise<void>;
}

/**
 * Creates the status lists endpoint functions
 * @param client - The ofetch client instance
 * @returns Object with status lists endpoint methods
 */
export function createStatusListsEndpoint(client: $Fetch): StatusListsEndpoint {
  return {
    // Get all status list definitions for owner type
    getStatusListDefinitions: (ownerType: string) => {
      return client<StatusListValue[]>(`/${ownerType}/statuslistvalues`);
    },

    // Get applied status list values for owner
    getAppliedStatusListValues: (ownerType: string, ownerId: string) => {
      return client<AppliedStatusListValue[]>(`/${ownerType}/${ownerId}/statuslistvalues`);
    },

    // Get applied status list value by ID
    getAppliedStatusListValueById: (ownerType: string, ownerId: string, statusListValueId: string) => {
      return client<AppliedStatusListValue>(`/${ownerType}/${ownerId}/statuslistvalue/${statusListValueId}`);
    },

    // Create new applied status list value
    createAppliedStatusListValue: (ownerType: string, ownerId: string, request) => {
      return client<AppliedStatusListValue>(`/${ownerType}/${ownerId}/statuslistvalue`, {
        method: 'POST',
        body: request,
      });
    },

    // Delete applied status list value
    deleteAppliedStatusListValue: (ownerType: string, ownerId: string, statusListValueId: string) => {
      return client<void>(`/${ownerType}/${ownerId}/statuslistvalue/${statusListValueId}`, {
        method: 'DELETE',
      });
    },
  };
}
