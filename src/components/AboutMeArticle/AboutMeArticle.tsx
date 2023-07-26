import React, { FC, memo } from 'react';
import { AboutMeContainer, AboutMeParagraph } from './styles';

interface IAboutMeArticle {
  text: string[];
}

const AboutMeArticle: FC<IAboutMeArticle> = ({ text }) => {
  return (
    <AboutMeContainer>
      {text.map((paragraph) => (
        <AboutMeParagraph key={paragraph}>{paragraph}</AboutMeParagraph>
      ))}
    </AboutMeContainer>
  );
};

export default memo(AboutMeArticle);
