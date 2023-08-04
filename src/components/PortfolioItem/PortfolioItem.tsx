import React, { FC, memo, MouseEventHandler, useState } from 'react';
import { Card, CardImage, CardImageContainer, CardTitle } from './styles';
import portfolioActiveCitizenImage from '../../images/portfolioActiveCitizenImage.png';

interface IPortfolioItem {
  title: string;
}

const PortfolioItem: FC<IPortfolioItem> = ({ title }) => {
  const [rotation, setRotation] = useState({ x: 0, y: 0 });

  const handleMouseMove = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent> | undefined
  ): void => {
    if (!event) return;
    const card = event.currentTarget as HTMLDivElement;
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
    <Card
      style={{
        transform: `perspective(1000px) rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <CardImageContainer>
        <CardImage src={portfolioActiveCitizenImage.src} alt={title} />
      </CardImageContainer>
      <CardTitle>{title}</CardTitle>
    </Card>
  );
};

export default memo(PortfolioItem);
