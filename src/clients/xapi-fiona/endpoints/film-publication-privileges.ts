import type { $Fetch } from "ofetch";

import type {
  OwnerType,
  PublicationPrivilege,
} from "../types/film-publication-privileges";

// Film Publication Privileges endpoint interface
export interface FilmPublicationPrivilegesEndpoint {
  // Get all publication privileges for an owner
  getAllByOwner: (
    ownerType: OwnerType,
    ownerId: string,
  ) => Promise<PublicationPrivilege[]>;

  // CRUD operations for individual publication privileges
  getById: (
    ownerType: OwnerType,
    ownerId: string,
    publicationPrivilegeId: string,
  ) => Promise<PublicationPrivilege>;
  updateById: (
    ownerType: OwnerType,
    ownerId: string,
    publicationPrivilegeId: string,
    privilege: PublicationPrivilege,
  ) => Promise<PublicationPrivilege>;
  deleteById: (
    ownerType: OwnerType,
    ownerId: string,
    publicationPrivilegeId: string,
  ) => Promise<void>;

  // Create new publication privilege
  create: (
    ownerType: OwnerType,
    ownerId: string,
    privilege: PublicationPrivilege,
  ) => Promise<PublicationPrivilege>;
}

/**
 * Creates the film publication privileges endpoint functions
 * @param client - The ofetch client instance
 * @returns Object with film publication privileges endpoint methods
 */
export function createFilmPublicationPrivilegesEndpoint(
  client: $Fetch,
): FilmPublicationPrivilegesEndpoint {
  return {
    // Get all publication privileges for an owner
    getAllByOwner: async (ownerType: OwnerType, ownerId: string) =>
      await client<PublicationPrivilege[]>(
        `/${ownerType}/${ownerId}/publicationprivileges`,
      ),

    // CRUD operations for individual publication privileges
    getById: async (
      ownerType: OwnerType,
      ownerId: string,
      publicationPrivilegeId: string,
    ) =>
      await client<PublicationPrivilege>(
        `/${ownerType}/${ownerId}/publicationprivilege/${publicationPrivilegeId}`,
      ),

    updateById: async (
      ownerType: OwnerType,
      ownerId: string,
      publicationPrivilegeId: string,
      privilege: PublicationPrivilege,
    ) =>
      await client<PublicationPrivilege>(
        `/${ownerType}/${ownerId}/publicationprivilege/${publicationPrivilegeId}`,
        {
          method: "POST",
          body: privilege,
        },
      ),

    deleteById: async (
      ownerType: OwnerType,
      ownerId: string,
      publicationPrivilegeId: string,
    ) => {
      await client<unknown>(
        `/${ownerType}/${ownerId}/publicationprivilege/${publicationPrivilegeId}`,
        {
          method: "DELETE",
        },
      );
    },

    // Create new publication privilege
    create: async (
      ownerType: OwnerType,
      ownerId: string,
      privilege: PublicationPrivilege,
    ) =>
      await client<PublicationPrivilege>(
        `/${ownerType}/${ownerId}/publicationPrivilege`,
        {
          method: "POST",
          body: privilege,
        },
      ),
  };
}
