/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { SearchPodcastsInput } from "./globalTypes";

// ====================================================
// GraphQL query operation: SearchPodcasts
// ====================================================

export interface SearchPodcasts_searchPodcasts_podcasts_episodes {
  __typename: "Episode";
  id: number;
  title: string;
  category: string;
}

export interface SearchPodcasts_searchPodcasts_podcasts_owner {
  __typename: "User";
  id: number;
  username: string;
}

export interface SearchPodcasts_searchPodcasts_podcasts_reviews_creater {
  __typename: "User";
  id: number;
  username: string;
}

export interface SearchPodcasts_searchPodcasts_podcasts_reviews {
  __typename: "Review";
  id: number;
  title: string;
  text: string;
  creater: SearchPodcasts_searchPodcasts_podcasts_reviews_creater;
}

export interface SearchPodcasts_searchPodcasts_podcasts {
  __typename: "Podcast";
  id: number;
  title: string;
  category: string;
  rating: number;
  episodes: SearchPodcasts_searchPodcasts_podcasts_episodes[];
  owner: SearchPodcasts_searchPodcasts_podcasts_owner;
  reviews: SearchPodcasts_searchPodcasts_podcasts_reviews[];
  episodeCount: number;
}

export interface SearchPodcasts_searchPodcasts {
  __typename: "SearchPodcastsOutput";
  ok: boolean;
  error: string | null;
  totalPages: number | null;
  totalCount: number | null;
  podcasts: SearchPodcasts_searchPodcasts_podcasts[] | null;
}

export interface SearchPodcasts {
  searchPodcasts: SearchPodcasts_searchPodcasts;
}

export interface SearchPodcastsVariables {
  input: SearchPodcastsInput;
}
