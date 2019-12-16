import React, { useState } from "react";
import styled from "@emotion/styled";
import { keyframes } from "@emotion/core";
import { useQuery } from "@apollo/react-hooks";
import { Client, GET_SEARCH_RESULTS, useHelpers } from "../../utils";
import Icon from "../Icon";
import Filter from "../Filter";
import Card from "../Card";
import { MagnifyingGlass, LoadingIndicator, Clear } from "../../icons";

const SearchWrapper = styled.div`
  display: flex;
  border-radius: 8px;
  padding: 4px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: #f5f5f6;
  color: #99a1a3;
  &:focus-within {
    outline: none;
    background-color: white;
    box-shadow: 0px 4px 10px 1px rgba(215, 219, 220, 1);
    transition: box-shadow 0.1s ease-in-out;
    color: black;
  }
`;

const Input = styled.input`
  background-color: inherit;
  width: 100%;
  height: 3.5rem;
  font-size: inherit;
  outline: none;
`;

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const Rotate = styled.div`
  animation: ${rotate} 1s ease-in-out infinite;
`;

const SearchBar = () => {
  const initialQuery = "";
  const initialEntity = ["ARTICLE"];
  const initialTitle = "Articles";

  const [query, setQuery] = useState(initialQuery);
  const [entity, setEntity] = useState(initialEntity);
  const [title, setTitle] = useState(initialTitle);
  const { truncateString } = useHelpers();

  const { loading, error, data } = useQuery(GET_SEARCH_RESULTS, {
    variables: { query: query, entities: entity },
    client: Client
  });

  const handleChange = e => {
    e.preventDefault();
    setQuery(e.target.value);
  };

  const selectedFilter = e => {
    setEntity(e.target.value);
    setTitle(e.target.title);
  };

  const clearAll = e => {
    if (e) {
      setQuery(initialQuery);
      setEntity(initialEntity);
      setTitle(initialTitle);
    }
  };

  return (
    <>
      <SearchWrapper>
        <Icon size="26" margin="0.8">
          <MagnifyingGlass />
        </Icon>
        <Input
          onChange={handleChange}
          placeholder="Search by artist, gallery, style, theme, tag, etc."
          value={query}
        />
        {query && loading ? (
          <Rotate>
            <Icon size="26" margin="0.6">
              <LoadingIndicator />
            </Icon>
          </Rotate>
        ) : (
          ""
        )}
        {query && !loading ? (
          <Icon onClick={clearAll} clear size="26" margin="0.6">
            <Clear />
          </Icon>
        ) : (
          ""
        )}
      </SearchWrapper>
      {query && data ? <Filter selectedFilter={selectedFilter} /> : ""}
      {query && data && !loading ? (
        data.search.edges.map((result, index) => {
          const { displayLabel, imageUrl, href } = result.node;
          return (
            <Card
              displayLabel={truncateString(displayLabel, 40)}
              imageUrl={imageUrl}
              href={href}
              entity={title}
              key={index}
            />
          );
        })
      ) : (
        <h1>{error}</h1>
      )}
    </>
  );
};

export default SearchBar;
