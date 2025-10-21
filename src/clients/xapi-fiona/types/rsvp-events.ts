import type { IdDescription } from "./shared";

export interface RsvpEventAttendee {
  person: IdDescription;
  targetGroup: IdDescription;
}

export interface RsvpEvent {
  id: string;
  createdOn: string;
  updatedOn: string;
  name: string;
  displayName?: string | null;
  date: string;
  startsOn: string;
  endsOn: string;
  numberedSeats: boolean;
  automaticTransferOfInvitees: boolean;
  contactDetailsVerificationEnabled: boolean;
  opensOn: string;
  closesOn: string;
  allowAnonymousFormSubmissions: boolean;
  location: IdDescription;
  schedule: IdDescription;
  people: RsvpEventAttendee[];
  createdBy: IdDescription;
  updatedBy: IdDescription;
}
