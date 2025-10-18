import type { $Fetch } from 'ofetch';

// Tag interface
export interface Tag {
  id: string;
  description: string;
}

// Tag details interface
export interface TagDetail {
  enabled: boolean;
  id: string;
  key: string;
  translations: Array<{
    abbreviation?: string | null;
    language: string;
    text: string;
  }>;
  tagGroup: {
    description: string;
    id: string;
  };
}

// Tags endpoint interface
export interface TagsEndpoint {
  // Get all tags
  getAll: () => Promise<Tag[]>;

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
    getAll: () => {
      return client<Tag[]>('/tags');
    },

    // Get tag details by ID
    getById: (tagId: string) => {
      return client<TagDetail>(`/tag/${tagId}`);
    },
  };
}
