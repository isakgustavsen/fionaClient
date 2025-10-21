import type { IdDescription } from "./shared";

export type OwnerType = "film";

export interface PublicationPrivilege {
  id: string;
  account?: IdDescription | null;
  accountGroup?: IdDescription | null;
  endDate?: string | null;
  publicationPrivilege: IdDescription;
  startDate?: string | null;
}
