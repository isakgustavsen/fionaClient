import type { $Fetch } from "ofetch";

import type {
  AppliedStatusListValue,
  CreateAppliedStatusListValueRequest,
  StatusListValue,
} from "../types/status-lists";

// Status Lists endpoint interface
export interface StatusListsEndpoint {
  // Get all status list definitions for owner type
  getStatusListDefinitions: (ownerType: string) => Promise<StatusListValue[]>;

  // Get applied status list values for owner
  getAppliedStatusListValues: (
    ownerType: string,
    ownerId: string,
  ) => Promise<AppliedStatusListValue[]>;

  // Get applied status list value by ID
  getAppliedStatusListValueById: (
    ownerType: string,
    ownerId: string,
    statusListValueId: string,
  ) => Promise<AppliedStatusListValue>;

  // Create new applied status list value
  createAppliedStatusListValue: (
    ownerType: string,
    ownerId: string,
    request: CreateAppliedStatusListValueRequest,
  ) => Promise<AppliedStatusListValue>;

  // Delete applied status list value
  deleteAppliedStatusListValue: (
    ownerType: string,
    ownerId: string,
    statusListValueId: string,
  ) => Promise<void>;
}

/**
 * Creates the status lists endpoint functions
 * @param client - The ofetch client instance
 * @returns Object with status lists endpoint methods
 */
export function createStatusListsEndpoint(client: $Fetch): StatusListsEndpoint {
  return {
    // Get all status list definitions for owner type
    getStatusListDefinitions: async (ownerType: string) =>
      await client<StatusListValue[]>(`/${ownerType}/statuslistvalues`),

    // Get applied status list values for owner
    getAppliedStatusListValues: async (ownerType: string, ownerId: string) =>
      await client<AppliedStatusListValue[]>(
        `/${ownerType}/${ownerId}/statuslistvalues`,
      ),

    // Get applied status list value by ID
    getAppliedStatusListValueById: async (
      ownerType: string,
      ownerId: string,
      statusListValueId: string,
    ) =>
      await client<AppliedStatusListValue>(
        `/${ownerType}/${ownerId}/statuslistvalue/${statusListValueId}`,
      ),

    // Create new applied status list value
    createAppliedStatusListValue: async (
      ownerType: string,
      ownerId: string,
      request: CreateAppliedStatusListValueRequest,
    ) =>
      await client<AppliedStatusListValue>(
        `/${ownerType}/${ownerId}/statuslistvalue`,
        {
          method: "POST",
          body: request,
        },
      ),

    // Delete applied status list value
    deleteAppliedStatusListValue: async (
      ownerType: string,
      ownerId: string,
      statusListValueId: string,
    ) => {
      await client<unknown>(
        `/${ownerType}/${ownerId}/statuslistvalue/${statusListValueId}`,
        {
          method: "DELETE",
        },
      );
    },
  };
}
