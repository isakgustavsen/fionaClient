import type { $Fetch } from 'ofetch';

// Owner types for attachments
export type OwnerType = 'film' | 'accreditation' | 'volunteer' | 'filmscreeningcopy' | 'person';

// Attachment types and content types (references to lookup values)
export interface AttachmentType {
  id: string;
  description: string;
}

export interface AttachmentContentType {
  id: string;
  description: string;
}

// Base attachment interface
export interface Attachment {
  id: string;
  category: number; // 0 = attachments section, 1 = preview section, 2 = publication media section
  contentType?: AttachmentContentType | null;
  createdOn: string;
  originalFileName?: string | null;
  password?: string | null;
  serialNumber: number;
  title: string;
  type: AttachmentType;
  value: string; // The link, memo, token of the image or file, etc.
}

// List item version (for array responses)
export interface AttachmentListItem extends Omit<Attachment, 'contentType' | 'type'> {
  contentType?: string | null;
  type: {
    id: string;
    description: string;
  };
}

// Attachment URL response (from GET /attachment/{token})
export interface AttachmentUrlResponse {
  accessUrl: string;
}

// Attachments endpoint interface
export interface AttachmentsEndpoint {
  // Get all attachments for an owner
  getAllByOwner: (ownerType: OwnerType, ownerId: string) => Promise<AttachmentListItem[]>;

  // CRUD operations for individual attachments
  getById: (ownerType: OwnerType, ownerId: string, attachmentId: string) => Promise<Attachment>;
  deleteById: (ownerType: OwnerType, ownerId: string, attachmentId: string) => Promise<void>;


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
    getAllByOwner: (ownerType: OwnerType, ownerId: string) => {
      return client<AttachmentListItem[]>(`/${ownerType}/${ownerId}/attachments`);
    },

    // CRUD operations for individual attachments
    getById: (ownerType: OwnerType, ownerId: string, attachmentId: string) => {
      return client<Attachment>(`/${ownerType}/${ownerId}/attachment/${attachmentId}`);
    },

    deleteById: (ownerType: OwnerType, ownerId: string, attachmentId: string) => {
      return client<void>(`/${ownerType}/${ownerId}/attachment/${attachmentId}`, {
        method: 'DELETE',
      });
    },

    // Get temporary download URL
    getDownloadUrl: (token: string) => {
      return client<AttachmentUrlResponse>(`/attachment/${token}`);
    },
  };
}
