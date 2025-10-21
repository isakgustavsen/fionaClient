import type { IdDescription, Translation } from "./shared";

export interface TagDetail {
  enabled: boolean;
  id: string;
  key: string;
  translations: Translation[];
  tagGroup: IdDescription;
}
