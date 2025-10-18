import type { $Fetch } from 'ofetch';

// Lookup reference
export interface LookupValueRef {
  id: string;
  description?: string;
}

// Minimal Show detail interface based on docs
export interface ShowDetail {
  id: string;
  article?: string | null;
  audience?: LookupValueRef | null;
  geoSettings?: Array<{
    id?: string;
    countries?: string[];
    endDate?: string | null;
    geoAccessType?: LookupValueRef & {
      key?: string;
      translations?: Array<{
        abbreviation?: string | null;
        language: string;
        text: string;
      }>;
    };
    startDate?: string | null;
  }>;
  hasAudienceVoting?: boolean;
  isLocked?: boolean;
  isOfficialSelection?: boolean;
  isPremiere?: boolean;
  keepPartsInSyncWithComposition?: boolean;
  keepTitleInSync?: boolean;
  location?: LookupValueRef | null;
  noSale?: boolean;
  notes?: string | null;
  programSchedule?: LookupValueRef | null;
  publish?: boolean;
  sections?: LookupValueRef[];
  sourceComposition?: LookupValueRef | null;
  startOn: string;
  tags?: unknown[];
  technicalRemarks?: string | null;
  ticketSaleId?: string | null;
  title: string;
  type?: LookupValueRef | null;
  useShowSpecificGeoSettings?: boolean;
  internalLeadInMinutes?: number;
  internalLeadOutMinutes?: number;
  internalLengthInMinutes?: number;
  lengthInMinutes?: number;
  fullLengthInMinutes?: number;
  fullTitle?: string;
  sortedTitle?: string;
  createdBy?: LookupValueRef | null;
  createdOn?: string;
  updatedBy?: LookupValueRef | null;
  updatedOn?: string;
}

// Create/Update Show request
export interface UpsertShowRequest {
  article?: string | null;
  audience?: { id: string } | null;
  location: { id: string };
  programSchedule: { id: string };
  startOn: string;
  title: string;
  type?: { id: string } | null;
}

// Show Part interfaces
export interface ShowPart {
  id: string;
  activity?: { id: string; description?: string } | null;
  alternativeLocation?: string | null;
  film?: { id: string; description?: string } | null;
  filmScreeningCopy?: { id: string; description?: string } | null;
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
  filmScreeningCopy?: { id: string; description?: string } | null;
  isInternal?: boolean;
  isPremiere?: boolean;
  lengthInMinutes?: number;
  showInPublications?: boolean;
  showInTitle?: boolean;
  sortOrder?: number;
  technicalRemarks?: string | null;
  title?: string;
}

// Contributor roles for a show
export interface ContributorRole {
  fullName: string;
  externalIdentification: string;
  role: {
    key: string;
    translations: Array<{
      abbreviation?: string | null;
      language: string;
      text: string;
    }>;
  };
}

// Appointment roles for a show part
export interface AppointmentRole {
  key: string;
  translations: Array<{
    abbreviation?: string | null;
    language: string;
    text: string;
  }>;
}

// Attendees for a show part
export interface Attendee {
  fullName: string;
  externalIdentification: string;
  role: {
    key: string;
    translations: Array<{
      abbreviation?: string | null;
      language: string;
      text: string;
    }>;
  };
}

// Shows endpoint interface
export interface ShowsEndpoint {
  // Show CRUD
  create: (payload: UpsertShowRequest) => Promise<ShowDetail>;
  getById: (showId: string) => Promise<ShowDetail>;
  update: (showId: string, payload: UpsertShowRequest) => Promise<ShowDetail>;
  delete: (showId: string) => Promise<void>;

  // Show parts
  getShowParts: (showId: string) => Promise<ShowPart[]>;
  addShowPart: (showId: string, payload: UpsertShowPartRequest) => Promise<ShowDetail>;
  getShowPartById: (showId: string, showPartId: string) => Promise<ShowPart>;
  updateShowPart: (showId: string, showPartId: string, payload: UpsertShowPartRequest) => Promise<ShowPart>;
  deleteShowPart: (showId: string, showPartId: string) => Promise<void>;

  // Related account info
  getContributorRolesForShow: (providerName: string, showId: string) => Promise<ContributorRole[]>;
  getAttendeesForShowPart: (providerName: string, showPartId: string) => Promise<Attendee[]>;
  getAppointmentRolesForShowPart: (providerName: string, showPartId: string) => Promise<AppointmentRole[]>;
}

