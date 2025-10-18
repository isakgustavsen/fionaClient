import type { $Fetch } from 'ofetch';

// Basic types for list responses
export interface AccreditationListItem {
  id: string;
  description: string;
  createdOn: string;
  updatedOn: string;
}

// Cost Center reference
export interface CostCenter {
  id: string;
  description: string;
}

// Company reference
export interface Company {
  id: string;
  description: string;
}

// Person reference
export interface Person {
  id: string;
  description: string;
}

// External Account reference
export interface ExternalAccount {
  id: string;
}

// Favorite Image Attachment
export interface FavoriteImageAttachment {
  id: string;
  category: number;
  contentType?: string;
  createdOn: string;
  originalFileName: string;
  password?: string;
  serialNumber: number;
  title: string;
  type: {
    id: string;
    description: string;
  };
  value: string;
}

// Film reference with recommendation
export interface FilmWithRecommendation {
  id: string;
  description: string;
  finalRecommendation: {
    key: string;
    translations: Array<{
      abbreviation: string;
      language: string;
      text: string;
    }>;
  };
}

// Guestbook reference
export interface Guestbook {
  id: string;
  description: string;
}

// Status reference
export interface Status {
  id: string;
  description: string;
}

// Transport Mode reference
export interface TransportMode {
  id: string;
  description: string;
}

// Interpreter Language reference
export interface InterpreterLanguage {
  id: string;
  description: string;
}

// User reference (CreatedBy/UpdatedBy)
export interface User {
  id: string;
  description: string;
}

// Badge related interfaces
export interface GuestbookBadge {
  id: string;
  description: string;
}

export interface ProductVariant {
  id: string;
  description: string;
}

export interface Badge {
  id: string;
  guestbookBadge: GuestbookBadge;
  status: Status;
  productVariant: ProductVariant;
  code?: string;
  voucherCode?: string;
  feeType?: string | null;
  edition?: string | null;
  badgeType?: string | null;
}

// Expense related interfaces
export interface ExpenseType {
  id: string;
  description: string;
}

export interface Expense {
  id: string;
  amount: number;
  costCenter: CostCenter;
  description: string;
  festivalAmount: number;
  guestAmount: number;
  expenseType: ExpenseType;
}

// Stay related interfaces
export interface BookingStatus {
  id: string;
  description: string;
}

export interface BreakfastType {
  id: string;
  description: string;
}

export interface Room {
  id: string;
  description: string;
}

export interface RoomUseType {
  id: string;
  description: string;
}

export interface StayExpense {
  id: string;
  amount: number;
  amountFestival: number;
  amountGuest: number;
  costCenter: CostCenter;
  date: string;
  paidBy?: string | null;
}

export interface Stay {
  id: string;
  amountCorrection: number;
  bookingStatus: BookingStatus;
  breakfastType: BreakfastType;
  noShow: boolean;
  dateFrom: string;
  dateUntil: string;
  remarks?: string;
  room: Room;
  accreditations: Array<{
    id: string;
    description: string;
  }>;
  expenses: StayExpense[];
  roomUseType: RoomUseType;
}

// Travel related interfaces
export interface Location {
  id: string;
  description: string;
}

export interface TransferType {
  id: string;
  description: string;
}

export interface TravelType {
  id: string;
  description: string;
}

export interface Travel {
  id: string;
  amount: number;
  amountFestival: number;
  amountGuest: number;
  costCenter: CostCenter;
  costRemarks?: string;
  flightNumber?: string;
  generalRemarks?: string;
  hasCheckedLuggage: boolean;
  location?: Location;
  transferType?: TransferType;
  transportMode?: TransportMode;
  travelDate: string;
  travelType: TravelType;
}

// Full Accreditation interface (extends basic with all detailed fields)
export interface Accreditation extends AccreditationListItem {
  accommodation?: string | null;
  accommodationEndsOn?: string | null;
  accommodationRemarks?: string | null;
  accommodationStartsOn?: string | null;
  arrivalFlightNumber?: string | null;
  arrivalOn?: string | null;
  availabilityEndsOn?: string | null;
  availabilityStartsOn?: string | null;
  companyOnBadge?: string;
  costCenter: CostCenter;
  departureFlightNumber?: string | null;
  departureOn?: string | null;
  employerCompany: Company;
  externalAccountId?: string | null;
  favoriteImageAttachment?: FavoriteImageAttachment;
  films: FilmWithRecommendation[];
  guestbook: Guestbook;
  inCompanyProfile: boolean;
  interpreterLanguage: InterpreterLanguage;
  invitedBy: Person;
  nameOnBadge?: string;
  noPublicationOfContactDetails: boolean;
  notes?: string | null;
  numberOfNights: number;
  person: Person;
  professionOnBadge?: string | null;
  status: Status;
  statusRemarks?: string | null;
  transportMode: TransportMode;
  travelRemarks?: string | null;
  type?: string | null;
  createdBy: User;
  updatedBy: User;
}

// Request/Response types for creating/updating
export interface CreateAccreditationRequest extends Omit<Accreditation, 'id' | 'createdOn' | 'updatedOn' | 'createdBy' | 'updatedBy'> {}
export interface UpdateAccreditationRequest extends Accreditation {}

// Badge creation request
export interface CreateBadgeRequest {
  guestbookBadge: {
    id: string;
  };
  code?: string;
}

// Badge update request
export interface UpdateBadgeRequest extends Badge {}

