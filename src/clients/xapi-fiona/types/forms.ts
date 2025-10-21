import type { IdDescription } from "./shared";

interface FormTranslation {
  description?: string | null;
  key?: string | null;
  language: string;
  title: string;
}

export interface Form {
  id: string;
  endsOn: string;
  startsOn: string;
  translations: FormTranslation[];
}

export interface FilmEntry {
  directors: string[];
  edition: IdDescription;
  formName: string;
  fullPreferredTitle: string;
  lengthInMinutes: number;
  linkedFilmId?: string | null;
  countriesOfProduction?: string | null;
  submittedBy: {
    emailAddress: string;
    name: string;
  };
}
