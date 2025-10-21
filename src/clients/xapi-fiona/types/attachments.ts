import type { IdDescription } from "./shared";

export type AttachmentOwnerType =
  | "film"
  | "accreditation"
  | "volunteer"
  | "filmscreeningcopy"
  | "person";

export interface Attachment {
  id: string;
  category: number; // 0 = attachments section, 1 = preview section, 2 = publication media section
  contentType?: IdDescription | null;
  createdOn: string;
  originalFileName?: string | null;
  password?: string | null;
  serialNumber: number;
  title: string;
  type: IdDescription;
  value: string; // The link, memo, token of the image or file, etc.
}

export interface AttachmentListItem
  extends Omit<Attachment, "contentType" | "type"> {
  contentType?: string | null;
  type: IdDescription;
}

export interface AttachmentUrlResponse {
  accessUrl: string;
}
