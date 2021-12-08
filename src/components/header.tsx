import { gql } from "@apollo/client";
import React from "react";
import { Link } from "react-router-dom";
import { PODCAST_FRAGMENT } from "../fragments";
import { useMe } from "../hooks/useMe";
import podcastLogo from "../images/logo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

const SEARCH_PODCASTS_QUERY = gql`
  query SearchPodcasts($input: SearchPodcastsInput!) {
    searchPodcasts(input: $input) {
      ok
      error
      totalPages
      totalCount
      podcasts {
        ...PodcastParts
      }
    }
  }
  ${PODCAST_FRAGMENT}
`;

export const Header = () => {
  const { data } = useMe();

  return (
    <header className="py-4 h-14">
      <div className="w-full h-full  px-5 xl:px-1 max-w-screen-2xl mx-auto flex justify-between items-center">
        <div className="w-26 flex justify-center items-center">
          <Link to="/">
            <img src={podcastLogo} className="w-8 mr-2" alt="Podcast" />
          </Link>
          <h1 className="text-2xl">Podcast</h1>
        </div>

        <form className=" w-2/4 h-11 md:w-2/4 flex items-center justify-center">
          <input
            type="search"
            placeholder="Search podcast"
            className="input border-0 bg-gray-200 w-full h-full rounded-md focus:bg-gray-50 focus:ring-black  focus:shadow-md"
          />
        </form>

        <div>
          <span>
            <Link to="/edit-profile">
              <FontAwesomeIcon icon={faUser} className="text-3xl" />
            </Link>
          </span>
        </div>
      </div>
    </header>
  );
};
