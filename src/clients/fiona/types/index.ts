
interface CompanyPerson {
    id: string;
    fullName: string;
    personId: string;
    role: {
      key: string;
      translations: Array<{
        abbreviation: string;
        language: string;
        text: string;
      }>;
    };
    sortedFullName: string;
  }
  
  interface CompanyFilm {
    id: string;
    edition: {
      id: string;
      description: string;
    };
    film: {
      id: string;
      description: string;
    };
    fullTitle: string;
    role: {
      key: string;
      translations: Array<{
        abbreviation: string;
        language: string;
        text: string;
      }>;
    };
  }
  
  interface CompanyAddress {
    id: string;
    address1: string;
    address2?: string | null;
    city: string;
    country: {
      key: string;
      translations: Array<{
        abbreviation?: string;
        language: string;
        text: string;
      }>;
    };
    latitude: string;
    longitude: string;
    postalCode: string;
    state: string;
  }
  
  export interface Company {
    id: string;
    documentVersion?: string | null;
    publishedOn?: string;
    address?: CompanyAddress | null;
    awards: Array<Record<string, unknown>>;
    customFieldValues: Array<Record<string, unknown>>;
    customFieldOptions: Array<Record<string, unknown>>;
    email?: string | null;
    films: CompanyFilm[];
    name: string;
    persons: CompanyPerson[];
    phone?: string | null;
    publications: Array<Record<string, unknown>>;
    texts: Array<Record<string, unknown>>;
    website?: string | null;
  }