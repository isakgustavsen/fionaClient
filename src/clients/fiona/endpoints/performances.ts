import type { $Fetch } from "ofetch";

export interface PerformanceListItem {
  id: string;
  fullPreferredTitle: string;
  sortedTitle: string;
}

export interface Director {
  id: string;
  name: string;
}

export type Image = Record<string, unknown>;

export interface TextItem {
  id: string;
  html: Array<{
    html: string;
    language: {
      key: string;
      translations: Array<{
        abbreviation: string;
        language: string;
        text: string;
      }>;
    };
  }>;
  translations: Array<{
    html: string;
    language: string;
  }>;
  type: {
    key: string;
    translations: Array<{
      abbreviation: string;
      language: string;
      text: string;
    }>;
  };
}

export type Video = Record<string, unknown>;

export interface PerformanceWithText extends PerformanceListItem {
  countriesOfProduction: Array<{
    key: string;
    translations: Array<{
      abbreviation?: string;
      language: string;
      text: string;
    }>;
  }>;
  directors: Director[];
  fullInternationalTitle?: string;
  fullOriginalTitle: string;
  image?: Image;
  lengthInMinutes: number;
  texts: TextItem[];
  useOriginalTitle: boolean;
  video?: Video | null;
  yearOfProduction: number;
}

export interface Composition {
  id: string;
  fullTitle: string;
  section?: {
    id: string;
    description: string;
  };
  sortedTitle: string;
  type: {
    key: string;
    translations: Array<{
      abbreviation: string;
      language: string;
      text: string;
    }>;
  };
}

export interface Credit {
  id: string;
  company?: {
    id: string;
    description: string;
    country?: {
      key: string;
      translations: Array<{
        abbreviation?: string;
        language: string;
        text: string;
      }>;
    };
  };
  fullName: string;
  person?: {
    id: string;
    description: string;
    contactDetails?: Array<{
      value: string;
      type: {
        key: string;
        translations: Array<{
          abbreviation: string;
          language: string;
          text: string;
        }>;
      };
      subType?: {
        key: string;
        translations: Array<{
          abbreviation: string;
          language: string;
          text: string;
        }>;
      };
    }>;
    country?: {
      key: string;
      translations: Array<{
        abbreviation?: string;
        language: string;
        text: string;
      }>;
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

export interface Tag {
  id: string;
  key: string;
  translations: Array<{
    id: string;
    language: string;
    name: string;
  }>;
  tagGroup: {
    id: string;
    key: string;
    translations: Array<{
      id: string;
      language: string;
      name: string;
    }>;
  };
}

export interface Performance extends PerformanceWithText {
  documentVersion?: string | null;
  publishedOn?: string;
  artistInternational?: string;
  artistInternationalPrefix?: string;
  artistLocal?: string;
  artistLocalPrefix?: string;
  awards: Array<Record<string, unknown>>;
  category?: {
    key: string;
    translations: Array<{
      abbreviation: string;
      language: string;
      text: string;
    }>;
  };
  compositions?: Composition[] | null;
  countriesOfProduction: Array<{
    key: string;
    translations: Array<{
      abbreviation?: string;
      language: string;
      text: string;
    }>;
  }>;
  credits: Credit[];
  customFieldValues: Array<Record<string, unknown>>;
  customFieldOptions: Array<Record<string, unknown>>;
  disabledRestrictions: Array<{
    key: string;
    translations: Array<{
      abbreviation: string;
      language: string;
      text: string;
    }>;
  }>;
  editionId: string;
  favoriteImageAttachmentId?: string;
  favoritePreviewAttachmentId?: string;
  firstScreenedAt?: string;
  firstScreenedOn?: string;
  genres: Array<{
    key: string;
    translations: Array<{
      abbreviation: string;
      language: string;
      text: string;
    }>;
  }>;
  internationalArticle?: string;
  internationalTitle?: string;
  linkedPerformances: Array<{
    id: string;
    edition?: {
      id: string;
      description: string;
    };
    fullTitle: string;
  }>;
  location?: {
    id: string;
    abbreviation: string;
    description: string;
    isOnline: boolean;
  };
  locationAudienceEffort?: string;
  locationLatitude?: string;
  locationLongitude?: string;
  locationPublicationRemarks?: string;
  locationType?: string;
  noDialogue: boolean;
  originalArticle?: string;
  originalTitle?: string;
  performanceLocationType?: {
    key: string;
    translations: Array<{
      abbreviation: string;
      language: string;
      text: string;
    }>;
  };
  premiere?: {
    key: string;
    translations: Array<{
      abbreviation: string;
      language: string;
      text: string;
    }>;
  };
  publicationPrivileges: Array<{
    id: string;
    name: string;
    privilege: {
      key: string;
      translations: Array<{
        abbreviation: string;
        language: string;
        text: string;
      }>;
    };
    startOn?: string;
    endOn?: string;
    externalAccountId?: string;
  }>;
  publications: Array<Record<string, unknown>>;
  sections: Array<{
    id: string;
    name: string;
    section?: {
      key: string;
      translations: Array<{
        abbreviation: string;
        language: string;
        text: string;
      }>;
    };
  }>;
  shows: Array<{
    id: string;
    description: string;
  }>;
  spokenLanguages: Array<{
    key: string;
    translations: Array<{
      abbreviation: string;
      language: string;
      text: string;
    }>;
    isoCode: string;
  }>;
  tags: Tag[];
}

export interface PerformancesEndpoint {
  getAllByEdition: (editionId: string) => Promise<PerformanceListItem[]>;
  getAllByEditionWithText: (
    editionId: string,
    textKey: string,
  ) => Promise<PerformanceWithText[]>;
  getAllByEditionSection: (
    editionSectionId: string,
  ) => Promise<PerformanceListItem[]>;
  getAllByEditionSectionWithText: (
    editionSectionId: string,
    textKey: string,
  ) => Promise<PerformanceWithText[]>;
  getById: (performanceId: string) => Promise<Performance>;
}

/**
 * Creates the performances endpoint functions
 * @param client - The ofetch client instance
 * @returns Object with performances endpoint methods
 */
export function createPerformancesEndpoint(
  client: $Fetch,
): PerformancesEndpoint {
  return {
    getAllByEdition: async (editionId: string) =>
      await client<PerformanceListItem[]>(
        `/editions/${editionId}/performances`,
      ),
    getAllByEditionWithText: async (editionId: string, textKey: string) =>
      await client<PerformanceWithText[]>(
        `/editions/${editionId}/performances/text?key=${textKey}`,
      ),
    getAllByEditionSection: async (editionSectionId: string) =>
      await client<PerformanceListItem[]>(
        `/editionsections/${editionSectionId}/performances`,
      ),
    getAllByEditionSectionWithText: async (
      editionSectionId: string,
      textKey: string,
    ) =>
      await client<PerformanceWithText[]>(
        `/editionsections/${editionSectionId}/performances/text?key=${textKey}`,
      ),
    getById: async (performanceId: string) =>
      await client<Performance>(`/performances/${performanceId}`),
  };
}
