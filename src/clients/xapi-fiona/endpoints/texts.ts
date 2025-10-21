import type { $Fetch } from "ofetch";

import type { CreateTextRequest, Text } from "../types/texts";

// Texts endpoint interface
export interface TextsEndpoint {
  // Get all texts for owner
  getAllByOwner: (ownerType: string, ownerId: string) => Promise<Text[]>;

  // Create new text for owner
  createForOwner: (
    ownerType: string,
    ownerId: string,
    request: CreateTextRequest,
  ) => Promise<Text>;

  // Get text by ID
  getById: (
    ownerType: string,
    ownerId: string,
    textId: string,
  ) => Promise<Text>;

  // Update text
  updateText: (
    ownerType: string,
    ownerId: string,
    textId: string,
    request: CreateTextRequest,
  ) => Promise<Text>;

  // Delete text
  deleteText: (
    ownerType: string,
    ownerId: string,
    textId: string,
  ) => Promise<void>;
}

/**
 * Creates the texts endpoint functions
 * @param client - The ofetch client instance
 * @returns Object with texts endpoint methods
 */
export function createTextsEndpoint(client: $Fetch): TextsEndpoint {
  return {
    // Get all texts for owner
    getAllByOwner: async (ownerType: string, ownerId: string) =>
      await client<Text[]>(`/${ownerType}/${ownerId}/texts`),

    // Create new text for owner
    createForOwner: async (
      ownerType: string,
      ownerId: string,
      request: CreateTextRequest,
    ) =>
      await client<Text>(`/${ownerType}/${ownerId}/text`, {
        method: "POST",
        body: request,
      }),

    // Get text by ID
    getById: async (ownerType: string, ownerId: string, textId: string) =>
      await client<Text>(`/${ownerType}/${ownerId}/text/${textId}`),

    // Update text
    updateText: async (
      ownerType: string,
      ownerId: string,
      textId: string,
      request: CreateTextRequest,
    ) =>
      await client<Text>(`/${ownerType}/${ownerId}/text/${textId}`, {
        method: "POST",
        body: request,
      }),

    // Delete text
    deleteText: async (ownerType: string, ownerId: string, textId: string) => {
      await client<unknown>(`/${ownerType}/${ownerId}/text/${textId}`, {
        method: "DELETE",
      });
    },
  };
}
