import type { IdDescription, TranslationArray } from "./shared";

export interface Guestbook {
  id: string;
  createdOn: string;
  updatedOn: string;
  description: string;
  accreditationProfiles: IdDescription[];
  editions: IdDescription[];
  badges: IdDescription[];
  endsOn: string;
  isActive: boolean;
  name: string;
  startsOn: string;
}

export interface MeetingProgramParticipationsResponse {
  accreditation: IdDescription;
  accreditationStatus: TranslationArray;
  availabilityFormsClosesOn: string;
  availabilityFormsOpensOn: string;
  schedules: Array<{
    id: string;
    meetingPrograms: Array<{
      id: string;
      meetingRequestFormsClosesOn: string;
      meetingRequestFormsOpensOn: string;
      name: string;
    }>;
    name: string;
  }>;
}

export interface CreateMeetingRequestRequest {
  id?: string;
  sortOrder: number;
  sourceMeetingProgramParticipationId: string;
  targetMeetingProgramParticipationId: string;
}
