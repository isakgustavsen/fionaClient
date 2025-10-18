import type { $Fetch } from 'ofetch';

// Account reference (shared with other endpoints)
export interface Account {
  id: string;
  description: string;
}

// User reference (shared with other endpoints)
export interface User {
  id: string;
  description: string;
}

// Recommendation type reference
export interface RecommendationType {
  id: string;
  description: string;
}

// Base Recommendation interface
export interface Recommendation {
  id: string;
  account: Account;
  recommendation: RecommendationType;
  review: string;
  createdBy: User;
  createdOn: string;
  updatedBy: User;
  updatedOn: string;
}

// List item version (for array responses)
export interface RecommendationListItem {
  id: string;
  account: Account;
  recommendation: RecommendationType;
  review: string;
  createdBy: User;
  createdOn: string;
  updatedBy: User;
  updatedOn: string;
}

// Create/Update recommendation request
export interface CreateRecommendationRequest {
  account: {
    id: string;
    description: string;
  };
  recommendation: {
    id: string;
    description?: string;
  };
  review: string;
}

export interface UpdateRecommendationRequest extends CreateRecommendationRequest {}

// Film Recommendations endpoint interface
export interface FilmRecommendationsEndpoint {
  // Get all recommendations for a film
  getAllByFilm: (filmId: string) => Promise<RecommendationListItem[]>;

  // CRUD operations for individual recommendations
  getById: (filmId: string, recommendationId: string) => Promise<Recommendation>;
  updateById: (filmId: string, recommendationId: string, recommendation: UpdateRecommendationRequest) => Promise<Recommendation>;
  deleteById: (filmId: string, recommendationId: string) => Promise<void>;

  // Create new recommendation
  create: (filmId: string, recommendation: CreateRecommendationRequest) => Promise<Recommendation>;
}

/**
 * Creates the film recommendations endpoint functions
 * @param client - The ofetch client instance
 * @returns Object with film recommendations endpoint methods
 */
export function createFilmRecommendationsEndpoint(client: $Fetch): FilmRecommendationsEndpoint {
  return {
    // Get all recommendations for a film
    getAllByFilm: (filmId: string) => {
      return client<RecommendationListItem[]>(`/film/${filmId}/recommendations`);
    },

    // CRUD operations for individual recommendations
    getById: (filmId: string, recommendationId: string) => {
      return client<Recommendation>(`/film/${filmId}/recommendation/${recommendationId}`);
    },

    updateById: (filmId: string, recommendationId: string, recommendation: UpdateRecommendationRequest) => {
      return client<Recommendation>(`/film/${filmId}/recommendation/${recommendationId}`, {
        method: 'POST',
        body: recommendation,
      });
    },

    deleteById: (filmId: string, recommendationId: string) => {
      return client<void>(`/film/${filmId}/recommendation/${recommendationId}`, {
        method: 'DELETE',
      });
    },

    // Create new recommendation
    create: (filmId: string, recommendation: CreateRecommendationRequest) => {
      return client<Recommendation>(`/film/${filmId}/recommendation`, {
        method: 'POST',
        body: recommendation,
      });
    },
  };
}
