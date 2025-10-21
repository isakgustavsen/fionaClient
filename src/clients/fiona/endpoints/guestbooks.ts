import type { $Fetch } from "ofetch";
import type { IdDescription } from "../../xapi-fiona/types/shared";

// Step 1: Define basic types
export interface GuestbookListItem {
  id: string;
  name: string;
}

// Step 2: Define detailed types
export interface GuestbookBadge {
  id: string;
  description: string;
}

export interface GuestbookEdition {
  id: string;
  description: string;
}

export interface Guestbook {
  id: string;
  documentVersion?: string | null;
  publishedOn?: string;
  badges: GuestbookBadge[];
  editions: GuestbookEdition[];
  endsOn: string;
  isActive: boolean;
  name: string;
  startsOn: string;
}

// Step 3: Define accreditation types
export interface AccreditationPerson {
  id: string;
  fullName: string;
  sortedFullName: string;
}

export interface AccreditationCompany {
  id: string;
  description: string;
}

export interface AccreditationListItem {
  id: string;
  company?: AccreditationCompany;
  person: AccreditationPerson;
}

// Step 4: Define detailed accreditation types (very complex)
export interface AccreditationAppointment {
  id: string;
  appointmentType: {
    key: string;
    translations: Array<{
      abbreviation: string;
      language: string;
      text: string;
    }>;
  };
  endsOn: string;
  filmId?: string | null;
  isOnline: boolean;
  location?: string | null;
  members: Array<{
    id: string;
    accreditationId: string;
    personFullName: string;
    personId: string;
    role: {
      key: string;
      translations: Array<{
        abbreviation: string;
        language: string;
        text: string;
      }>;
    };
  }>;
  publicationNotes?: string | null;
  showId?: string | null;
  startsOn: string;
  subject: string;
  table?: string | null;
}

export interface AccreditationBadge {
  id: string;
  badgeType?: string | null;
  code: string;
  edition?: string | null;
  feeType?: {
    key: string;
    translations: Array<{
      abbreviation: string;
      language: string;
      text: string;
    }>;
  };
  guestbookBadge: {
    id: string;
    description: string;
  };
  status: {
    key: string;
    translations: Array<{
      abbreviation: string;
      language: string;
      text: string;
    }>;
  };
}

export interface AccreditationPersonDetail {
  id: string;
  address?: {
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
    latitude?: string | null;
    longitude?: string | null;
    postalCode: string;
    state?: string | null;
  };
  contactDetails: Array<{
    id: string;
    subType: {
      key: string;
      translations: Array<{
        abbreviation: string;
        language: string;
        text: string;
      }>;
    };
    type: {
      key: string;
      translations: Array<{
        abbreviation: string;
        language: string;
        text: string;
      }>;
    };
    value: string;
  }>;
  externalAccountId?: string | null;
  favoriteImageAttachmentId?: string | null;
  firstName: string;
  fullName: string;
  lastName: string;
  mailingLanguage: string;
  prefix?: string | null;
  profession?: {
    key: string;
    translations: Array<{
      abbreviation: string;
      language: string;
      text: string;
    }>;
  };
  publications: Array<Record<string, unknown>>;
  sortedFullName: string;
  texts: Array<Record<string, unknown>>;
}

export interface AccreditationFilm {
  id: string;
  edition: {
    id: string;
    description: string;
  };
  film: {
    id: string;
    description: string;
  };
  fullPreferredTitle: string;
  roles: Array<{
    key: string;
    translations: Array<{
      abbreviation: string;
      language: string;
      text: string;
    }>;
  }>;
  sortedTitle: string;
}

export interface AccreditationMeetingProgram {
  hideForMeetingRequests: boolean;
  meetingProgram: {
    id: string;
    description: string;
    schedule: {
      id: string;
      description: string;
    };
  };
  role: {
    key: string;
    translations: Array<{
      abbreviation: string;
      language: string;
      text: string;
    }>;
  };
}

export interface AccreditationBadgeListItem {
  id: string;
  accreditation: {
    id: string;
    description: string;
  };
  guestbook: {
    id: string;
    description: string;
  };
  guestbookBadge: {
    id: string;
    description: string;
  };
}

export interface AccreditationBadgeOnId {
  id: string;
  documentVersion?: string | null;
  publishedOn?: string;
  accreditation: {
    id: string;
    description: string;
  };
  code: string;
  guestbook: {
    id: string;
    description: string;
  };
  guestbookBadge: {
    id: string;
    description: string;
  };
  productVariant: {
    id: string;
    product: {
      id: string;
      description: string;
    };
    description: string;
    amount: number;
    feeType: {
      key: string;
      translations: Array<{
        abbreviation: string;
        language: string;
        text: string;
      }>;
    };
  };
  status: {
    key: string;
    translations: Array<{
      abbreviation: string;
      language: string;
      text: string;
    }>;
  };
  voucherCode?: string;
}

export interface CompanyProfileListItem {
  id: string;
  company: {
    description: string;
  };
}

