import type { $Fetch } from 'ofetch';

// Medium type reference
export interface MediumType {
  id: string;
  description: string;
}

// Content type reference
export interface ContentType {
  id: string;
  description: string;
}

// Status reference
export interface ReceivedScreeningCopyStatus {
  id: string;
  description: string;
}

// Delivery reference
export interface Delivery {
  id: string;
  description: string;
}

// Film reference
export interface Film {
  id: string;
  description: string;
}

// Base Received Film Screening Copy interface
export interface ReceivedFilmScreeningCopy {
  id: string;
  value: string; // Content title, URL, Id or file name
  description: string;
  delivery?: Delivery | null;
  film: Film;
  frameRate?: string | null;
  isEncrypted: boolean;
  issueDate?: string | null;
  isUnusable: boolean;
  mediumType: MediumType;
  contentType?: ContentType | null;
  status: ReceivedScreeningCopyStatus;
  uuid?: string | null;
  qualityControlReportUrl?: string | null;
}

// List item version (for array responses)
export interface ReceivedFilmScreeningCopyListItem {
  id: string;
  value: string;
  description: string;
  delivery?: {
    id: string;
    description: string;
  } | null;
  film: {
    id: string;
    description: string;
  };
  frameRate?: string | null;
  isEncrypted: boolean;
  issueDate?: string | null;
  isUnusable: boolean;
  mediumType: {
    id: string;
    description: string;
  };
  contentType?: {
    id: string;
    description: string;
  } | null;
  status: {
    id: string;
    description: string;
  };
  uuid?: string | null;
  qualityControlReportUrl?: string | null;
}

// Create received film screening copy request (for DCP, Digital, Online)
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

// Update received film screening copy request
export interface UpdateReceivedFilmScreeningCopyRequest {
  isUnusable?: boolean;
  status?: {
    id: string;
    description?: string;
  };
}

// Received Film Screening Copies endpoint interface
export interface ReceivedFilmScreeningCopiesEndpoint {
  // Get all received screening copies for a film
  getAllByFilm: (filmId: string) => Promise<ReceivedFilmScreeningCopyListItem[]>;

  // Get received screening copy by ID
  getById: (receivedFilmScreeningCopyId: string) => Promise<ReceivedFilmScreeningCopy>;

  // Update received screening copy
  updateById: (receivedFilmScreeningCopyId: string, copy: UpdateReceivedFilmScreeningCopyRequest) => Promise<ReceivedFilmScreeningCopy>;

  // Delete received screening copy
  deleteById: (receivedFilmScreeningCopyId: string) => Promise<void>;

  // Get received screening copies by edition and UUID
  getByEditionAndUuid: (editionId: string, uuid: string) => Promise<ReceivedFilmScreeningCopyListItem[]>;

  // Create new received film screening copy
  create: (filmId: string, copy: CreateReceivedFilmScreeningCopyRequest) => Promise<ReceivedFilmScreeningCopy>;

  // Upload CPL file to received screening copy
  uploadCpl: (receivedFilmScreeningCopyId: string, file: unknown) => Promise<ReceivedFilmScreeningCopy>;
}

/**
 * Creates the received film screening copies endpoint functions
 * @param client - The ofetch client instance
 * @returns Object with received film screening copies endpoint methods
 */
export function createReceivedFilmScreeningCopiesEndpoint(client: $Fetch): ReceivedFilmScreeningCopiesEndpoint {
  return {
    // Get all received screening copies for a film
    getAllByFilm: (filmId: string) => {
      return client<ReceivedFilmScreeningCopyListItem[]>(`/film/${filmId}/receivedfilmscreeningcopies`);
    },

    // Get received screening copy by ID
    getById: (receivedFilmScreeningCopyId: string) => {
      return client<ReceivedFilmScreeningCopy>(`/receivedfilmscreeningcopy/${receivedFilmScreeningCopyId}`);
    },

    // Update received screening copy
    updateById: (receivedFilmScreeningCopyId: string, copy: UpdateReceivedFilmScreeningCopyRequest) => {
      return client<ReceivedFilmScreeningCopy>(`/receivedfilmscreeningcopy/${receivedFilmScreeningCopyId}`, {
        method: 'POST',
        body: copy,
      });
    },

    // Delete received screening copy
    deleteById: (receivedFilmScreeningCopyId: string) => {
      return client<void>(`/receivedfilmscreeningcopy/${receivedFilmScreeningCopyId}`, {
        method: 'DELETE',
      });
    },

    // Get received screening copies by edition and UUID
    getByEditionAndUuid: (editionId: string, uuid: string) => {
      return client<ReceivedFilmScreeningCopyListItem[]>(`/edition/${editionId}/receivedfilmscreeningcopies/${uuid}`);
    },

    // Create new received film screening copy
    create: (filmId: string, copy: CreateReceivedFilmScreeningCopyRequest) => {
      return client<ReceivedFilmScreeningCopy>(`/film/${filmId}/receivedfilmscreeningcopy`, {
        method: 'POST',
        body: copy,
      });
    },

    // Upload CPL file to received screening copy
    uploadCpl: (receivedFilmScreeningCopyId: string, file: unknown) => {
      // Note: In a real implementation, you would need to handle FormData
      // Since FormData is not available in Node.js environments, this is a placeholder
      // For actual file upload, you would need to use a different approach or polyfill
      throw new Error('File upload not implemented in this environment. Use browser environment with FormData support.');
    },
  };
}
