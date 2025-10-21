import type { Address, IdDescription, TranslationArray } from "./shared";

export interface AccountGroup extends IdDescription {}

export interface ContactDetail {
  id: string;
  subType: TranslationArray;
  type: TranslationArray;
  value: string;
}

interface Company {
  id: string;
  name: string;
  role: TranslationArray;
}

interface Person {
  address: Address;
  appliedCustomFieldOptions: Array<{
    customField: string;
    option: string;
    sortOrder: number;
  }>;
  appliedCustomFieldValues: Array<{
    customField: string;
    value: string | number | boolean;
  }>;
  companies: Company[];
  contactDetails: ContactDetail[];
  firstName: string;
  id: string;
  lastName: string;
  prefix?: string;
  profession: TranslationArray;
}

export interface AccountDetails {
  accountGroups: IdDescription[];
  person: Person;
}

export interface VolunteerInfo {
  assignedPosition: IdDescription;
  badge: IdDescription;
  extras: IdDescription[];
  hasDriversLicence: boolean;
  id: string;
  isWillingToWorkMore: boolean;
  languages: IdDescription[];
  person: IdDescription;
  remarks?: string | null;
  status: IdDescription;
  volunteerEdition: IdDescription;
  dietType?: IdDescription | null;
  driversLicenseType?: IdDescription | null;
  shirtSize?: IdDescription | null;
  favoriteImageAttachment?: {
    category: number;
    contentType?: string | null;
    createdOn: string;
    id: string;
    originalFileName: string;
    password?: string | null;
    serialNumber: number;
    title: string;
    type: IdDescription;
    value: string;
  } | null;
  createdBy: IdDescription;
  createdOn: string;
  updatedBy: IdDescription;
  updatedOn: string;
}
