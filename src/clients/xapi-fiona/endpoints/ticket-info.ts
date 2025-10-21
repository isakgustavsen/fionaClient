import type { $Fetch } from "ofetch";

import type { UpdateShowTicketRequest } from "../types/ticket-info";

// Ticket Info endpoint interface
export interface TicketInfoEndpoint {
  // Update ticket ID for show
  updateShowTicket: (
    request: UpdateShowTicketRequest,
  ) => Promise<UpdateShowTicketRequest>;
}

/**
 * Creates the ticket info endpoint functions
 * @param client - The ofetch client instance
 * @returns Object with ticket info endpoint methods
 */
export function createTicketInfoEndpoint(client: $Fetch): TicketInfoEndpoint {
  return {
    // Update ticket ID for show
    updateShowTicket: async (request: UpdateShowTicketRequest) =>
      await client<UpdateShowTicketRequest>("/showticket", {
        method: "POST",
        body: request,
      }),
  };
}
