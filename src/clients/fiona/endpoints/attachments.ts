import type { $Fetch } from 'ofetch';

export interface AttachmentsEndpoint {
  getUrl: (token: string) => Promise<string>;
}

/**
 * Creates the attachments endpoint functions
 * @param client - The ofetch client instance
 * @returns Object with attachments endpoint methods
 */
export function createAttachmentsEndpoint(client: $Fetch): AttachmentsEndpoint {
  return {
    getUrl: (token: string) => {
      return client<string>(`/attachments/${token}`);
    },
  };
}

