import type { IdDescription } from "./shared";

export interface Invoice {
  id: string;
  isFulfilled: boolean;
  isRefunded: boolean;
  orderNumberString: string;
  invoiceNumberString?: string | null;
}

export interface InvoiceLine {
  id: string;
  alwaysChargeVat: boolean;
  amount: number;
  discountPercentage: number;
  quantity: number;
  description: string;
  productVariant: IdDescription;
  discount: number;
  vatPercentage: number;
  invoice: Invoice;
}

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
  invoiceLines: IdDescription[];
}
