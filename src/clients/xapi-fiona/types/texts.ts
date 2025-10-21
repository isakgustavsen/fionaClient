import type { Translation } from "./shared";

export interface Text {
  id: string;
  createdOn: string;
  type: {
    id: string;
    key: string;
    translations: Translation[];
  };
  translations: Array<{
    html: string;
    language: string;
  }>;
}

export interface CreateTextRequest {
  type: { id: string };
  translations: Array<{
    html: string;
    language: string;
  }>;
}
