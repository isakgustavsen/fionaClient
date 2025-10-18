import type { $Fetch } from 'ofetch';

// Owner types for invoices
export type OwnerType = 'accreditation' | 'film';

// Product variant reference
export interface ProductVariant {
  id: string;
  description: string;
}

// Invoice reference
export interface Invoice {
  id: string;
  isFulfilled: boolean;
  isRefunded: boolean;
  orderNumberString: string;
  invoiceNumberString?: string | null;
}

// Base Invoice Line interface
export interface InvoiceLine {
  id: string;
  alwaysChargeVat: boolean;
  amount: number;
  discountPercentage: number;
  quantity: number;
  description: string;
  productVariant: ProductVariant;
  discount: number;
  vatPercentage: number;
  invoice: Invoice;
}

// List item version (for array responses)
export interface InvoiceLineListItem {
  id: string;
  alwaysChargeVat: boolean;
  amount: number;
  discountPercentage: number;
  quantity: number;
  description: string;
  productVariant: ProductVariant;
  discount: number;
  vatPercentage: number;
  invoice: Invoice;
}

// Complete Invoice interface
export interface InvoiceDetail {
  id: string;
  isFulfilled: boolean;
  isRefunded: boolean;
  createdOn: string;
  dueOn: string;
  fulfilledOn?: string | null;
  refundedOn?: string | null;
  droppedOn?: string | null;
  orderNumber: number;
  orderNumberString: string;
  invoiceNumberString?: string | null;
  summedAmountExcludingVat: number;
  summedAmountVat: number;
  summedAmountIncludingVat: number;
  invoiceLines: Array<{
    id: string;
    description: string;
  }>;
}

// Invoices endpoint interface
export interface InvoicesEndpoint {
  // Get all invoice lines for an owner
  getInvoiceLines: (ownerType: OwnerType, ownerId: string) => Promise<InvoiceLineListItem[]>;

  // Get specific invoice line details
  getInvoiceLineById: (ownerType: OwnerType, ownerId: string, invoiceLineId: string) => Promise<InvoiceLine>;

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
    getInvoiceLines: (ownerType: OwnerType, ownerId: string) => {
      return client<InvoiceLineListItem[]>(`/${ownerType}/${ownerId}/invoicelines`);
    },

    // Get specific invoice line details
    getInvoiceLineById: (ownerType: OwnerType, ownerId: string, invoiceLineId: string) => {
      return client<InvoiceLine>(`/${ownerType}/${ownerId}/invoiceline/${invoiceLineId}`);
    },

    // Get complete invoice details
    getInvoiceById: (invoiceId: string) => {
      return client<InvoiceDetail>(`/invoice/${invoiceId}`);
    },
  };
}
