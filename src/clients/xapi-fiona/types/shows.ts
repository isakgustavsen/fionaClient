import type { IdDescription, TranslationArray } from "./shared";

export interface ShowDetail {
  id: string;
  article?: string | null;
  audience?: IdDescription | null;
  geoSettings?: Array<{
    id?: string;
    countries?: string[];
    endDate?: string | null;
    geoAccessType?: IdDescription & {
      key?: string;
      translations?: TranslationArray["translations"];
    };
    startDate?: string | null;
  }>;
  hasAudienceVoting?: boolean;
  isLocked?: boolean;
  isOfficialSelection?: boolean;
  isPremiere?: boolean;
  keepPartsInSyncWithComposition?: boolean;
  keepTitleInSync?: boolean;
  location?: IdDescription | null;
  noSale?: boolean;
  notes?: string | null;
  programSchedule?: IdDescription | null;
  publish?: boolean;
  sections?: IdDescription[];
  sourceComposition?: IdDescription | null;
  startOn: string;
  //this array will always be empty, but the type is required
  tags?: [];
  technicalRemarks?: string | null;
  ticketSaleId?: string | null;
  title: string;
  type?: IdDescription | null;
  useShowSpecificGeoSettings?: boolean;
  internalLeadInMinutes?: number;
  internalLeadOutMinutes?: number;
  internalLengthInMinutes?: number;
  lengthInMinutes?: number;
  fullLengthInMinutes?: number;
  fullTitle?: string;
  sortedTitle?: string;
  createdBy?: IdDescription | null;
  createdOn?: string;
  updatedBy?: IdDescription | null;
  updatedOn?: string;
}

export interface UpsertShowRequest {
  article?: string | null;
  audience?: { id: string } | null;
  location: { id: string };
  programSchedule: { id: string };
  startOn: string;
  title: string;
  type?: { id: string } | null;
}

export interface ShowPart {
  id: string;
  activity?: IdDescription | null;
  alternativeLocation?: string | null;
  film?: IdDescription | null;
  filmScreeningCopy?: IdDescription | null;
  isInternal?: boolean;
  isPremiere?: boolean;
  isViewingMandatory?: boolean;
  lengthInMinutes?: number;
  productionDetails?: string | null;
  rtmpUrl?: string | null;
  showInPublications?: boolean;
  showInTitle?: boolean;
  sortOrder?: number;
  technicalRemarks?: string | null;
  title?: string;
}

export interface UpsertShowPartRequest {
  activity?: { id: string } | null;
  alternativeLocation?: string | null;
  film?: { id: string } | null;
  filmScreeningCopy?: IdDescription | null;
  isInternal?: boolean;
  isPremiere?: boolean;
  lengthInMinutes?: number;
  showInPublications?: boolean;
  showInTitle?: boolean;
  sortOrder?: number;
  technicalRemarks?: string | null;
  title?: string;
}

export interface Role {
  fullName: string;
  externalIdentification: string;
  role: TranslationArray;
}

export interface Attendee {
  fullName: string;
  externalIdentification: string;
  role: TranslationArray;
}
