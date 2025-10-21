import type { $Fetch } from "ofetch";
import type { IdDescription } from "../../xapi-fiona/types/shared";

export interface ScheduleType {
  key: string;
  translations: Array<{
    abbreviation: string;
    language: string;
    text: string;
  }>;
}

export interface ScheduleLocation {
  id: string;
  abbreviation: string;
  description: string;
  isOnline: boolean;
}

export interface ScheduleEdition {
  id: string;
  description: string;
}

export interface Schedule {
  id: string;
  documentVersion?: string | null;
  publishedOn?: string;
  endPlanning: string;
  name: string;
  startPlanning: string;
  type: ScheduleType;
}

export interface DetailedSchedule extends Schedule {
  edition: ScheduleEdition;
  locations: ScheduleLocation[];
}

export interface ShowLocation {
  id: string;
  abbreviation: string;
  description: string;
  isOnline: boolean;
}

export interface Show {
  id: string;
  fullTitle: string;
  location: ShowLocation;
  sortedTitle: string;
  startOn: string;
}

export interface ShowPartAttendee {
  id: string;
  description: string;
  role: {
    key: string;
    translations: Array<{
      abbreviation: string;
      language: string;
      text: string;
    }>;
  };
  filmCredits: Array<{
    film: {
      id: string;
      description: string;
    };
    credits: Array<{
      id: string;
      role: {
        key: string;
        translations: Array<{
          abbreviation: string;
          language: string;
          text: string;
        }>;
      };
    }>;
  }>;
}

export interface ShowPartFilm {
  id: string;
  description: string;
  isAlternativeContent: boolean;
}

export interface ShowPartActivity {
  id: string;
  lengthInMinutes: number;
  type: {
    key: string;
    translations: Array<{
      abbreviation: string;
      language: string;
      text: string;
    }>;
  };
}

export interface ShowPartPerformance {
  id: string;
  description: string;
}

export interface ShowPartFilmScreeningCopy {
  id: string;
  electronicSubtitleLanguages: Array<{
    key: string;
    translations: Array<{
      abbreviation: string;
      language: string;
      text: string;
    }>;
  }>;
  format: {
    key: string;
    translations: Array<{
      abbreviation: string;
      language: string;
      text: string;
    }>;
  };
  geoSettings: Array<{
    id: string;
    countries: string[];
    endDate: string;
    geoAccessType: {
      key: string;
      translations: Array<{
        abbreviation: string;
        language: string;
        text: string;
      }>;
    };
    startDate: string;
  }>;
  isElectronicSubtitlesApplied: boolean;
  subtitleLanguage?: {
    key: string;
    translations: Array<{
      abbreviation: string;
      language: string;
      text: string;
    }>;
  };
  subtitleLanguages: Array<{
    key: string;
    translations: Array<{
      abbreviation: string;
      language: string;
      text: string;
    }>;
  }>;
  subtitlingType: {
    key: string;
    translations: Array<{
      abbreviation: string;
      language: string;
      text: string;
    }>;
  };
  description: string;
  viewingUrl?: string;
}

export interface ShowPart {
  id: string;
  activity?: ShowPartActivity;
  alternateLocation?: string;
  attendees: ShowPartAttendee[];
  film?: ShowPartFilm;
  filmScreeningCopy?: ShowPartFilmScreeningCopy;
  format?: {
    key: string;
    translations: Array<{
      abbreviation: string;
      language: string;
      text: string;
    }>;
  };
  isMainFilm: boolean;
  isPremiere: boolean;
  isViewingMandatory: boolean;
  lengthInMinutes: number;
  performance?: ShowPartPerformance;
  rtmpUrl?: string;
  showInPublications: boolean;
  sortOrder: number;
  subtitleLanguage?: {
    key: string;
    translations: Array<{
      abbreviation: string;
      language: string;
      text: string;
    }>;
  };
  subtitleLanguages: Array<{
    key: string;
    translations: Array<{
      abbreviation: string;
      language: string;
      text: string;
    }>;
  }>;
  title: string;
}

export interface OnlineMeetingRoom {
  id: string;
  name: Array<{
    id: string;
    language: string;
    name: string;
  }>;
  token?: string;
  isActive: boolean;
  capacity: number;
}

