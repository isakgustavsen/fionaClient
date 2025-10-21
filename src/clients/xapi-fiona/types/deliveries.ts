import type { IdDescription } from "./shared";

export interface Delivery {
  id: string;
  status: IdDescription;
  type: IdDescription;
  film: IdDescription;
  requestForType?: IdDescription | null;
  contentType?: IdDescription | null;
  remarks?: string;
  externalTag?: string;
  url?: string;
}
