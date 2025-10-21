import type { IdDescription } from "./shared";

export interface ScreeningCopy {
  id: string;
  filmTitle: string;
  contentTitle?: string | null;
  uuid?: string | null;
  mediumType: IdDescription;
  printNumber: number;
  createdOn: string;
  updatedOn: string;
  description: string;
}
