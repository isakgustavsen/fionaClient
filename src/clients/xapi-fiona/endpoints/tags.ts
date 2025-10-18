import type { $Fetch } from 'ofetch';

// Base Tag interface
export interface Tag {
  id: string;
  description: string;
}

// Tags endpoint interface
export interface TagsEndpoint {
  // Get all tags (placeholder - no specific endpoint found in docs)
  getAll: () => Promise<Tag[]>;
}

/**
 * Creates the tags endpoint functions
 * @param client - The ofetch client instance
 * @returns Object with tags endpoint methods
 */
export function createTagsEndpoint(client: $Fetch): TagsEndpoint {
  return {
    // Get all tags (placeholder - no specific endpoint found in docs)
    getAll: () => {
      return client<Tag[]>('/tags');
    },
  };
}
