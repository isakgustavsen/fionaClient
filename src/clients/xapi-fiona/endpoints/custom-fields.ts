import type { $Fetch } from "ofetch";

import type {
  CustomFieldDefinition,
  CustomFieldValue,
} from "../types/custom-fields";

type OwnerType = "film" | "accreditation" | "company" | "person" | "show";

// Custom Fields endpoint interface
export interface CustomFieldsEndpoint {
  // Get custom field definitions for an owner type
  getDefinitions: (ownerType: OwnerType) => Promise<CustomFieldDefinition[]>;

  // Get all custom field values for an owner
  getValues: (
    ownerType: OwnerType,
    ownerId: string,
  ) => Promise<CustomFieldValue[]>;

  // CRUD operations for individual custom field values
  getValue: (
    ownerType: OwnerType,
    ownerId: string,
    customFieldId: string,
  ) => Promise<CustomFieldValue>;
  updateValue: (
    ownerType: OwnerType,
    ownerId: string,
    customFieldId: string,
    value: CustomFieldValue,
  ) => Promise<CustomFieldValue>;
  deleteValue: (
    ownerType: OwnerType,
    ownerId: string,
    customFieldId: string,
  ) => Promise<void>;
}

/**
 * Creates the custom fields endpoint functions
 * @param client - The ofetch client instance
 * @returns Object with custom fields endpoint methods
 */
export function createCustomFieldsEndpoint(
  client: $Fetch,
): CustomFieldsEndpoint {
  return {
    // Get custom field definitions for an owner type
    getDefinitions: async (ownerType: OwnerType) =>
      await client<CustomFieldDefinition[]>(`/${ownerType}/customfields`),

    // Get all custom field values for an owner
    getValues: async (ownerType: OwnerType, ownerId: string) =>
      await client<CustomFieldValue[]>(`/${ownerType}/${ownerId}/customfields`),

    // CRUD operations for individual custom field values
    getValue: async (
      ownerType: OwnerType,
      ownerId: string,
      customFieldId: string,
    ) =>
      await client<CustomFieldValue>(
        `/${ownerType}/${ownerId}/customfield/${customFieldId}`,
      ),

    updateValue: async (
      ownerType: OwnerType,
      ownerId: string,
      customFieldId: string,
      value: CustomFieldValue,
    ) =>
      await client<CustomFieldValue>(
        `/${ownerType}/${ownerId}/customfield/${customFieldId}`,
        {
          method: "POST",
          body: value,
        },
      ),

    deleteValue: async (
      ownerType: OwnerType,
      ownerId: string,
      customFieldId: string,
    ) => {
      await client<unknown>(
        `/${ownerType}/${ownerId}/customfield/${customFieldId}`,
        {
          method: "DELETE",
        },
      );
    },
  };
}
