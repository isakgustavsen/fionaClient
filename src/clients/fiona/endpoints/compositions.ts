import type { $Fetch } from 'ofetch';

export interface CompositionListItem {
  id: string;
  fullTitle: string;
  sortedTitle: string;
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

export interface CompositionWithText extends CompositionListItem {
  image?: Image;
  section?: {
    id: string;
    description: string;
  };
  texts: TextItem[];
  type: {
    key: string;
    translations: Array<{
      abbreviation: string;
      language: string;
      text: string;
    }>;
  };
  video?: Video | null;
}

export interface CompositionPart {
  id: string;
  activity?: {
    id: string;
    type: {
      key: string;
      translations: Array<{
        abbreviation: string;
        language: string;
        text: string;
      }>;
    };
  };
  film?: {
    id: string;
    description: string;
    isAlternativeContent: boolean;
  };
  lengthInMinutes: number;
  title: string;
}

export interface Credit {
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
}

export interface Show {
  id: string;
  audience?: {
    key: string;
    translations: Array<{
      abbreviation: string;
      language: string;
      text: string;
    }>;
  };
  description: string;
  endOn?: string;
  fullTitle?: string;
  isPremiere?: boolean;
  lengthInMinutes?: number;
  location?: {
    id: string;
    abbreviation: string;
    description: string;
    isOnline: boolean;
  };
  programSchedule?: {
    id: string;
    description: string;
  };
  section?: {
    id: string;
    description: string;
  };
  sortedTitle?: string;
  startOn?: string;
  type?: {
    key: string;
    translations: Array<{
      abbreviation: string;
      language: string;
      text: string;
    }>;
  };
}

export interface Composition extends CompositionWithText {
  documentVersion?: string | null;
  publishedOn?: string;
  credits: Credit[];
  customFieldValues: Array<{
    [key: string]: unknown;
  }>;
  customFieldOptions: Array<{
    [key: string]: unknown;
  }>;
  editionId: string;
  filmRatings: Array<{
    key: string;
    translations: Array<{
      abbreviation: string;
      language: string;
      text: string;
    }>;
  }>;
  parts: CompositionPart[];
  publications: Array<{
    [key: string]: unknown;
  }>;
  section?: {
    id: string;
    description: string;
  };
  sections: Array<{
    id: string;
    _id: string;
    section?: {
      key: string;
      translations: Array<{
        abbreviation: string;
        language: string;
        text: string;
      }>;
    };
    name: string;
  }>;
  shows: Show[];
  spokenLanguages: Array<{
    key: string;
    translations: Array<{
      abbreviation: string;
      language: string;
      text: string;
    }>;
    isoCode: string;
  }>;
  texts: TextItem[];
}

export interface CompositionsEndpoint {
  getAllByEdition: (editionId: string) => Promise<CompositionListItem[]>;
  getAllByEditionWithText: (editionId: string, textKey: string) => Promise<CompositionWithText[]>;
  getAllByEditionAndType: (editionId: string, typeId: string) => Promise<CompositionListItem[]>;
  getAllByEditionAndTypeWithText: (editionId: string, typeId: string, textKey: string) => Promise<CompositionWithText[]>;
  getAllByEditionSection: (editionSectionId: string) => Promise<CompositionListItem[]>;
  getAllByEditionSectionWithText: (editionSectionId: string, textKey: string) => Promise<CompositionWithText[]>;
  getById: (compositionId: string) => Promise<Composition>;
}

/**
 * Creates the compositions endpoint functions
 * @param client - The ofetch client instance
 * @returns Object with compositions endpoint methods
 */
export function createCompositionsEndpoint(client: $Fetch): CompositionsEndpoint {
  return {
    getAllByEdition: (editionId: string) => {
      return client<CompositionListItem[]>(`/editions/${editionId}/compositions`);
    },
    getAllByEditionWithText: (editionId: string, textKey: string) => {
      return client<CompositionWithText[]>(`/editions/${editionId}/compositions/text?key=${textKey}`);
    },
    getAllByEditionAndType: (editionId: string, typeId: string) => {
      return client<CompositionListItem[]>(`/editions/${editionId}/compositions/${typeId}`);
    },
    getAllByEditionAndTypeWithText: (editionId: string, typeId: string, textKey: string) => {
      return client<CompositionWithText[]>(`/editions/${editionId}/compositions/${typeId}/text?key=${textKey}`);
    },
    getAllByEditionSection: (editionSectionId: string) => {
      return client<CompositionListItem[]>(`/editionsections/${editionSectionId}/compositions`);
    },
    getAllByEditionSectionWithText: (editionSectionId: string, textKey: string) => {
      return client<CompositionWithText[]>(`/editionsections/${editionSectionId}/compositions/text?key=${textKey}`);
    },
    getById: (compositionId: string) => {
      return client<Composition>(`/compositions/${compositionId}`);
    },
  };
}

