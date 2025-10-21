import type { $Fetch } from "ofetch";

import type { Delivery } from "../types/deliveries";
import type { IdDescription } from "../types/shared";

// Deliveries endpoint interface
export interface DeliveriesEndpoint {
  // Get deliveries by edition, type, and status
  getByEdition: (
    editionId: string,
    deliveryTypeId: string,
    deliveryStatusId: string,
  ) => Promise<IdDescription[]>;

  // Get all deliveries for a film
  getByFilm: (filmId: string) => Promise<IdDescription[]>;

  // CRUD operations for individual deliveries
  getById: (deliveryId: string) => Promise<Delivery>;
  updateById: (
    deliveryId: string,
    delivery: Partial<Delivery>,
  ) => Promise<Delivery>;
  deleteById: (deliveryId: string) => Promise<void>;
}

/**
 * Creates the deliveries endpoint functions
 * @param client - The ofetch client instance
 * @returns Object with deliveries endpoint methods
 */
export function createDeliveriesEndpoint(client: $Fetch): DeliveriesEndpoint {
  return {
    // Get deliveries by edition, type, and status
    getByEdition: async (
      editionId: string,
      deliveryTypeId: string,
      deliveryStatusId: string,
    ) =>
      await client<IdDescription[]>(
        `/edition/${editionId}/deliveries/${deliveryTypeId}/${deliveryStatusId}`,
      ),

    // Get all deliveries for a film
    getByFilm: async (filmId: string) =>
      await client<IdDescription[]>(`/film/${filmId}/deliveries`),

    // CRUD operations for individual deliveries
    getById: async (deliveryId: string) =>
      await client<Delivery>(`/delivery/${deliveryId}`),

    updateById: async (deliveryId: string, delivery: Partial<Delivery>) =>
      await client<Delivery>(`/delivery/${deliveryId}`, {
        method: "POST",
        body: delivery,
      }),

    deleteById: async (deliveryId: string) => {
      await client<unknown>(`/delivery/${deliveryId}`, {
        method: "DELETE",
      });
    },
  };
}
