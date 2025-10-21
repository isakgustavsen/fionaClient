export interface IdDescription {
  id: string;
  description: string;
}

export interface Translation {
  abbreviation?: string;
  language: string;
  text: string;
}

export interface TranslationArray {
  key: string;
  translations: Translation[];
}

export interface Address {
  address1: string;
  address2?: string | null;
  city?: string | null;
  country?: IdDescription | null;
  postalCode?: string | null;
  state?: string | null;
}

export interface ListItem {
  id: string;
  createdOn: string;
  updatedOn: string;
  description: string;
}
