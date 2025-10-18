import type { $Fetch } from 'ofetch';

// Owner types for custom fields
export type OwnerType = 'film' | 'accreditation' | 'company' | 'person' | 'show';

// Edition type reference (only relevant for film)
export interface EditionType {
  id: string;
  description: string;
}

// Custom field type reference
export interface CustomFieldType {
  id: string;
  description: string;
}

// Option for select/multiselect fields
export interface CustomFieldOption {
  id: string;
  key: string;
  sortOrder: number;
  translations: Array<{
    label: string;
    language: string;
  }>;
}

// Base Custom Field Definition interface
export interface CustomFieldDefinition {
  id: string;
  key: string;
  editionType?: EditionType; // Only relevant for film
  options: CustomFieldOption[];
  type: CustomFieldType;
}

// List item version (for array responses)
export interface CustomFieldDefinitionListItem {
  id: string;
  key: string;
  editionType?: {
    id: string;
    description: string;
  };
  options: CustomFieldOption[];
  type: {
    id: string;
    description: string;
  };
}

// Custom Field Value interface
export interface CustomFieldValue {
  customField: string; // Key of the custom field
  options?: string[] | null; // For select/multiselect fields
  value?: string | null; // For text/numeric fields
}

// Custom field values for an owner (array response)
export interface CustomFieldValuesResponse extends CustomFieldValue {}

// Individual custom field value response (for single field operations)
export interface CustomFieldValueResponse {
  value?: string | string[]; // Can be single value or array for multiselect
}

// Create/Update custom field value request
export interface UpdateCustomFieldValueRequest {
  value?: string | string[]; // Single value or array for multiselect
}

// Custom Fields endpoint interface
export interface CustomFieldsEndpoint {
  // Get custom field definitions for an owner type
  getDefinitions: (ownerType: OwnerType) => Promise<CustomFieldDefinitionListItem[]>;

  // Get all custom field values for an owner
  getValues: (ownerType: OwnerType, ownerId: string) => Promise<CustomFieldValuesResponse[]>;

  // CRUD operations for individual custom field values
  getValue: (ownerType: OwnerType, ownerId: string, customFieldId: string) => Promise<CustomFieldValueResponse>;
  updateValue: (ownerType: OwnerType, ownerId: string, customFieldId: string, value: UpdateCustomFieldValueRequest) => Promise<CustomFieldValueResponse>;
  deleteValue: (ownerType: OwnerType, ownerId: string, customFieldId: string) => Promise<void>;
}

/**
 * Creates the custom fields endpoint functions
 * @param client - The ofetch client instance
 * @returns Object with custom fields endpoint methods
 */
export function createCustomFieldsEndpoint(client: $Fetch): CustomFieldsEndpoint {
  return {
    // Get custom field definitions for an owner type
    getDefinitions: (ownerType: OwnerType) => {
      return client<CustomFieldDefinitionListItem[]>(`/${ownerType}/customfields`);
    },

    // Get all custom field values for an owner
    getValues: (ownerType: OwnerType, ownerId: string) => {
      return client<CustomFieldValuesResponse[]>(`/${ownerType}/${ownerId}/customfields`);
    },

    // CRUD operations for individual custom field values
    getValue: (ownerType: OwnerType, ownerId: string, customFieldId: string) => {
      return client<CustomFieldValueResponse>(`/${ownerType}/${ownerId}/customfield/${customFieldId}`);
    },

    updateValue: (ownerType: OwnerType, ownerId: string, customFieldId: string, value: UpdateCustomFieldValueRequest) => {
      return client<CustomFieldValueResponse>(`/${ownerType}/${ownerId}/customfield/${customFieldId}`, {
        method: 'POST',
        body: value,
      });
    },

    deleteValue: (ownerType: OwnerType, ownerId: string, customFieldId: string) => {
      return client<void>(`/${ownerType}/${ownerId}/customfield/${customFieldId}`, {
        method: 'DELETE',
      });
    },
  };
}
