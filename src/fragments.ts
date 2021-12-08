import { gql } from "@apollo/client";
export const PODCAST_FRAGMENT = gql`
  fragment PodcastParts on Podcast {
    id
    title
    category
    rating
    episodes {
      id
      title
      category
    }
    owner {
      id
      username
    }
    reviews {
      id
      title
      text
      creater {
        id
        username
      }
    }
    episodeCount
  }
`;