export interface ShowSection {
  id: string;
  section?: {
    key: string;
    translations: Array<{
      abbreviation: string;
      language: string;
      text: string;
    }>;
  };
  name: string;
}

export interface DetailedShow extends Show {
  documentVersion?: string | null;
  publishedOn?: string;
  accessControl: boolean;
  audience?: {
    key: string;
    translations: Array<{
      abbreviation: string;
      language: string;
      text: string;
    }>;
  };
  capacity?: number;
  customFieldValues: Array<Record<string, unknown>>;
  customFieldOptions: Array<Record<string, unknown>>;
  edition: IdDescription;
  endOn: string;
  filmRatings: Array<{
    key: string;
    translations: Array<{
      abbreviation: string;
      language: string;
      text: string;
    }>;
  }>;
  geoSettings: Array<{
    id: string;
    countries: string[];
    endDate: string;
    geoAccessType: {
      key: string;
      translations: Array<{
        abbreviation: string;
        language: string;
        text: string;
      }>;
    };
    startDate: string;
  }>;
  hasAudienceVoting: boolean;
  image?: Record<string, unknown>;
  isOfficialSelection: boolean;
  isPremiere: boolean;
  isVideoOnDemand: boolean;
  lengthInMinuties: number;
  noSale: boolean;
  notes?: string;
  onlineMeetingRooms: OnlineMeetingRoom[];
  parentShow?: string;
  publicationContextShowPart?: string;
  publicationContextType: number;
  publications: Array<Record<string, unknown>>;
  publish: boolean;
  reservedSeatsForAccreditedGuests: number;
  schedule: IdDescription;
  section?: IdDescription;
  sections: ShowSection[];
  showParts: ShowPart[];
  showPartsAll: ShowPart[];
  sortedTitle: string;
  sourceComposition?: IdDescription;
  startOn: string;
  texts: Array<Record<string, unknown>>;
  ticketDeskNotes?: string;
  ticketSaleId?: string;
  type: {
    key: string;
    translations: Array<{
      abbreviation: string;
      language: string;
      text: string;
    }>;
  };
  useShowSpecificGeoSettings: boolean;
  validFrom?: string;
  validUntil?: string;
}

export interface SchedulesEndpoint {
  getAllByEdition: (editionId: string) => Promise<Schedule[]>;
  getAllByEditionAndType: (
    editionId: string,
    typeId: string,
  ) => Promise<Schedule[]>;
  getById: (scheduleId: string) => Promise<DetailedSchedule>;
  getShowsBySchedule: (scheduleId: string) => Promise<Show[]>;
  getShowsByScheduleAndDate: (
    scheduleId: string,
    year: number,
    month: number,
    day: number,
  ) => Promise<Show[]>;
  getShowsByEdition: (editionId: string) => Promise<Show[]>;
  getShowById: (showId: string) => Promise<DetailedShow>;
  getShowByIdWithAllParts: (showId: string) => Promise<DetailedShow>;
}

/**
 * Creates the schedules endpoint functions
 * @param client - The ofetch client instance
 * @returns Object with schedules endpoint methods
 */
export function createSchedulesEndpoint(client: $Fetch): SchedulesEndpoint {
  return {
    getAllByEdition: async (editionId: string) =>
      await client<Schedule[]>(`/editions/${editionId}/schedules`),
    getAllByEditionAndType: async (editionId: string, typeId: string) =>
      await client<Schedule[]>(`/editions/${editionId}/schedules/${typeId}`),
    getById: async (scheduleId: string) =>
      await client<DetailedSchedule>(`/schedules/${scheduleId}`),
    getShowsBySchedule: async (scheduleId: string) =>
      await client<Show[]>(`/schedules/${scheduleId}/shows`),
    getShowsByScheduleAndDate: async (
      scheduleId: string,
      year: number,
      month: number,
      day: number,
    ) =>
      await client<Show[]>(
        `/schedules/${scheduleId}/shows/${year}/${month}/${day}`,
      ),
    getShowsByEdition: async (editionId: string) =>
      await client<Show[]>(`/editions/${editionId}/shows`),
    getShowById: async (showId: string) =>
      await client<DetailedShow>(`/shows/${showId}`),
    getShowByIdWithAllParts: async (showId: string) =>
      await client<DetailedShow>(`/shows/${showId}?all-showparts=true`),
  };
}
