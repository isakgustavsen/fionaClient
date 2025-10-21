import type { IdDescription, ListItem } from "./shared";

export interface CreditContact {
  company?: IdDescription | null;
  person?: IdDescription | null;
  sourceType: number;
}

export interface Credit {
  id: string;
  contacts: CreditContact[];
  isContactPerson: boolean;
  publishContactDetails: boolean;
  role: IdDescription;
  selectedSourceType: number;
  sortOrder: number;
}

export interface CountryWithSortOrder {
  sortOrder: number;
  id: string;
  description: string;
}

export interface Film extends ListItem {
  appliedForFestivals: IdDescription[];
  archivedOn?: string | null;
  assignedTo?: IdDescription | null;
  category?: IdDescription | null;
  colour?: IdDescription | null;
  completed: boolean;
  countriesLookingForPartner: CountryWithSortOrder[];
  countriesOfProduction: CountryWithSortOrder[];
  countriesSold: CountryWithSortOrder[];
  edition?: IdDescription | null;
  eligibleFors: IdDescription[];
  filmRatings: IdDescription[];
  financingInPlace: number;
  finalRecommendation?: IdDescription | null;
  firstScreenedAt?: string | null;
  firstScreenedOn: string;
  format?: IdDescription | null;
  genre?: IdDescription | null;
  inEditionSequenceNumber: number;
  internationalArticle?: string | null;
  internationalTitle?: string | null;
  lengthAdditionalSeconds: number;
  lengthInMinutes: number;
  memo?: string | null;
  monthOfProduction: number;
  noDialogue: boolean;
  numberOfEpisodes: number;
  originalArticle?: string | null;
  originalTitle?: string | null;
  preliminaryRecommendation?: IdDescription | null;
  premiere?: IdDescription | null;
  priority?: IdDescription | null;
  requestedFinancing: number;
  round?: string;
  screenedOnFestivals: IdDescription[];
  screeningCopies: IdDescription[];
  sections: IdDescription[];
  selectionSequenceNumber: number;
  source: IdDescription;
  spokenLanguages: IdDescription[];
  statusLookup: IdDescription;
  tags: IdDescription[];
  totalBudget: number;
  useOriginalTitle: boolean;
  yearOfProduction: number;
  createdBy: IdDescription;
  updatedBy: IdDescription;
  fullInternationalTitle?: string | null;
  fullOriginalTitle?: string | null;
  fullPreferredTitle: string;
}

export interface CreateFilmRequest
  extends Omit<
    Film,
    | "id"
    | "createdOn"
    | "updatedOn"
    | "createdBy"
    | "updatedBy"
    | "fullInternationalTitle"
    | "fullOriginalTitle"
    | "fullPreferredTitle"
  > {}
