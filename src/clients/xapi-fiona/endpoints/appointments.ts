import type { $Fetch } from 'ofetch';

// Basic types for references
export interface AppointmentType {
  id?: string;
  key?: string;
  description?: string;
  translations?: Array<{
    abbreviation: string;
    language: string;
    text: string;
  }>;
}

// Location reference
export interface Location {
  id: string;
  description: string;
}

// Guestbook reference
export interface Guestbook {
  id: string;
  description: string;
}

// Participant information
export interface Participant {
  id: string;
  personFullName: string;
  externalIdentification?: string | null;
}

// Base Appointment interface
export interface Appointment {
  id: string;
  appointmentType: AppointmentType;
  subject: string;
  startsOn: string;
  endsOn: string;
  isOnline: boolean;
  location?: Location;
  participants: Participant[];
}

// Guestbook Appointments endpoint response
export interface GuestbookAppointmentsResponse extends Appointment {
  guestbook?: Guestbook;
}

// Account Appointments response with additional context
export interface AccountAppointmentsResponse {
  accreditation?: {
    id: string;
    description: string;
  };
  accreditationStatus?: {
    key: string;
    translations: Array<{
      abbreviation: string;
      language: string;
      text: string;
    }>;
  };
  willAttendFestival: boolean;
  willAttendFromDifferentLocation: boolean;
  willAttendFestivalFromTimeZone?: string;
  appointments: Appointment[];
}

// Query parameters for filtering appointments
export interface AppointmentQueryParams {
  isOnline?: boolean;
  appointmentTypeKey?: string;
  appointmentTypeId?: string;
}

// Appointments endpoint interface
export interface AppointmentsEndpoint {
  // Get appointments by guestbook
  getByGuestbook: (guestbookId: string, params?: AppointmentQueryParams) => Promise<GuestbookAppointmentsResponse[]>;

  // Get appointments for a specific account
  getByAccount: (providerName: string, externalIdentificationId: string, guestbookId: string) => Promise<AccountAppointmentsResponse>;
}

/**
 * Creates the appointments endpoint functions
 * @param client - The ofetch client instance
 * @returns Object with appointments endpoint methods
 */
export function createAppointmentsEndpoint(client: $Fetch): AppointmentsEndpoint {
  return {
    getByGuestbook: (guestbookId: string, params?: AppointmentQueryParams) => {
      const queryParts: string[] = [];

      if (params?.isOnline !== undefined) {
        queryParts.push(`isOnline=${params.isOnline}`);
      }

      if (params?.appointmentTypeKey) {
        queryParts.push(`appointmentTypeKey=${encodeURIComponent(params.appointmentTypeKey)}`);
      }

      if (params?.appointmentTypeId) {
        queryParts.push(`appointmentTypeId=${params.appointmentTypeId}`);
      }

      const queryString = queryParts.length > 0 ? `?${queryParts.join('&')}` : '';
      const url = `/guestbook/${guestbookId}/appointments${queryString}`;

      return client<GuestbookAppointmentsResponse[]>(url);
    },

    getByAccount: (providerName: string, externalIdentificationId: string, guestbookId: string) => {
      return client<AccountAppointmentsResponse>(`/account/${providerName}/${externalIdentificationId}/guestbook/${guestbookId}/appointments`);
    },
  };
}
