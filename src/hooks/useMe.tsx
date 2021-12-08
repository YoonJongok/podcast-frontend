import { gql, useQuery } from "@apollo/client";
import { Me } from "../__generated__/Me";

const ME_QUERY = gql`
  query Me {
    me {
      id
      email
      role
    }
  }
`;
export const useMe = () => {
  return useQuery<Me>(ME_QUERY);
};
