import type { $Fetch } from 'ofetch';

// Account reference (shared with other endpoints)
export interface Account {
  id: string;
  description: string;
}

// Account group reference
export interface AccountGroup {
  id: string;
  description: string;
}

// Publication privilege type reference
export interface PublicationPrivilegeType {
  id: string;
  description: string;
}

// Owner types for publication privileges
export type OwnerType = 'film';

// Base Publication Privilege interface
export interface PublicationPrivilege {
  id: string;
  account?: Account | null;
  accountGroup?: AccountGroup | null;
  endDate?: string | null;
  publicationPrivilege: PublicationPrivilegeType;
  startDate?: string | null;
}

// List item version (for array responses)
export interface PublicationPrivilegeListItem {
  id: string;
  account?: {
    id: string;
    description: string;
  } | null;
  accountGroup?: {
    id: string;
    description: string;
  } | null;
  endDate?: string | null;
  publicationPrivilege: {
    id: string;
    description: string;
  };
  startDate?: string | null;
}

// Create/Update publication privilege request
export interface CreatePublicationPrivilegeRequest {
  account?: {
    id: string;
    description: string;
  } | null;
  accountGroup?: {
    id: string;
    description: string;
  } | null;
  endDate?: string | null;
  publicationPrivilege: {
    id: string;
    description?: string;
  };
  startDate?: string | null;
}

export interface UpdatePublicationPrivilegeRequest extends PublicationPrivilege {}

// Film Publication Privileges endpoint interface
export interface FilmPublicationPrivilegesEndpoint {
  // Get all publication privileges for an owner
  getAllByOwner: (ownerType: OwnerType, ownerId: string) => Promise<PublicationPrivilegeListItem[]>;

  // CRUD operations for individual publication privileges
  getById: (ownerType: OwnerType, ownerId: string, publicationPrivilegeId: string) => Promise<PublicationPrivilege>;
  updateById: (ownerType: OwnerType, ownerId: string, publicationPrivilegeId: string, privilege: UpdatePublicationPrivilegeRequest) => Promise<PublicationPrivilege>;
  deleteById: (ownerType: OwnerType, ownerId: string, publicationPrivilegeId: string) => Promise<void>;

  // Create new publication privilege
  create: (ownerType: OwnerType, ownerId: string, privilege: CreatePublicationPrivilegeRequest) => Promise<PublicationPrivilege>;
}

/**
 * Creates the film publication privileges endpoint functions
 * @param client - The ofetch client instance
 * @returns Object with film publication privileges endpoint methods
 */
export function createFilmPublicationPrivilegesEndpoint(client: $Fetch): FilmPublicationPrivilegesEndpoint {
  return {
    // Get all publication privileges for an owner
    getAllByOwner: (ownerType: OwnerType, ownerId: string) => {
      return client<PublicationPrivilegeListItem[]>(`/${ownerType}/${ownerId}/publicationprivileges`);
    },

    // CRUD operations for individual publication privileges
    getById: (ownerType: OwnerType, ownerId: string, publicationPrivilegeId: string) => {
      return client<PublicationPrivilege>(`/${ownerType}/${ownerId}/publicationprivilege/${publicationPrivilegeId}`);
    },

    updateById: (ownerType: OwnerType, ownerId: string, publicationPrivilegeId: string, privilege: UpdatePublicationPrivilegeRequest) => {
      return client<PublicationPrivilege>(`/${ownerType}/${ownerId}/publicationprivilege/${publicationPrivilegeId}`, {
        method: 'POST',
        body: privilege,
      });
    },

    deleteById: (ownerType: OwnerType, ownerId: string, publicationPrivilegeId: string) => {
      return client<void>(`/${ownerType}/${ownerId}/publicationprivilege/${publicationPrivilegeId}`, {
        method: 'DELETE',
      });
    },

    // Create new publication privilege
    create: (ownerType: OwnerType, ownerId: string, privilege: CreatePublicationPrivilegeRequest) => {
      return client<PublicationPrivilege>(`/${ownerType}/${ownerId}/publicationPrivilege`, {
        method: 'POST',
        body: privilege,
      });
    },
  };
}
