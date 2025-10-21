import type { $Fetch } from "ofetch";

export interface Language {
  key: string;
  translations: Array<{
    abbreviation: string;
    language: string;
    text: string;
  }>;
}

export interface LookupValue {
  key: string;
  translations: Array<{
    abbreviation: string;
    language: string;
    text: string;
  }>;
}

export type Image = Record<string, unknown>;

export interface TextItem {
  id: string;
  _id: string;
  html: Array<{
    html: string;
    language: Language;
  }>;
  translations: Array<{
    html: string;
    language: string;
  }>;
  type: LookupValue;
}

export type Publication = Record<string, unknown>;

export type Video = Record<string, unknown>;

export interface EditionSection {
  id: string;
  documentVersion?: string | null;
  publishedOn?: string;
  abbreviation: string;
  description: string;
  editionId: string;
  endsOn?: string | null;
  section: LookupValue;
  image?: Image | null;
  internalUse: boolean;
  isCompetition: boolean;
  isContinuous: boolean;
  name: string;
  publications: Publication[];
  startsOn?: string | null;
  texts: TextItem[];
  type: LookupValue;
  video?: Video | null;
}

export interface EditionSectionsEndpoint {
  getAllByEdition: (editionId: string) => Promise<EditionSection[]>;
  getById: (editionSectionId: string) => Promise<EditionSection>;
}

/**
 * Creates the edition sections endpoint functions
 * @param client - The ofetch client instance
 * @returns Object with edition sections endpoint methods
 */
export function createEditionSectionsEndpoint(
  client: $Fetch,
): EditionSectionsEndpoint {
  return {
    getAllByEdition: async (editionId: string) =>
      await client<EditionSection[]>(`/editions/${editionId}/editionsections`),
    getById: async (editionSectionId: string) =>
      await client<EditionSection>(`/editionsections/${editionSectionId}`),
  };
}
