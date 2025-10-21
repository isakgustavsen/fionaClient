import type { IdDescription } from "./shared";

// Basic types for list responses
export interface AccreditationListItem {
  id: string;
  description: string;
  createdOn: string;
  updatedOn: string;
}

// ExternalAccount interface removed as unused

// Favorite Image Attachment
interface FavoriteImageAttachment {
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
interface FilmWithRecommendation {
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

export interface Badge {
  id: string;
  guestbookBadge: IdDescription;
  status: IdDescription;
  productVariant: IdDescription;
  code?: string;
  voucherCode?: string;
  feeType?: string | null;
  edition?: string | null;
  badgeType?: string | null;
}

export interface CreateBadgeBody {
  guestbookBadge: { id: string };
  code?: string;
}

export interface Expense {
  id: string;
  amount: number;
  costCenter: IdDescription;
  description: string;
  festivalAmount: number;
  guestAmount: number;
  expenseType: IdDescription;
}

export interface StayExpense {
  id: string;
  amount: number;
  amountFestival: number;
  amountGuest: number;
  costCenter: IdDescription;
  date: string;
  paidBy?: string | null;
}

export interface Stay {
  id: string;
  amountCorrection: number;
  bookingStatus: IdDescription;
  breakfastType: IdDescription;
  noShow: boolean;
  dateFrom: string;
  dateUntil: string;
  remarks?: string;
  room: IdDescription;
  accreditations: Array<{
    id: string;
    description: string;
  }>;
  expenses: StayExpense[];
  roomUseType: IdDescription;
}

export interface Travel {
  id: string;
  amount: number;
  amountFestival: number;
  amountGuest: number;
  costCenter: IdDescription;
  costRemarks?: string;
  flightNumber?: string;
  generalRemarks?: string;
  hasCheckedLuggage: boolean;
  location?: IdDescription;
  transferType?: IdDescription;
  transportMode?: IdDescription;
  travelDate: string;
  travelType: IdDescription;
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
  costCenter: IdDescription;
  departureFlightNumber?: string | null;
  departureOn?: string | null;
  employerCompany: IdDescription;
  externalAccountId?: string | null;
  favoriteImageAttachment?: FavoriteImageAttachment;
  films: FilmWithRecommendation[];
  guestbook: IdDescription;
  inCompanyProfile: boolean;
  interpreterLanguage: IdDescription;
  invitedBy: IdDescription;
  nameOnBadge?: string;
  noPublicationOfContactDetails: boolean;
  notes?: string | null;
  numberOfNights: number;
  person: IdDescription;
  professionOnBadge?: string | null;
  status: IdDescription;
  statusRemarks?: string | null;
  transportMode: IdDescription;
  travelRemarks?: string | null;
  type?: string | null;
  createdBy: IdDescription;
  updatedBy: IdDescription;
}

// Request/Response types for creating/updating
export interface CreateAccreditationRequest
  extends Omit<
    Accreditation,
    "id" | "createdOn" | "updatedOn" | "createdBy" | "updatedBy"
  > {}
export interface UpdateAccreditationRequest extends Accreditation {}
