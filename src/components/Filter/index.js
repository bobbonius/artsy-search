import React, { useRef, useEffect } from "react";
import styled from "@emotion/styled";
import { filters } from "../../utils";

const Button = styled.button`
  color: black;
  border-radius: 8px;
  background: #f5f5f6;
  font-size: inherit;
  padding: 1rem;
  text-align: center;
  outline: none;
  width: max-content;
  height: 100%;
  background-image: linear-gradient(
    rgba(255, 255, 255, 0.24),
    rgba(255, 255, 255, 0)
  );

  &:focus {
    color: white;
    background-color: rgb(0, 182, 240);
    text-shadow: 1px 0px 0px white;
    transition: text-shadow 0.1s;
  }
`;

const FilterWrapper = styled.div`
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: repeat(${props => props.items}, 1fr);
  scroll-snap-type: x mandatory;
  scroll-behavior: smooth;
  overflow-x: scroll;
  border-radius: 8px;
  &::-webkit-scrollbar {
    display: none; // Chrome
  }
  -ms-overflow-style: none;
  scrollbar-width: none;

  &:after {
    content: "";
    position: absolute;
    z-index: 1;
    top: 0;
    right: 15px;
    bottom: 484px;
    transform: translateY(84px);
    transition: transform 150ms, opacity 150ms
    pointer-events: none;
    background-image: linear-gradient(to right, rgba(255,255,255,0), white 90%);
    width: 10%;
  }
`;

const FilterItem = styled.div`
  scroll-snap-align: start;
`;

const Filter = ({ selectedFilter }) => {
  const carouselRef = useRef();

  useEffect(() => {
    const limit = carouselRef.current.children.length - 1;
    let position = 0;

    const scroll = () => {
      carouselRef.current.scrollTo(75 * position, 0);
    };

    const incrementPosition = () => {
      position++;
      if (position > limit) {
        position = limit;
      }
    };

    const decrementPosition = () => {
      position--;
      if (position < 0) {
        position = 0;
      }
    };

    const handleScroll = e => {
      const scrollIsTouchPad = e.deltaX % 1 === 0 && e.deltaY % 1 === 0;
      const scrollWheelUp = e.deltaX === 0 && e.deltaY > 4;
      const scrollWheelDown = e.deltaX === 0 && e.deltaY < 4;

      if (scrollIsTouchPad) {
        return;
      }

      if (scrollWheelUp) {
        incrementPosition();
        scroll();
      }

      if (scrollWheelDown) {
        decrementPosition();
        scroll();
      }
    };

    carouselRef.current.addEventListener("wheel", handleScroll);
  }, [carouselRef]);

  return (
    <>
      <FilterWrapper items={filters.length} ref={carouselRef}>
        {filters.map((filter, index) => {
          const { entity, title } = filter;
          return (
            <FilterItem key={index}>
              <Button onClick={selectedFilter} value={entity} title={title}>
                {title}
              </Button>
            </FilterItem>
          );
        })}
      </FilterWrapper>
    </>
  );
};

export default Filter;
