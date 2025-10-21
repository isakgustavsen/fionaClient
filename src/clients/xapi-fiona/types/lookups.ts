import type { Translation } from "./shared";

export interface LookupValue {
  id: string;
  groupId?: string | null;
  indexNumber: number;
  isActive: boolean;
  key: string;
  translations: Translation[];
}

export interface LookupWithValues {
  id: string;
  defaultLookupValueId?: string;
  isCustomizable: boolean;
  lookupValues: LookupValue[];
}
