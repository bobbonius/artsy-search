import React from "react";
import styled from "@emotion/styled";

const Wrapper = styled.span`
  display: inline-block;
  vertical-align: middle;
  min-width: ${props => props.size}px;
  min-height: ${props => props.size}px;
  position: relative;
  color: inherit;
  margin: ${props => props.margin}rem;
  &:hover {
    cursor: ${props => (props.clear ? "pointer" : "default")};
  }
`;

const Svg = styled.svg`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  height: 100%;
  width: 100%;
  color: inherit;
  fill: currentColor;
`;

const Icon = ({ children, onClick, clear, size, margin }) => (
  <Wrapper onClick={onClick} clear={clear} size={size} margin={margin}>
    <Svg
      fillRule="evenodd"
      clipRule="evenodd"
      strokeLinejoin="round"
      strokeMiterlimit="1.414"
      xmlns="http://www.w3.org/2000/svg"
      role="presentation"
      focusable="false"
      viewBox="0 0 32 32"
      preserveAspectRatio="xMidYMid meet"
      fit
    >
      {children}
    </Svg>
  </Wrapper>
);

export default Icon;
