import type { $Fetch } from 'ofetch';

// Text interface
export interface Text {
  id: string;
  createdOn: string;
  type: {
    id: string;
    key: string;
    translations: Array<{
      abbreviation?: string | null;
      language: string;
      text: string;
    }>;
  };
  translations: Array<{
    html: string;
    language: string;
  }>;
}

// Create text request interface
export interface CreateTextRequest {
  type: { id: string };
  translations: Array<{
    html: string;
    language: string;
  }>;
}

// Texts endpoint interface
export interface TextsEndpoint {
  // Get all texts for owner
  getAllByOwner: (ownerType: string, ownerId: string) => Promise<Text[]>;

  // Create new text for owner
  createForOwner: (ownerType: string, ownerId: string, request: CreateTextRequest) => Promise<Text>;

  // Get text by ID
  getById: (ownerType: string, ownerId: string, textId: string) => Promise<Text>;

  // Update text
  updateText: (ownerType: string, ownerId: string, textId: string, request: CreateTextRequest) => Promise<Text>;

  // Delete text
  deleteText: (ownerType: string, ownerId: string, textId: string) => Promise<void>;
}

/**
 * Creates the texts endpoint functions
 * @param client - The ofetch client instance
 * @returns Object with texts endpoint methods
 */
export function createTextsEndpoint(client: $Fetch): TextsEndpoint {
  return {
    // Get all texts for owner
    getAllByOwner: (ownerType: string, ownerId: string) => {
      return client<Text[]>(`/${ownerType}/${ownerId}/texts`);
    },

    // Create new text for owner
    createForOwner: (ownerType: string, ownerId: string, request: CreateTextRequest) => {
      return client<Text>(`/${ownerType}/${ownerId}/text`, {
        method: 'POST',
        body: request,
      });
    },

    // Get text by ID
    getById: (ownerType: string, ownerId: string, textId: string) => {
      return client<Text>(`/${ownerType}/${ownerId}/text/${textId}`);
    },

    // Update text
    updateText: (ownerType: string, ownerId: string, textId: string, request: CreateTextRequest) => {
      return client<Text>(`/${ownerType}/${ownerId}/text/${textId}`, {
        method: 'POST',
        body: request,
      });
    },

    // Delete text
    deleteText: (ownerType: string, ownerId: string, textId: string) => {
      return client<void>(`/${ownerType}/${ownerId}/text/${textId}`, {
        method: 'DELETE',
      });
    },
  };
}
