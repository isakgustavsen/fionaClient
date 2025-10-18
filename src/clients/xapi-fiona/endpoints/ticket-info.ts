import type { $Fetch } from 'ofetch';

// Base Ticket Info interface
export interface TicketInfo {
  id: string;
  description: string;
}

// Ticket Info endpoint interface
export interface TicketInfoEndpoint {
  // Get all ticket info (placeholder - no specific endpoint found in docs)
  getAll: () => Promise<TicketInfo[]>;
}

/**
 * Creates the ticket info endpoint functions
 * @param client - The ofetch client instance
 * @returns Object with ticket info endpoint methods
 */
export function createTicketInfoEndpoint(client: $Fetch): TicketInfoEndpoint {
  return {
    // Get all ticket info (placeholder - no specific endpoint found in docs)
    getAll: () => {
      return client<TicketInfo[]>('/ticketinfo');
    },
  };
}
