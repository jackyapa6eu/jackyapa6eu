import styled from 'styled-components';

export const Card = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-areas: 'image title';
  gap: 15px;
  position: relative;
  transition: all 0.2s ease;
  background: #83c5be;
  padding: 15px;
  width: 100%;
  height: 300px;
  border-radius: 5px;
  border: 2px solid #83c5be;
  cursor: pointer;
  transform-style: preserve-3d;
  box-shadow: 0px 0px 0px 0px #d2b48c;

  &:hover {
    box-shadow: 0px 0px 5px 5px #ff7f50;
    border: 2px solid #dcdcdc;
  }

  @media screen and (max-width: 600px) {
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: min-content;
    grid-template-areas:
      'image image .'
      'title title title';
  }

  @media screen and (max-width: 500px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: min-content;
    grid-template-areas:
      'image image image .'
      'title title title .';
  }

  @media screen and (max-width: 440px) {
    grid-template-columns: 1fr;
    grid-template-rows: min-content;
    grid-template-areas:
      'image'
      'title';
  }
`;

export const CardImageContainer = styled.div`
  height: fit-content;
  position: relative;
  grid-area: image;
`;

export const CardImage = styled.img`
  width: 100%;
  // height: 170px;
  position: relative;
  left: 0;
  top: -25px;
  box-shadow: 0 10px 15px rgba(0, 0, 0, 0.3);
  object-fit: contain;
  object-position: top;
  transition: all 0.3s ease;
  &:hover {
    box-shadow: 0 3px 3px rgba(0, 0, 0, 0.3);
  }
`;

export const CardTitle = styled.p`
  grid-area: title;
  margin: 0;
  font-size: 14px;
  font-weight: 500;
`;
