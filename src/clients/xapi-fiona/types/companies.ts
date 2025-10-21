import type { Address, IdDescription } from "./shared";

export interface Company {
  id: string;
  address: Address;
  mailingLanguage: string;
  name: string;
  tags: unknown[];
  vatNumber?: string | null;
  yearOfFoundation: number;
}

export interface CompanyCommunicationItem {
  id: string;
  company: IdDescription;
  isDefault: boolean;
  notes?: string;
  sortOrder: number;
  subType: IdDescription;
  type: IdDescription;
  value: string; // Phone number, email address or online address
}
