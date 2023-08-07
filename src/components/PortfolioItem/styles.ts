import styled from 'styled-components';
import Link from 'next/link';

interface CardProps {
  bg?: string;
  border?: string;
  shadow?: string;
  hborder?: string;
}

export const Card = styled.div<CardProps>`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 120px 1fr 24px;
  grid-template-areas:
    'image title'
    'description description'
    'deployLink githubLink';
  position: relative;
  column-gap: 15px;
  transition: all 0.2s ease;
  background: ${(p) => p.bg ?? 'gray'};
  padding: 15px;
  width: 100%;
  height: 300px;
  border-radius: 5px;
  border: ${(p) => `2px solid ${p.border ?? '#83c5be'}`};
  cursor: pointer;
  transform-style: preserve-3d;
  box-shadow: ${(p) => `0px 0px 0px 0px ${p.shadow ?? '#d2b48c'}`};

  &:hover {
    box-shadow: ${(p) => `0px 0px 5px 5px ${p.shadow ?? '#ff7f50'}`};
    border: ${(p) => `2px solid ${p.hborder ?? '#dcdcdc'}`};
  }

  @media screen and (max-width: 580px) {
    & {
      grid-template-columns: 1fr 1fr 1fr 1fr;
      grid-template-rows: min-content min-content 1fr 24px;
      row-gap: 10px;
      grid-template-areas:
    'image image image .'
    'title title title title'
    'description description description description'
    'deployLink deployLink githubLink githubLink';
    }
  }

  @media screen and (max-width: 460px) {
    & {
      grid-template-areas:
    'image image image image'
    'title title title title'
    'description description description description'
    'deployLink deployLink githubLink githubLink';
    }
`;

export const CardImageContainer = styled.div`
  height: fit-content;
  position: relative;
  grid-area: image;
  max-height: 100%;
  left: 0;
  top: -25px;
  &:hover img {
    box-shadow: 0 3px 3px rgba(0, 0, 0, 0.3);
  }
`;

export const CardImage = styled.img`
  width: 100%;
  position: relative;

  box-shadow: 0 10px 15px rgba(0, 0, 0, 0.3);
  object-fit: contain;
  object-position: top;
  transition: all 0.3s ease;
`;

export const CardTitle = styled.p`
  grid-area: title;
  margin: 0;
  font-size: 14px;
  font-weight: 500;
`;

interface CardLinkProps {
  gridarea?: string;
  border?: string;
  justify?: string;
  align?: string;
}

export const CardLink = styled.a<CardLinkProps>`
  text-decoration: none;
  grid-area: ${(p) => p.gridarea ?? ''};
  width: fit-content;
  height: fit-content;
  justify-self: ${(p) => p.justify ?? 'start'};
  align-self: ${(p) => p.align ?? 'end'};
  box-shadow: ${(p) => `0 6px 10px ${p.border ?? '#ff7f50'}`};
  transition: all 0.3s ease;
  padding: 0.15em 0.35em;
  &:hover {
    box-shadow: ${(p) => `0 3px 3px ${p.border ?? '#ff7f50'}`};
  }

  @media screen and (max-width: 470px) {
    padding: 0 20px;
    text-align: center;
  }

  @media screen and (max-width: 420px) {
    padding: 0 7px;
  }
`;
