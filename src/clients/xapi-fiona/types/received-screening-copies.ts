import type { IdDescription } from "./shared";

export interface ReceivedFilmScreeningCopy {
  id: string;
  value: string;
  description: string;
  delivery?: IdDescription | null;
  film: IdDescription;
  frameRate?: string | null;
  isEncrypted: boolean;
  issueDate?: string | null;
  isUnusable: boolean;
  mediumType: IdDescription;
  contentType?: IdDescription | null;
  status: IdDescription;
  uuid?: string | null;
  qualityControlReportUrl?: string | null;
}

export interface ReceivedFilmScreeningCopyListItem {
  id: string;
  value: string;
  description: string;
  delivery?: IdDescription | null;
  film: IdDescription;
  frameRate?: string | null;
  isEncrypted: boolean;
  issueDate?: string | null;
  isUnusable: boolean;
  mediumType: IdDescription;
  contentType?: IdDescription | null;
  status: IdDescription;
  uuid?: string | null;
  qualityControlReportUrl?: string | null;
}

export interface CreateReceivedFilmScreeningCopyRequest {
  value: string;
  description: string;
  delivery?: {
    id: string;
    description?: string;
  } | null;
  mediumType: {
    id: string;
    description?: string;
  };
  contentType?: {
    id: string;
    description?: string;
  } | null;
  qualityControlReportUrl?: string;
}

export interface UpdateReceivedFilmScreeningCopyRequest {
  isUnusable?: boolean;
  status?: {
    id: string;
    description?: string;
  };
}
