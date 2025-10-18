import type { $Fetch } from 'ofetch';

// Delivery type reference
export interface DeliveryType {
  id: string;
  description: string;
}

// Delivery status reference
export interface DeliveryStatus {
  id: string;
  description: string;
}

// Film reference (shared with other endpoints)
export interface FilmReference {
  id: string;
  description: string;
}

// Delivery request for type (for FilmFetch deliveries)
export interface DeliveryRequestForType {
  id: string;
  description: string;
}

// Content type reference (shared with attachments)
export interface ContentType {
  id: string;
  description: string;
}

// Base Delivery interface
export interface Delivery {
  id: string;
  status: DeliveryStatus;
  type: DeliveryType;
  film: FilmReference;
  requestForType?: DeliveryRequestForType | null;
  contentType?: ContentType | null;
  remarks?: string;
  externalTag?: string;
  url?: string;
}

// List item version (for array responses)
export interface DeliveryListItem {
  id: string;
  description: string;
}

// Deliveries endpoint interface
export interface DeliveriesEndpoint {
  // Get deliveries by edition, type, and status
  getByEdition: (editionId: string, deliveryTypeId: string, deliveryStatusId: string) => Promise<DeliveryListItem[]>;

  // Get all deliveries for a film
  getByFilm: (filmId: string) => Promise<DeliveryListItem[]>;

  // CRUD operations for individual deliveries
  getById: (deliveryId: string) => Promise<Delivery>;
  updateById: (deliveryId: string, delivery: Partial<Delivery>) => Promise<Delivery>;
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
    getByEdition: (editionId: string, deliveryTypeId: string, deliveryStatusId: string) => {
      return client<DeliveryListItem[]>(`/edition/${editionId}/deliveries/${deliveryTypeId}/${deliveryStatusId}`);
    },

    // Get all deliveries for a film
    getByFilm: (filmId: string) => {
      return client<DeliveryListItem[]>(`/film/${filmId}/deliveries`);
    },

    // CRUD operations for individual deliveries
    getById: (deliveryId: string) => {
      return client<Delivery>(`/delivery/${deliveryId}`);
    },

    updateById: (deliveryId: string, delivery: Partial<Delivery>) => {
      return client<Delivery>(`/delivery/${deliveryId}`, {
        method: 'POST',
        body: delivery,
      });
    },

    deleteById: (deliveryId: string) => {
      return client<void>(`/delivery/${deliveryId}`, {
        method: 'DELETE',
      });
    },
  };
}
