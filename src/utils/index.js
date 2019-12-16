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
  };
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

export const filters = [
  { entity: "ARTIST", title: "Artists" },
  { entity: "ARTWORK", title: "Artworks" },
  { entity: "ARTICLE", title: "Articles" },
  { entity: "CITY", title: "Cities" },
  { entity: "COLLECTION", title: "Collections" },
  { entity: "FAIR", title: "Fairs" },
  { entity: "FEATURE", title: "Features" },
  { entity: "GALLERY", title: "Galleries" },
  { entity: "GENE", title: "Genes" },
  { entity: "INSTITUTION", title: "Institutions" },
  { entity: "PROFILE", title: "Profiles" },
  { entity: "SALE", title: "Sales" },
  { entity: "SHOW", title: "Shows" },
  { entity: "TAG", title: "Tags" }
];
