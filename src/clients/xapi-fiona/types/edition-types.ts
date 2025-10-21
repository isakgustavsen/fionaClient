import type { IdDescription } from "./shared";

export interface EditionType extends IdDescription {}

export interface EditionTypeDetail extends EditionType {
  abbreviation?: string;
  active: boolean;
  activeEdition?: IdDescription | null;
  editions: Edition[];
  name: string;
  startsInMonth: number;
}

export interface Edition {
  id: string;
  description?: string | null;
}

export interface EditionDetail extends Edition {
  editionType: IdDescription;
  endFestivalEvent: string;
  endFestivalYear: string;
  guestbook?: IdDescription;
  isActiveEdition: boolean;
  name?: string;
  round?: string;
  sequenceNumber?: number;
  startFestivalEvent: string;
  startFestivalYear: string;
  year: number;
}
