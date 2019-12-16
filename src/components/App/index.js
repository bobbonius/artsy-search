import React from "react";
import styled from "@emotion/styled";
import SearchBar from "../../components/SearchBar"

const Container = styled.div`
  display: grid;
  grid-gap: 1.5rem;
  position: relative;
  padding-left: 1rem;
  padding-right: 1rem;
  max-width: 35rem;
  margin: 2rem auto;
`;

const App = () => {
  return (
    <>
      <Container>
        <SearchBar />
      </Container>
    </>
  );
};

export default App;
