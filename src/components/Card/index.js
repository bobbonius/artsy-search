import React from "react";
import styled from "@emotion/styled";
import Icon from "../Icon";
import { ImagePlaceholder } from "../../icons/";
import { baseUrl } from "../../utils";

const CardGrid = styled.div`
  display: grid;
  grid-template-rows: 50% 50%;
  grid-template-columns: 1fr;
  grid-template-areas:
    "header image"
    "body image";
`;

const CardHeader = styled.span`
  grid-area: header;
  margin-left: 1rem;
`;

const CardBody = styled.span`
  grid-area: body;
  margin-left: 1rem;
  color: #99a1a3;
`;

const CardImage = styled.img`
  grid-area: image;
  width: 56px;
  height: 56px;
  border-radius: 50%;
`;

const ImagePlaceholderWrapper = styled.div`
  grid-area: image;
  display: grid;
  color: #99a1a3;
  justify-content: center;
  align-items: center;
  width: 56px;
  height: 56px;
  border-radius: 50%;
  background-color: #f3f3f5;
  justify-content: center;
  align-items: center;
`;

const Link = styled.a`
  color: black;
  &:hover {
    color: darkblue;
  }
`;

const Card = ({ displayLabel, imageUrl, entity, href }) => {
  return (
    <>
      <Link href={baseUrl + href}>
        <CardGrid>
          <CardHeader>{displayLabel}</CardHeader>
          <CardBody>{entity}</CardBody>
          {imageUrl ? (
            <CardImage src={imageUrl} />
          ) : (
            <ImagePlaceholderWrapper>
              <Icon size="32">
                <ImagePlaceholder />
              </Icon>
            </ImagePlaceholderWrapper>
          )}
        </CardGrid>
      </Link>
    </>
  );
};

export default Card;
