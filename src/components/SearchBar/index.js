import React, { useState } from "react";
import styled from "@emotion/styled";

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

const SearchBar = () => {
  return (
    <>
      <SearchWrapper>
        <Input />
      </SearchWrapper>
    </>
  );
};

export default SearchBar
