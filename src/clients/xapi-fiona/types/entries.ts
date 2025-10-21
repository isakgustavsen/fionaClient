import type { IdDescription } from "./shared";

interface FormTranslation {
  description?: string | null;
  key: string;
  language: string;
  title: string;
}

interface Form {
  id: string;
  endsOn: string;
  startsOn: string;
  translations: FormTranslation[];
}

export interface Entry {
  id: string;
  endsOn: string;
  entity: IdDescription;
  form: Form;
  fullTitle: string;
  invoiceId?: string | null;
  invoiceNumber?: string | null;
  invoiceStatus?: string | null;
  invoiceUri?: string | null;
  sortedTitle: string;
  submittedOn: string;
}
