import styled from 'styled-components';

export const AboutMeContainer = styled.article`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
  font-size: 16px;
  line-height: 1.6em;
  @media screen and (max-width: 600px) {
    font-size: 14px;
  }
`;

export const AboutMeParagraph = styled.p`
  margin: 0;
  font-weight: 400;
  display: inline;
  word-wrap: break-word;
`;

export const AboutMeSentence = styled.p`
  margin: 0;
  word-wrap: break-word;
`;