export interface CompanyProfile {
  id: string;
  documentVersion?: string | null;
  publishedOn?: string;
  attendees: Array<{
    id: string;
    description: string;
  }>;
  company: {
    id: string;
    description: string;
  };
  companyFocus: Array<{
    key: string;
    translations: Array<{
      abbreviation: string;
      language: string;
      text: string;
    }>;
  }>;
  guestbook: {
    id: string;
    description: string;
  };
  mainTerritories: Array<{
    key: string;
    translations: Array<{
      abbreviation?: string;
      language: string;
      text: string;
    }>;
  }>;
  mainWorkingSector: {
    key: string;
    translations: Array<{
      abbreviation: string;
      language: string;
      text: string;
    }>;
  };
  otherWorkingSectors: Array<{
    key: string;
    translations: Array<{
      abbreviation: string;
      language: string;
      text: string;
    }>;
  }>;
  texts: Array<Record<string, unknown>>;
}

export interface Accreditation {
  id: string;
  documentVersion?: number;
  publishedOn?: string;
  accomodation?: string | null;
  accomodationEndsOn?: string | null;
  accomodationRemarks?: string | null;
  accomodationStartsOn?: string | null;
  appointments: AccreditationAppointment[];
  arrivalOn?: string;
  badges: AccreditationBadge[];
  company?: IdDescription;
  companyOnBadge?: string;
  companyWithRole?: {
    id: string;
    companyId: string;
    department?: string | null;
    isPreferredCompany: boolean;
    name: string;
    role: {
      key: string;
      translations: Array<{
        abbreviation: string;
        language: string;
        text: string;
      }>;
    };
  };
  customFieldOptions: Array<Record<string, unknown>>;
  customFieldValues: Array<{
    key: string;
    value: string | number | boolean | null;
  }>;
  departureOn?: string;
  favoriteImageAttachmentId?: string;
  films: AccreditationFilm[];
  guestbook: {
    id: string;
    description: string;
  };
  image?: {
    contentType?: string | null;
    copyright?: string | null;
    height: number;
    value: string;
    width: number;
  };
  meetingProgramParticipations: AccreditationMeetingProgram[];
  nameOnBadge?: string;
  noPublicationOfContactDetails: boolean;
  person: AccreditationPersonDetail;
  professionOnBadge?: string | null;
  publications: Array<Record<string, unknown>>;
  qrCodeOnBadge?: string;
  status: {
    key: string;
    translations: Array<{
      abbreviation: string;
      language: string;
      text: string;
    }>;
  };
  texts: Array<Record<string, unknown>>;
  type?: {
    key: string;
    translations: Array<{
      abbreviation: string;
      language: string;
      text: string;
    }>;
  };
  willAttendFestival: boolean;
  willAttendFestivalFromTimeZone?: string | null;
  willAttendFromDifferentLocation: boolean;
}

// Step 5: Define the endpoint interface
export interface GuestbooksEndpoint {
  getAll: () => Promise<GuestbookListItem[]>;
  getById: (guestbookId: string) => Promise<Guestbook>;
  getAccreditationsByGuestbook: (
    guestbookId: string,
  ) => Promise<AccreditationListItem[]>;
  getAccreditationById: (accreditationId: string) => Promise<Accreditation>;
  getAccreditationBadgesByGuestbook: (
    guestbookId: string,
  ) => Promise<AccreditationBadgeListItem[]>;
  getAccreditationBadgeById: (
    accreditationBadgeId: string,
  ) => Promise<AccreditationBadgeOnId>;
  getCompanyProfilesByGuestbook: (
    guestbookId: string,
  ) => Promise<CompanyProfileListItem[]>;
  getCompanyProfileById: (companyProfileId: string) => Promise<CompanyProfile>;
}

// Step 6: Implement the functions
export function createGuestbooksEndpoint(client: $Fetch): GuestbooksEndpoint {
  return {
    getAll: async () => await client<GuestbookListItem[]>("/guestbooks"),
    getById: async (guestbookId: string) =>
      await client<Guestbook>(`/guestbooks/${guestbookId}`),
    getAccreditationsByGuestbook: async (guestbookId: string) =>
      await client<AccreditationListItem[]>(
        `/guestbooks/${guestbookId}/accreditations`,
      ),
    getAccreditationById: async (accreditationId: string) =>
      await client<Accreditation>(`/accreditations/${accreditationId}`),
    getAccreditationBadgesByGuestbook: async (guestbookId: string) =>
      await client<AccreditationBadgeListItem[]>(
        `/guestbooks/${guestbookId}/accreditationbadges`,
      ),
    getAccreditationBadgeById: async (accreditationBadgeId: string) =>
      await client<AccreditationBadgeOnId>(
        `/accreditationbadges/${accreditationBadgeId}`,
      ),
    getCompanyProfilesByGuestbook: async (guestbookId: string) =>
      await client<CompanyProfileListItem[]>(
        `/guestbooks/${guestbookId}/companyprofiles`,
      ),
    getCompanyProfileById: async (companyProfileId: string) =>
      await client<CompanyProfile>(`/companyprofiles/${companyProfileId}`),
  };
}
