import type { $Fetch } from "ofetch";

import type { Recommendation } from "../types/film-recommendations";

interface RecommendationRequest
  extends Omit<
    Recommendation,
    "id" | "createdOn" | "updatedOn" | "createdBy" | "updatedBy"
  > {}

// Film Recommendations endpoint interface
export interface FilmRecommendationsEndpoint {
  // Get all recommendations for a film
  getAllByFilm: (filmId: string) => Promise<Recommendation[]>;

  // CRUD operations for individual recommendations
  getById: (
    filmId: string,
    recommendationId: string,
  ) => Promise<Recommendation>;
  updateById: (
    filmId: string,
    recommendationId: string,
    recommendation: RecommendationRequest,
  ) => Promise<Recommendation>;
  deleteById: (filmId: string, recommendationId: string) => Promise<void>;

  // Create new recommendation
  create: (
    filmId: string,
    recommendation: RecommendationRequest,
  ) => Promise<Recommendation>;
}

/**
 * Creates the film recommendations endpoint functions
 * @param client - The ofetch client instance
 * @returns Object with film recommendations endpoint methods
 */
export function createFilmRecommendationsEndpoint(
  client: $Fetch,
): FilmRecommendationsEndpoint {
  return {
    // Get all recommendations for a film
    getAllByFilm: async (filmId: string) =>
      await client<Recommendation[]>(`/film/${filmId}/recommendations`),

    // CRUD operations for individual recommendations
    getById: async (filmId: string, recommendationId: string) =>
      await client<Recommendation>(
        `/film/${filmId}/recommendation/${recommendationId}`,
      ),

    updateById: async (
      filmId: string,
      recommendationId: string,
      recommendation: RecommendationRequest,
    ) =>
      await client<Recommendation>(
        `/film/${filmId}/recommendation/${recommendationId}`,
        {
          method: "POST",
          body: recommendation,
        },
      ),

    deleteById: async (filmId: string, recommendationId: string) => {
      await client<unknown>(
        `/film/${filmId}/recommendation/${recommendationId}`,
        {
          method: "DELETE",
        },
      );
    },

    // Create new recommendation
    create: async (filmId: string, recommendation: RecommendationRequest) =>
      await client<Recommendation>(`/film/${filmId}/recommendation`, {
        method: "POST",
        body: recommendation,
      }),
  };
}
