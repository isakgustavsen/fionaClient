import type { IdDescription } from "./shared";

export interface FilmControlEdition {
  id: string;
  description: string;
  schedules: IdDescription[];
  raidSets: IdDescription[];
  endsOn: string;
  isActive: boolean;
  name: string;
  startsOn: string;
}
