import type { IdDescription } from "./shared";

interface CustomFieldOption {
  id: string;
  key: string;
  sortOrder: number;
  translations: Array<{
    label: string;
    language: string;
  }>;
}

export interface CustomFieldDefinition {
  id: string;
  key: string;
  editionType?: IdDescription;
  options: CustomFieldOption[];
  type: IdDescription;
}

export interface CustomFieldValue {
  customField: string;
  options?: string[] | null;
  value?: string | string[] | null;
}
