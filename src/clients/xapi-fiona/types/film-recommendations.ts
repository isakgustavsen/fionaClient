import type { IdDescription } from "./shared";

export interface Recommendation {
  id: string;
  account: IdDescription;
  recommendation: IdDescription;
  review: string;
  createdBy: IdDescription;
  createdOn: string;
  updatedBy: IdDescription;
  updatedOn: string;
}
export interface RecommendationRequest {
  account: IdDescription;
  recommendation: IdDescription;
  review: string;
}