/**
 * Creates the shows endpoint functions
 * @param client - The ofetch client instance
 * @returns Object with shows endpoint methods
 */
export function createShowsEndpoint(client: $Fetch): ShowsEndpoint {
  return {
    // Show CRUD
    /**
     * Create a new show
     * @param payload - Show creation data including title, location, schedule, etc.
     * @returns Promise resolving to the created show details
     */
    create: (payload: UpsertShowRequest) => {
      return client<ShowDetail>('/show', {
        method: 'POST',
        body: payload,
      });
    },

    /**
     * Get show details by ID
     * @param showId - The unique identifier of the show
     * @returns Promise resolving to show details including parts and metadata
     */
    getById: (showId: string) => {
      return client<ShowDetail>(`/show/${showId}`);
    },

    /**
     * Update an existing show
     * @param showId - The unique identifier of the show to update
     * @param payload - Updated show data (complete object required)
     * @returns Promise resolving to updated show details
     */
    update: (showId: string, payload: UpsertShowRequest) => {
      return client<ShowDetail>(`/show/${showId}`, {
        method: 'POST',
        body: payload,
      });
    },

    /**
     * Delete a show
     * @param showId - The unique identifier of the show to delete
     * @returns Promise resolving when deletion is complete
     */
    delete: (showId: string) => {
      return client<void>(`/show/${showId}`, {
        method: 'DELETE',
      });
    },

    // Show parts
    /**
     * Get all show parts for a specific show
     * @param showId - The unique identifier of the show
     * @returns Promise resolving to array of show parts (films or activities)
     */
    getShowParts: (showId: string) => {
      return client<ShowPart[]>(`/show/${showId}/showparts`);
    },

    /**
     * Add a new show part (film or activity) to a show
     * @param showId - The unique identifier of the show
     * @param payload - Show part data including film/activity details and timing
     * @returns Promise resolving to updated show details
     */
    addShowPart: (showId: string, payload: UpsertShowPartRequest) => {
      return client<ShowDetail>(`/show/${showId}/showpart`, {
        method: 'POST',
        body: payload,
      });
    },

    /**
     * Get a specific show part by ID
     * @param showId - The unique identifier of the show
     * @param showPartId - The unique identifier of the show part
     * @returns Promise resolving to show part details
     */
    getShowPartById: (showId: string, showPartId: string) => {
      return client<ShowPart>(`/show/${showId}/showpart/${showPartId}`);
    },

    /**
     * Update a specific show part
     * @param showId - The unique identifier of the show
     * @param showPartId - The unique identifier of the show part to update
     * @param payload - Updated show part data (complete object required)
     * @returns Promise resolving to updated show part details
     */
    updateShowPart: (showId: string, showPartId: string, payload: UpsertShowPartRequest) => {
      return client<ShowPart>(`/show/${showId}/showpart/${showPartId}`, {
        method: 'POST',
        body: payload,
      });
    },

    /**
     * Delete a show part from a show
     * @param showId - The unique identifier of the show
     * @param showPartId - The unique identifier of the show part to delete
     * @returns Promise resolving when deletion is complete
     */
    deleteShowPart: (showId: string, showPartId: string) => {
      return client<void>(`/show/${showId}/showpart/${showPartId}`, {
        method: 'DELETE',
      });
    },

    // Related account info
    /**
     * Get all contributor roles for a show (for a specific account)
     * @param providerName - The name of the authentication provider
     * @param showId - The unique identifier of the show
     * @returns Promise resolving to array of contributor roles for the account
     */
    getContributorRolesForShow: (providerName: string, showId: string) => {
      return client<ContributorRole[]>(`/account/${providerName}/show/${showId}/contributorroles`);
    },

    /**
     * Get all attendees for a specific show part (for a specific account)
     * @param providerName - The name of the authentication provider
     * @param showPartId - The unique identifier of the show part
     * @returns Promise resolving to array of attendees for the account
     */
    getAttendeesForShowPart: (providerName: string, showPartId: string) => {
      return client<Attendee[]>(`/account/${providerName}/showpart/${showPartId}/attendees`);
    },

    /**
     * Get all appointment roles for a specific show part (for a specific account)
     * @param providerName - The name of the authentication provider
     * @param showPartId - The unique identifier of the show part
     * @returns Promise resolving to array of appointment roles for the account
     */
    getAppointmentRolesForShowPart: (providerName: string, showPartId: string) => {
      return client<AppointmentRole[]>(`/account/${providerName}/showpart/${showPartId}/appointmentroles`);
    },
  };
}
