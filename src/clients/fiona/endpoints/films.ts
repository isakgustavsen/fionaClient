import type { $Fetch } from 'ofetch';

export interface FilmListItem {
  id: string;
  fullPreferredTitle: string;
  isAlternativeContent: boolean;
  sortedTitle: string;
}

export interface Director {
  id: string;
  name: string;
}

export interface Image {
  [key: string]: unknown; // Based on API response structure
}

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

export interface Video {
  [key: string]: unknown; // Based on API response structure
}

export interface FilmWithText extends FilmListItem {
  countriesOfProduction: Array<{
    key: string;
    translations: Array<{
      abbreviation?: string;
      language: string;
      text: string;
    }>;
  }>;
  directors: Director[];
  fullInternationalTitle?: string | null;
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

export interface Financier {
  id: string;
  name: string;
  contribution: number;
}

export interface ScreeningCopy {
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
    isElectronicSubtitlesApplied: boolean;
  }>;
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

export interface Film extends FilmWithText {
  documentVersion?: string | null;
  publishedOn?: string;
  alternativeContentType?: {
    key: string;
    translations: Array<{
      abbreviation: string;
      language: string;
      text: string;
    }>;
  };
  awards: Array<{
    [key: string]: unknown;
  }>;
  category?: {
    key: string;
    translations: Array<{
      abbreviation: string;
      language: string;
      text: string;
    }>;
  };
  colour?: {
    key: string;
    translations: Array<{
      abbreviation: string;
      language: string;
      text: string;
    }>;
  };
  completed: boolean;
  compositions: Composition[];
  contactPerson?: {
    id: string;
    company?: {
      id: string;
      description: string;
    };
    fullName: string;
    person?: {
      id: string;
      description: string;
    };
    role: {
      key: string;
      translations: Array<{
        abbreviation: string;
        language: string;
        text: string;
      }>;
    };
  };
  countriesLookingForPartner: Array<{
    key: string;
    translations: Array<{
      abbreviation?: string;
      language: string;
      text: string;
    }>;
  }>;
  countriesSold: Array<{
    key: string;
    translations: Array<{
      abbreviation?: string;
      language: string;
      text: string;
    }>;
  }>;
  credits: Credit[];
  customFieldValues: Array<{
    [key: string]: unknown;
  }>;
  customFieldOptions: Array<{
    [key: string]: unknown;
  }>;
  editionId: string;
  favoriteImageAttachmentId?: string;
  favoritePreviewAttachmentId?: string;
  filmRatings: Array<{
    key: string;
    translations: Array<{
      abbreviation: string;
      language: string;
      text: string;
    }>;
  }>;
  financiers: Financier[];
  financingInPlace?: number;
  firstScreenedAt?: string;
  firstScreenedOn?: string;
  format?: {
    key: string;
    translations: Array<{
      abbreviation: string;
      language: string;
      text: string;
    }>;
  };
  genre?: {
    key: string;
    translations: Array<{
      abbreviation: string;
      language: string;
      text: string;
    }>;
  };
  genres: Array<{
    key: string;
    translations: Array<{
      abbreviation: string;
      language: string;
      text: string;
    }>;
  }>;
  imdbId?: string;
  internationalArticle?: string;
  internationalTitle?: string;
  lengthAdditionalSeconds: number;
  linkedFilms: Array<{
    id: string;
    edition?: {
      id: string;
      description: string;
    };
    fullTitle: string;
  }>;
  monthOfProduction: number;
  noDialogue: boolean;
  numberOfEpisodes: number;
  originalArticle?: string;
  originalTitle?: string;
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
  publications: Array<{
    [key: string]: unknown;
  }>;
  requestedFinancing?: number;
  screeningCopies: ScreeningCopy[];
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
  shootingLocations: Array<{
    [key: string]: unknown;
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
  totalBudget?: number;
}

export interface FilmsEndpoint {
  getAllByEdition: (editionId: string) => Promise<FilmListItem[]>;
  getAllByEditionWithText: (editionId: string, textKey: string) => Promise<FilmWithText[]>;
  getAllByEditionSection: (editionSectionId: string) => Promise<FilmListItem[]>;
  getAllByEditionSectionWithText: (editionSectionId: string, textKey: string) => Promise<FilmWithText[]>;
  getById: (filmId: string) => Promise<Film>;
}

/**
 * Creates the films endpoint functions
 * @param client - The ofetch client instance
 * @returns Object with films endpoint methods
 */
export function createFilmsEndpoint(client: $Fetch): FilmsEndpoint {
  return {
    getAllByEdition: (editionId: string) => {
      return client<FilmListItem[]>(`/editions/${editionId}/films`);
    },
    getAllByEditionWithText: (editionId: string, textKey: string) => {
      return client<FilmWithText[]>(`/editions/${editionId}/films/text?key=${textKey}`);
    },
    getAllByEditionSection: (editionSectionId: string) => {
      return client<FilmListItem[]>(`/editionsections/${editionSectionId}/films`);
    },
    getAllByEditionSectionWithText: (editionSectionId: string, textKey: string) => {
      return client<FilmWithText[]>(`/editionsections/${editionSectionId}/films/text?key=${textKey}`);
    },
    getById: (filmId: string) => {
      return client<Film>(`/films/${filmId}`);
    },
  };
}

