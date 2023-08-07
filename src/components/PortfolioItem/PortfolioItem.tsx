import React, { FC, memo, useState } from 'react';
import { Card, CardImage, CardImageContainer, CardTitle, CardLink } from './styles';
import portfolioActiveCitizenImage from '../../images/portfolioActiveCitizenImage.png';
import Link from 'next/link';

interface IPortfolioItem {
  card: {
    id: number;
    title: string;
    bg: string;
    border: string;
    hBorder: string;
    shadow: string;
    deployLink: string;
    githubLink: string;
    description: string;
  };
}

const PortfolioItem: FC<IPortfolioItem> = ({ card }) => {
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
      bg={card.bg}
      border={card.border}
      hborder={card.hBorder}
      shadow={card.shadow}
    >
      <CardImageContainer>
        <CardImage src={portfolioActiveCitizenImage.src} alt={card.title} />
      </CardImageContainer>
      <CardTitle>{card.title}</CardTitle>
      <p style={{ margin: '0', gridArea: 'description', paddingBottom: '3px' }}>
        {card.description}
      </p>
      <CardLink
        href={card.deployLink}
        gridarea='deployLink'
        border={card.border}
        target='_blank'
        rel='noreferrer'
      >
        Открыть сайт
      </CardLink>
      <CardLink
        href={card.githubLink}
        gridarea='githubLink'
        border={card.border}
        target='_blank'
        rel='noreferrer'
        justify='end'
      >
        Посмотреть код
      </CardLink>
    </Card>
  );
};

export default memo(PortfolioItem);
