import type { $Fetch } from "ofetch";
import type { ListItem } from "../types/shared";
import type {
  Accreditation,
  Badge,
  CreateBadgeBody,
  Stay,
  Travel,
  Expense,
} from "../types/accreditations";

// Accreditations endpoint interface
export interface AccreditationsEndpoint {
  // Accreditation CRUD operations
  getAllByGuestbook: (guestbookId: string) => Promise<ListItem[]>;

  create: (accreditation: Accreditation) => Promise<Accreditation>;

  //Accreditation CRUD operations
  getById: (accreditationId: string) => Promise<Accreditation>;
  updateById: (
    accreditationId: string,
    accreditation: Accreditation,
  ) => Promise<Accreditation>;
  deleteById: (accreditationId: string) => Promise<void>;
  setExternalIdentification: (
    accreditationId: string,
    providerName: string,
    externalIdentification: string,
  ) => Promise<void>;

  // Badge operations
  getBadgesByAccreditation: (accreditationId: string) => Promise<Badge[]>;
  getBadgesByExternalAccount: (
    providerName: string,
    externalIdentificationId: string,
    guestbookId: string,
  ) => Promise<Badge[]>;

  // Specific badge operations
  getBadgeById: (accreditationId: string, badgeId: string) => Promise<Badge>;
  updateBadgeById: (
    accreditationId: string,
    badgeId: string,
    badge: Badge,
  ) => Promise<Badge>;
  deleteBadgeById: (accreditationId: string, badgeId: string) => Promise<void>;
  createBadge: (
    accreditationId: string,
    badge: CreateBadgeBody,
  ) => Promise<Badge>;

  // Expense operations
  getExpensesByAccreditation: (accreditationId: string) => Promise<Expense[]>;
  getExpenseById: (
    accreditationId: string,
    expenseId: string,
  ) => Promise<Expense>;

  // Stay operations
  getStaysByAccreditation: (accreditationId: string) => Promise<Stay[]>;
  getStayById: (accreditationId: string, stayId: string) => Promise<Stay>;

  // Travel operations
  getTravelsByAccreditation: (accreditationId: string) => Promise<Travel[]>;
  getTravelById: (accreditationId: string, travelId: string) => Promise<Travel>;
}

/**
 * Creates the accreditations endpoint functions
 * @param client - The ofetch client instance
 * @returns Object with accreditations endpoint methods
 */
export function createAccreditationsEndpoint(
  client: $Fetch,
): AccreditationsEndpoint {
  return {
    // Accreditation CRUD operations
    getAllByGuestbook: async (guestbookId: string) =>
      await client<ListItem[]>(`/guestbook/${guestbookId}/accreditations`),

    create: async (accreditation: Accreditation) =>
      await client<Accreditation>("/accreditation", {
        method: "POST",
        body: accreditation,
      }),

    getById: async (accreditationId: string) =>
      await client<Accreditation>(`/accreditation/${accreditationId}`),

    updateById: async (accreditationId: string, accreditation: Accreditation) =>
      await client<Accreditation>(`/accreditation/${accreditationId}`, {
        method: "POST",
        body: accreditation,
      }),

    deleteById: async (accreditationId: string) => {
      await client<unknown>(`/accreditation/${accreditationId}`, {
        method: "DELETE",
      });
    },

    setExternalIdentification: async (
      accreditationId: string,
      providerName: string,
      externalIdentification: string,
    ) => {
      await client<unknown>(
        `/accreditation/${accreditationId}/${providerName}/externalIdentification/${externalIdentification}`,
        {
          method: "POST",
        },
      );
    },

    // Badge operations
    getBadgesByAccreditation: async (accreditationId: string) =>
      await client<Badge[]>(`/accreditation/${accreditationId}/badges`),

    getBadgesByExternalAccount: async (
      providerName: string,
      externalIdentificationId: string,
      guestbookId: string,
    ) =>
      await client<Badge[]>(
        `/account/${providerName}/${externalIdentificationId}/guestbook/${guestbookId}/badges`,
      ),

    getBadgeById: async (accreditationId: string, badgeId: string) =>
      await client<Badge>(`/accreditation/${accreditationId}/badge/${badgeId}`),

    updateBadgeById: async (
      accreditationId: string,
      badgeId: string,
      badge: Badge,
    ) =>
      await client<Badge>(
        `/accreditation/${accreditationId}/badge/${badgeId}`,
        {
          method: "POST",
          body: badge,
        },
      ),

    deleteBadgeById: async (accreditationId: string, badgeId: string) => {
      await client<unknown>(
        `/accreditation/${accreditationId}/badge/${badgeId}`,
        {
          method: "DELETE",
        },
      );
    },

    createBadge: async (accreditationId: string, badge: CreateBadgeBody) =>
      await client<Badge>(`/accreditation/${accreditationId}/badge`, {
        method: "POST",
        body: badge,
      }),

    // Expense operations
    getExpensesByAccreditation: async (accreditationId: string) =>
      await client<Expense[]>(`/accreditation/${accreditationId}/expenses`),

    getExpenseById: async (accreditationId: string, expenseId: string) =>
      await client<Expense>(
        `/accreditation/${accreditationId}/expense/${expenseId}`,
      ),

    // Stay operations
    getStaysByAccreditation: async (accreditationId: string) =>
      await client<Stay[]>(`/accreditation/${accreditationId}/stays`),

    getStayById: async (accreditationId: string, stayId: string) =>
      await client<Stay>(`/accreditation/${accreditationId}/stay/${stayId}`),

    // Travel operations
    getTravelsByAccreditation: async (accreditationId: string) =>
      await client<Travel[]>(`/accreditation/${accreditationId}/travels`),

    getTravelById: async (accreditationId: string, travelId: string) =>
      await client<Travel>(
        `/accreditation/${accreditationId}/travel/${travelId}`,
      ),
  };
}
