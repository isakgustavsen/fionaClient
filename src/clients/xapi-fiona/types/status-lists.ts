import type { IdDescription } from "./shared";

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

export interface AppliedStatusListValue {
  id: string;
  checkedBy: IdDescription;
  checkedOn: string;
  value: IdDescription;
}

export interface CreateAppliedStatusListValueRequest {
  checkedBy: { id: string };
  checkedOn: string;
  value: { id: string };
}
