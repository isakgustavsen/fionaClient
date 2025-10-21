import type { IdDescription, TranslationArray } from "./shared";

export interface AppointmentType {
  id?: string;
  key?: string;
  description?: string;
  translations?: TranslationArray["translations"];
}

export interface Participant {
  id: string;
  personFullName: string;
  externalIdentification?: string | null;
}

export interface Appointment {
  id: string;
  appointmentType: AppointmentType;
  subject: string;
  startsOn: string;
  endsOn: string;
  isOnline: boolean;
  location?: IdDescription;
  participants: Participant[];
}

export interface GuestbookAppointmentsResponse extends Appointment {
  guestbook?: IdDescription;
}

export interface AccountAppointmentsResponse {
  accreditation?: IdDescription;
  accreditationStatus?: TranslationArray;
  willAttendFestival: boolean;
  willAttendFromDifferentLocation: boolean;
  willAttendFestivalFromTimeZone?: string;
  appointments: Appointment[];
}

export interface AppointmentQueryParams {
  isOnline?: boolean;
  appointmentTypeKey?: string;
  appointmentTypeId?: string;
}
