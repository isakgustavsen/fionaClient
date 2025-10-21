import type { $Fetch } from "ofetch";
import type {
  AccountAppointmentsResponse,
  AppointmentQueryParams,
  GuestbookAppointmentsResponse,
} from "../types/appointments";

// Appointments endpoint interface
export interface AppointmentsEndpoint {
  // Get appointments by guestbook
  getByGuestbook: (
    guestbookId: string,
    params?: AppointmentQueryParams,
  ) => Promise<GuestbookAppointmentsResponse[]>;

  // Get appointments for a specific account
  getByAccount: (
    providerName: string,
    externalIdentificationId: string,
    guestbookId: string,
  ) => Promise<AccountAppointmentsResponse>;
}

/**
 * Creates the appointments endpoint functions
 * @param client - The ofetch client instance
 * @returns Object with appointments endpoint methods
 */
export function createAppointmentsEndpoint(
  client: $Fetch,
): AppointmentsEndpoint {
  return {
    getByGuestbook: async (
      guestbookId: string,
      params?: AppointmentQueryParams,
    ) => {
      const queryParts: string[] = [];
      const EMPTY_LENGTH = 0;

      if (params?.isOnline !== undefined) {
        queryParts.push(`isOnline=${params.isOnline}`);
      }

      if (
        typeof params?.appointmentTypeKey === "string" &&
        params.appointmentTypeKey.length > EMPTY_LENGTH
      ) {
        queryParts.push(
          `appointmentTypeKey=${encodeURIComponent(params.appointmentTypeKey)}`,
        );
      }

      if (
        typeof params?.appointmentTypeId === "string" &&
        params.appointmentTypeId.length > EMPTY_LENGTH
      ) {
        queryParts.push(`appointmentTypeId=${params.appointmentTypeId}`);
      }

      const hasParts = queryParts.length !== EMPTY_LENGTH;
      const queryString = hasParts ? `?${queryParts.join("&")}` : "";
      const url = `/guestbook/${guestbookId}/appointments${queryString}`;

      return await client<GuestbookAppointmentsResponse[]>(url);
    },

    getByAccount: async (
      providerName: string,
      externalIdentificationId: string,
      guestbookId: string,
    ) =>
      await client<AccountAppointmentsResponse>(
        `/account/${providerName}/${externalIdentificationId}/guestbook/${guestbookId}/appointments`,
      ),
  };
}
