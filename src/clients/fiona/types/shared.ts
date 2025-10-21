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
