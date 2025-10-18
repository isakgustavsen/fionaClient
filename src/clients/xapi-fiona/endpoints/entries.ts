import type { $Fetch } from 'ofetch';

// Entity reference (can be film or accreditation)
export interface Entity {
  id: string;
  description: string;
}

// Form translations
export interface FormTranslation {
  description?: string | null;
  key: string;
  language: string;
  title: string;
}

// Form reference
export interface Form {
  id: string;
  endsOn: string;
  startsOn: string;
  translations: FormTranslation[];
}

// Entry interface
export interface Entry {
  id: string;
  endsOn: string;
  entity: Entity;
  form: Form;
  fullTitle: string;
  invoiceId?: string | null;
  invoiceNumber?: string | null;
  invoiceStatus?: string | null;
  invoiceUri?: string | null;
  sortedTitle: string;
  submittedOn: string;
}

// Entries endpoint interface
export interface EntriesEndpoint {
  // Get all entries for an account
  getAllByAccount: (providerName: string, externalIdentification: string) => Promise<Entry[]>;
}

/**
 * Creates the entries endpoint functions
 * @param client - The ofetch client instance
 * @returns Object with entries endpoint methods
 */
export function createEntriesEndpoint(client: $Fetch): EntriesEndpoint {
  return {
    // Get all entries for an account
    getAllByAccount: (providerName: string, externalIdentification: string) => {
      return client<Entry[]>(`/entries/${providerName}/${externalIdentification}`);
    },
  };
}
