import type { IdDescription } from "./shared";
import type { Attachment } from "./attachments";

export interface VolunteerEdition {
  id: string;
  endsOn: string;
  isActive: boolean;
  name: string;
  startsOn: string;
}

export interface Volunteer {
  id: string;
  assignedPosition: IdDescription;
  badge: IdDescription;
  extras: IdDescription[];
  hasDriversLicence: boolean;
  isWillingToWorkMore: boolean;
  languages: IdDescription[];
  person: IdDescription;
  remarks?: string | null;
  status: IdDescription;
  volunteerEdition: IdDescription;
  dietType?: IdDescription | null;
  driversLicenseType?: IdDescription | null;
  shirtSize?: IdDescription | null;
  favoriteImageAttachment?: Attachment | null;
  createdBy: IdDescription;
  createdOn: string;
  updatedBy: IdDescription;
  updatedOn: string;
}
