import type { $Fetch } from "ofetch";

import type {
  CreateReceivedFilmScreeningCopyRequest,
  ReceivedFilmScreeningCopy,
  ReceivedFilmScreeningCopyListItem,
  UpdateReceivedFilmScreeningCopyRequest,
} from "../types/received-screening-copies";

// Received Film Screening Copies endpoint interface
export interface ReceivedFilmScreeningCopiesEndpoint {
  // Get all received screening copies for a film
  getAllByFilm: (
    filmId: string,
  ) => Promise<ReceivedFilmScreeningCopyListItem[]>;

  // Get received screening copy by ID
  getById: (
    receivedFilmScreeningCopyId: string,
  ) => Promise<ReceivedFilmScreeningCopy>;

  // Update received screening copy
  updateById: (
    receivedFilmScreeningCopyId: string,
    copy: UpdateReceivedFilmScreeningCopyRequest,
  ) => Promise<ReceivedFilmScreeningCopy>;

  // Delete received screening copy
  deleteById: (receivedFilmScreeningCopyId: string) => Promise<void>;

  // Get received screening copies by edition and UUID
  getByEditionAndUuid: (
    editionId: string,
    uuid: string,
  ) => Promise<ReceivedFilmScreeningCopyListItem[]>;

  // Create new received film screening copy
  create: (
    filmId: string,
    copy: CreateReceivedFilmScreeningCopyRequest,
  ) => Promise<ReceivedFilmScreeningCopy>;

  // Upload CPL file to received screening copy
  uploadCpl: (
    receivedFilmScreeningCopyId: string,
    file: unknown,
  ) => Promise<ReceivedFilmScreeningCopy>;
}

/**
 * Creates the received film screening copies endpoint functions
 * @param client - The ofetch client instance
 * @returns Object with received film screening copies endpoint methods
 */
export function createReceivedFilmScreeningCopiesEndpoint(
  client: $Fetch,
): ReceivedFilmScreeningCopiesEndpoint {
  return {
    // Get all received screening copies for a film
    getAllByFilm: async (filmId: string) =>
      await client<ReceivedFilmScreeningCopyListItem[]>(
        `/film/${filmId}/receivedfilmscreeningcopies`,
      ),

    // Get received screening copy by ID
    getById: async (receivedFilmScreeningCopyId: string) =>
      await client<ReceivedFilmScreeningCopy>(
        `/receivedfilmscreeningcopy/${receivedFilmScreeningCopyId}`,
      ),

    // Update received screening copy
    updateById: async (
      receivedFilmScreeningCopyId: string,
      copy: UpdateReceivedFilmScreeningCopyRequest,
    ) =>
      await client<ReceivedFilmScreeningCopy>(
        `/receivedfilmscreeningcopy/${receivedFilmScreeningCopyId}`,
        {
          method: "POST",
          body: copy,
        },
      ),

    // Delete received screening copy
    deleteById: async (receivedFilmScreeningCopyId: string) => {
      await client<unknown>(
        `/receivedfilmscreeningcopy/${receivedFilmScreeningCopyId}`,
        {
          method: "DELETE",
        },
      );
    },

    // Get received screening copies by edition and UUID
    getByEditionAndUuid: async (editionId: string, uuid: string) =>
      await client<ReceivedFilmScreeningCopyListItem[]>(
        `/edition/${editionId}/receivedfilmscreeningcopies/${uuid}`,
      ),

    // Create new received film screening copy
    create: async (
      filmId: string,
      copy: CreateReceivedFilmScreeningCopyRequest,
    ) =>
      await client<ReceivedFilmScreeningCopy>(
        `/film/${filmId}/receivedfilmscreeningcopy`,
        {
          method: "POST",
          body: copy,
        },
      ),

    // Upload CPL file to received screening copy
    uploadCpl: (receivedFilmScreeningCopyId: string, file: unknown) => {
      // Note: In a real implementation, you would need to handle FormData
      // Since FormData is not available in Node.js environments, this is a placeholder
      // For actual file upload, you would need to use a different approach or polyfill
      throw new Error(
        "File upload not implemented in this environment. Use browser environment with FormData support.",
      );
    },
  };
}
