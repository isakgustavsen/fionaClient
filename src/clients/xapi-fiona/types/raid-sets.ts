import type { IdDescription } from "./shared";

export interface DCP {
  id: string;
  ingestStatus?: IdDescription | null;
  contentTitle?: string | null;
  filmTitle: string;
  name: string;
  uuid: string;
  firstScreeningOn: string;
  lastScreeningOn: string;
}

export interface RaidSet {
  id: string;
  name: string;
  startsOn: string;
  endsOn: string;
  autoFill: boolean;
  capacity: number;
  locationServer: IdDescription;
  remarks?: string | null;
  status: IdDescription;
  DCPs: DCP[];
}