// Accreditations endpoint interface
export interface AccreditationsEndpoint {
  // Accreditation CRUD operations
  getAllByGuestbook: (guestbookId: string) => Promise<AccreditationListItem[]>;
  create: (accreditation: CreateAccreditationRequest) => Promise<Accreditation>;
  getById: (accreditationId: string) => Promise<Accreditation>;
  updateById: (accreditationId: string, accreditation: UpdateAccreditationRequest) => Promise<Accreditation>;
  deleteById: (accreditationId: string) => Promise<void>;
  setExternalIdentification: (accreditationId: string, providerName: string, externalIdentification: string) => Promise<void>;

  // Badge operations
  getBadgesByAccreditation: (accreditationId: string) => Promise<Badge[]>;
  getBadgesByExternalAccount: (providerName: string, externalIdentificationId: string, guestbookId: string) => Promise<Badge[]>;
  getBadgeById: (accreditationId: string, badgeId: string) => Promise<Badge>;
  updateBadgeById: (accreditationId: string, badgeId: string, badge: UpdateBadgeRequest) => Promise<Badge>;
  deleteBadgeById: (accreditationId: string, badgeId: string) => Promise<void>;
  createBadge: (accreditationId: string, badge: CreateBadgeRequest) => Promise<Badge>;

  // Expense operations
  getExpensesByAccreditation: (accreditationId: string) => Promise<Expense[]>;
  getExpenseById: (accreditationId: string, expenseId: string) => Promise<Expense>;

  // Stay operations
  getStaysByAccreditation: (accreditationId: string) => Promise<Stay[]>;
  getStayById: (accreditationId: string, stayId: string) => Promise<Stay>;

  // Travel operations
  getTravelsByAccreditation: (accreditationId: string) => Promise<Travel[]>;
  getTravelById: (accreditationId: string, travelId: string) => Promise<Travel>;
}

/**
 * Creates the accreditations endpoint functions
 * @param client - The ofetch client instance
 * @returns Object with accreditations endpoint methods
 */
export function createAccreditationsEndpoint(client: $Fetch): AccreditationsEndpoint {
  return {
    // Accreditation CRUD operations
    getAllByGuestbook: (guestbookId: string) => {
      return client<AccreditationListItem[]>(`/guestbook/${guestbookId}/accreditations`);
    },

    create: (accreditation: CreateAccreditationRequest) => {
      return client<Accreditation>('/accreditation', {
        method: 'POST',
        body: accreditation,
      });
    },

    getById: (accreditationId: string) => {
      return client<Accreditation>(`/accreditation/${accreditationId}`);
    },

    updateById: (accreditationId: string, accreditation: UpdateAccreditationRequest) => {
      return client<Accreditation>(`/accreditation/${accreditationId}`, {
        method: 'POST',
        body: accreditation,
      });
    },

    deleteById: (accreditationId: string) => {
      return client<void>(`/accreditation/${accreditationId}`, {
        method: 'DELETE',
      });
    },

    setExternalIdentification: (accreditationId: string, providerName: string, externalIdentification: string) => {
      return client<void>(`/accreditation/${accreditationId}/${providerName}/externalIdentification/${externalIdentification}`, {
        method: 'POST',
      });
    },

    // Badge operations
    getBadgesByAccreditation: (accreditationId: string) => {
      return client<Badge[]>(`/accreditation/${accreditationId}/badges`);
    },

    getBadgesByExternalAccount: (providerName: string, externalIdentificationId: string, guestbookId: string) => {
      return client<Badge[]>(`/account/${providerName}/${externalIdentificationId}/guestbook/${guestbookId}/badges`);
    },

    getBadgeById: (accreditationId: string, badgeId: string) => {
      return client<Badge>(`/accreditation/${accreditationId}/badge/${badgeId}`);
    },

    updateBadgeById: (accreditationId: string, badgeId: string, badge: UpdateBadgeRequest) => {
      return client<Badge>(`/accreditation/${accreditationId}/badge/${badgeId}`, {
        method: 'POST',
        body: badge,
      });
    },

    deleteBadgeById: (accreditationId: string, badgeId: string) => {
      return client<void>(`/accreditation/${accreditationId}/badge/${badgeId}`, {
        method: 'DELETE',
      });
    },

    createBadge: (accreditationId: string, badge: CreateBadgeRequest) => {
      return client<Badge>(`/accreditation/${accreditationId}/badge`, {
        method: 'POST',
        body: badge,
      });
    },

    // Expense operations
    getExpensesByAccreditation: (accreditationId: string) => {
      return client<Expense[]>(`/accreditation/${accreditationId}/expenses`);
    },

    getExpenseById: (accreditationId: string, expenseId: string) => {
      return client<Expense>(`/accreditation/${accreditationId}/expense/${expenseId}`);
    },

    // Stay operations
    getStaysByAccreditation: (accreditationId: string) => {
      return client<Stay[]>(`/accreditation/${accreditationId}/stays`);
    },

    getStayById: (accreditationId: string, stayId: string) => {
      return client<Stay>(`/accreditation/${accreditationId}/stay/${stayId}`);
    },

    // Travel operations
    getTravelsByAccreditation: (accreditationId: string) => {
      return client<Travel[]>(`/accreditation/${accreditationId}/travels`);
    },

    getTravelById: (accreditationId: string, travelId: string) => {
      return client<Travel>(`/accreditation/${accreditationId}/travel/${travelId}`);
    },
  };
}
