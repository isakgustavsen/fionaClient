import type { $Fetch } from "ofetch";
import { ofetch } from "ofetch";

export interface BaseClientOptions {
  baseUrl: string;
  key: string;
  authHeader: string;
}

export function createBaseClient(options: BaseClientOptions): $Fetch {
  return ofetch.create({
    baseURL: options.baseUrl,
    headers: {
      [options.authHeader]: options.key,
      "Content-Type": "application/json",
    },
  });
}
