import React, { FC, memo, useState } from 'react';
import { Card, CardImage, CardImageContainer, CardTitle } from './styles';
import portfolioActiveCitizenImage from '../../images/portfolioActiveCitizenImage.png';
import Color, { ColorThief } from 'color-thief-react';

interface IPortfolioItem {
  title: string;
  image: string;
}

const PortfolioItem: FC<IPortfolioItem> = ({ title, image }) => {
  const [rotation, setRotation] = useState({ x: 0, y: 0 });

  const handleMouseMove = (event) => {
    const card = event.currentTarget;
    const { left, top, width, height } = card.getBoundingClientRect();
    const mouseX = event.clientX - left;
    const mouseY = event.clientY - top;
    const centerX = width / 2;
    const centerY = height / 2;
    const maxRotation = 10; // Максимальный угол поворота

    const rotationX = ((mouseY - centerY) / centerY) * maxRotation;
    const rotationY = -((mouseX - centerX) / centerX) * maxRotation;

    setRotation({ x: rotationX, y: rotationY });
  };

  const handleMouseLeave = () => {
    setRotation({ x: 0, y: 0 });
  };
  return (
    <Card rotation={rotation} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
      <CardImageContainer>
        <CardImage src={portfolioActiveCitizenImage.src} alt={title} />
      </CardImageContainer>
      <CardTitle>{title}</CardTitle>
    </Card>
  );
};

export default memo(PortfolioItem);
