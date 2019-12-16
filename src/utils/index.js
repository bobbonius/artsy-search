import ApolloClient from "apollo-boost";
import { gql } from "apollo-boost";

export const baseUrl = "https://artsy.net";

export function useHelpers() {
  const truncateString = (string, maxLength, seperator = "...") => {
    if (string.length > maxLength) {
      return string.slice(0, maxLength - seperator.length) + seperator;
    }
    return string;
  };

  return {
    truncateString
  }
}


export const Client = new ApolloClient({
  uri: "https://metaphysics-production.artsy.net"
});

export const GET_SEARCH_RESULTS = gql`
  query getSearchResults($query: String!, $entities: [SearchEntity]) {
    search(query: $query, first: 5, entities: $entities) {
      edges {
        node {
          displayLabel
          imageUrl
          href
        }
      }
      pageInfo {
        endCursor
        hasNextPage
      }
    }
  }
`;
