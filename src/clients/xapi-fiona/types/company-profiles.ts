import type { IdDescription } from "./shared";

export interface CompanyProfile {
  id: string;
  createdOn: string;
  updatedOn: string;
  description: string;
  company: IdDescription;
  companyFocus: IdDescription[];
  guestbook: IdDescription;
  mainTerritories: IdDescription[];
  mainWorkingSector: IdDescription;
  otherWorkingSectors: IdDescription[];
}
