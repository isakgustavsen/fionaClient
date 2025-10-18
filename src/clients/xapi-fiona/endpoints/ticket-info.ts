import type { $Fetch } from 'ofetch';

// Ticket update request interface
export interface UpdateShowTicketRequest {
  id: string;
  ticketSaleId: string;
}

// Ticket Info endpoint interface
export interface TicketInfoEndpoint {
  // Update ticket ID for show
  updateShowTicket: (request: UpdateShowTicketRequest) => Promise<UpdateShowTicketRequest>;
}

/**
 * Creates the ticket info endpoint functions
 * @param client - The ofetch client instance
 * @returns Object with ticket info endpoint methods
 */
export function createTicketInfoEndpoint(client: $Fetch): TicketInfoEndpoint {
  return {
    // Update ticket ID for show
    updateShowTicket: (request: UpdateShowTicketRequest) => {
      return client<UpdateShowTicketRequest>('/showticket', {
        method: 'POST',
        body: request,
      });
    },
  };
}
