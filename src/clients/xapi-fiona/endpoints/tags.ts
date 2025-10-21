import type { $Fetch } from "ofetch";

import type { TagDetail } from "../types/tags";
import type { IdDescription } from "../types/shared";

// Tags endpoint interface
export interface TagsEndpoint {
  // Get all tags
  getAll: () => Promise<IdDescription[]>;

  // Get tag details by ID
  getById: (tagId: string) => Promise<TagDetail>;
}

/**
 * Creates the tags endpoint functions
 * @param client - The ofetch client instance
 * @returns Object with tags endpoint methods
 */
export function createTagsEndpoint(client: $Fetch): TagsEndpoint {
  return {
    // Get all tags
    getAll: async () => await client<IdDescription[]>("/tags"),

    // Get tag details by ID
    getById: async (tagId: string) => await client<TagDetail>(`/tag/${tagId}`),
  };
}
