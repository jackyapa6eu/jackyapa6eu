import styled from 'styled-components';

export const AboutMeContainer = styled.article`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const AboutMeParagraph = styled.p`
  margin: 0;
  font-size: 14px;
  font-weight: 400;

  @media screen and (max-width: 600px) {
    font-size: 13px;
  }

  @media screen and (max-width: 510px) {
    font-size: 12px;
  }
`;
