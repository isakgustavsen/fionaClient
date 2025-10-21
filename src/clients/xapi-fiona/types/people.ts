import type { IdDescription } from "./shared";

interface Address {
  address1: string;
  address2?: string | null;
  city?: string | null;
  country?: IdDescription | null;
  postalCode?: string | null;
  state?: string | null;
}

export interface CompanyPerson {
  id: string;
  company: IdDescription;
  department?: string | null;
  role: IdDescription;
}

export interface Person {
  id: string;
  address: Address;
  dateOfBirth?: string | null;
  firstName: string;
  lastName: string;
  mailingLanguage: string;
  mailToCompanyPerson?: IdDescription | null;
  nationality?: IdDescription | null;
  noCorrespondence: boolean;
  noCorrespondenceReason?: string | null;
  prefix?: string;
  profession?: IdDescription | null;
  pronouns?: IdDescription[];
  salutation?: IdDescription | null;
  tags: unknown[];
  title?: IdDescription | null;
}

export interface CommunicationItem {
  id: string;
  companyPerson?: IdDescription | null;
  isDefault: boolean;
  notes?: string;
  sortOrder: number;
  subType: IdDescription;
  type: IdDescription;
  value: string;
}

export interface CommunicationItemRequest
  extends Omit<CommunicationItem, "id"> {}

export interface CreatePersonRequest extends Omit<Person, "id" | "tags"> {
  tags?: unknown[];
}
