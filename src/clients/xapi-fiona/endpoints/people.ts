import type { $Fetch } from "ofetch";

import type {
  CommunicationItem,
  CompanyPerson,
  CreatePersonRequest,
  Person,
} from "../types/people";

// People endpoint interface
export interface PeopleEndpoint {
  // Person CRUD operations
  create: (person: CreatePersonRequest) => Promise<Person>;
  getById: (personId: string) => Promise<Person>;
  updateById: (personId: string, person: Person) => Promise<Person>;
  deleteById: (personId: string) => Promise<void>;

  // Company relations for person
  getCompanies: (personId: string) => Promise<CompanyPerson[]>;
  getCompanyRelationById: (
    personId: string,
    companyPersonId: string,
  ) => Promise<CompanyPerson>;
  updateCompanyRelationById: (
    personId: string,
    companyPersonId: string,
    relation: CompanyPerson,
  ) => Promise<CompanyPerson>;
  deleteCompanyRelationById: (
    personId: string,
    companyPersonId: string,
  ) => Promise<void>;

  // Communication items for person
  getCommunicationItems: (personId: string) => Promise<CommunicationItem[]>;
  getCommunicationItemById: (
    personId: string,
    communicationItemId: string,
  ) => Promise<CommunicationItem>;
  updateCommunicationItemById: (
    personId: string,
    communicationItemId: string,
    item: CommunicationItem,
  ) => Promise<CommunicationItem>;
  deleteCommunicationItemById: (
    personId: string,
    communicationItemId: string,
  ) => Promise<void>;
  createCommunicationItem: (
    personId: string,
    item: CommunicationItem,
  ) => Promise<CommunicationItem>;
}

/**
 * Creates the people endpoint functions
 * @param client - The ofetch client instance
 * @returns Object with people endpoint methods
 */
export function createPeopleEndpoint(client: $Fetch): PeopleEndpoint {
  return {
    // Person CRUD operations
    create: async (person: CreatePersonRequest) =>
      await client<Person>("/person", {
        method: "POST",
        body: person,
      }),

    getById: async (personId: string) =>
      await client<Person>(`/person/${personId}`),

    updateById: async (personId: string, person: Person) =>
      await client<Person>(`/person/${personId}`, {
        method: "POST",
        body: person,
      }),

    deleteById: async (personId: string) => {
      await client<unknown>(`/person/${personId}`, {
        method: "DELETE",
      });
    },

    // Company relations for person
    getCompanies: async (personId: string) =>
      await client<CompanyPerson[]>(`/person/${personId}/companies`),

    getCompanyRelationById: async (personId: string, companyPersonId: string) =>
      await client<CompanyPerson>(
        `/person/${personId}/company/${companyPersonId}`,
      ),

    updateCompanyRelationById: async (
      personId: string,
      companyPersonId: string,
      relation: CompanyPerson,
    ) =>
      await client<CompanyPerson>(
        `/person/${personId}/company/${companyPersonId}`,
        {
          method: "POST",
          body: relation,
        },
      ),

    deleteCompanyRelationById: async (
      personId: string,
      companyPersonId: string,
    ) => {
      await client<unknown>(`/person/${personId}/company/${companyPersonId}`, {
        method: "DELETE",
      });
    },

    // Communication items for person
    getCommunicationItems: async (personId: string) =>
      await client<CommunicationItem[]>(
        `/person/${personId}/communicationItems`,
      ),

    getCommunicationItemById: async (
      personId: string,
      communicationItemId: string,
    ) =>
      await client<CommunicationItem>(
        `/person/${personId}/communicationItem/${communicationItemId}`,
      ),

    updateCommunicationItemById: async (
      personId: string,
      communicationItemId: string,
      item: CommunicationItem,
    ) =>
      await client<CommunicationItem>(
        `/person/${personId}/communicationItem/${communicationItemId}`,
        {
          method: "POST",
          body: item,
        },
      ),

    deleteCommunicationItemById: async (
      personId: string,
      communicationItemId: string,
    ) => {
      await client<unknown>(
        `/person/${personId}/communicationItem/${communicationItemId}`,
        {
          method: "DELETE",
        },
      );
    },

    createCommunicationItem: async (
      personId: string,
      item: CommunicationItem,
    ) =>
      await client<CommunicationItem>(`/person/${personId}/communicationitem`, {
        method: "POST",
        body: item,
      }),
  };
}
