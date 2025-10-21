import type { $Fetch } from "ofetch";

import type {
  Attachment,
  AttachmentListItem,
  AttachmentUrlResponse,
  AttachmentOwnerType,
} from "../types/attachments";

// Attachments endpoint interface
export interface AttachmentsEndpoint {
  // Get all attachments for an owner
  getAllByOwner: (
    ownerType: AttachmentOwnerType,
    ownerId: string,
  ) => Promise<AttachmentListItem[]>;

  // CRUD operations for individual attachments
  getById: (
    ownerType: AttachmentOwnerType,
    ownerId: string,
    attachmentId: string,
  ) => Promise<Attachment>;
  deleteById: (
    ownerType: AttachmentOwnerType,
    ownerId: string,
    attachmentId: string,
  ) => Promise<void>;

  // Get temporary download URL
  getDownloadUrl: (token: string) => Promise<AttachmentUrlResponse>;
}

/**
 * Creates the attachments endpoint functions (for URLs, memos, and tokens - no file uploads)
 * @param client - The ofetch client instance
 * @returns Object with attachments endpoint methods
 */
export function createAttachmentsEndpoint(client: $Fetch): AttachmentsEndpoint {
  return {
    // Get all attachments for an owner
    getAllByOwner: async (ownerType: AttachmentOwnerType, ownerId: string) =>
      await client<AttachmentListItem[]>(
        `/${ownerType}/${ownerId}/attachments`,
      ),

    // CRUD operations for individual attachments
    getById: async (
      ownerType: AttachmentOwnerType,
      ownerId: string,
      attachmentId: string,
    ) =>
      await client<Attachment>(
        `/${ownerType}/${ownerId}/attachment/${attachmentId}`,
      ),

    deleteById: async (
      ownerType: AttachmentOwnerType,
      ownerId: string,
      attachmentId: string,
    ) => {
      await client<unknown>(
        `/${ownerType}/${ownerId}/attachment/${attachmentId}`,
        {
          method: "DELETE",
        },
      );
    },

    // Get temporary download URL
    getDownloadUrl: async (token: string) =>
      await client<AttachmentUrlResponse>(`/attachment/${token}`),
  };
}
