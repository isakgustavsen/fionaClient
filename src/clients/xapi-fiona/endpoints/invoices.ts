import type { $Fetch } from "ofetch";

import type { InvoiceDetail, InvoiceLine } from "../types/invoices";

export type OwnerType = "film" | "show" | "company" | "person" | "guestbook" | "volunteer" | "other";

// Invoices endpoint interface
export interface InvoicesEndpoint {
  // Get all invoice lines for an owner
  getInvoiceLines: (
    ownerType: OwnerType,
    ownerId: string,
  ) => Promise<InvoiceLine[]>;

  // Get specific invoice line details
  getInvoiceLineById: (
    ownerType: OwnerType,
    ownerId: string,
    invoiceLineId: string,
  ) => Promise<InvoiceLine>;

  // Get complete invoice details
  getInvoiceById: (invoiceId: string) => Promise<InvoiceDetail>;
}

/**
 * Creates the invoices endpoint functions
 * @param client - The ofetch client instance
 * @returns Object with invoices endpoint methods
 */
export function createInvoicesEndpoint(client: $Fetch): InvoicesEndpoint {
  return {
    // Get all invoice lines for an owner
    getInvoiceLines: async (ownerType: OwnerType, ownerId: string) =>
      await client<InvoiceLine[]>(`/${ownerType}/${ownerId}/invoicelines`),

    // Get specific invoice line details
    getInvoiceLineById: async (
      ownerType: OwnerType,
      ownerId: string,
      invoiceLineId: string,
    ) =>
      await client<InvoiceLine>(
        `/${ownerType}/${ownerId}/invoiceline/${invoiceLineId}`,
      ),

    // Get complete invoice details
    getInvoiceById: async (invoiceId: string) =>
      await client<InvoiceDetail>(`/invoice/${invoiceId}`),
  };
}
