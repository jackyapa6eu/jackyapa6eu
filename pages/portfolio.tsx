import React from 'react';
import styled from 'styled-components';
import PortfolioItem from '../src/components/PortfolioItem/PortfolioItem';
import portfolioActiveCitizenImage from '../src/images/portfolioActiveCitizenImage.png';

export const PortfolioContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr;
  gap: 15px;
`;

const arr = [
  { id: 1, title: 'Активный гражданин 2025', image: portfolioActiveCitizenImage },
  { id: 2, title: 'Активный гражданин 2025', image: portfolioActiveCitizenImage },
  { id: 3, title: 'Активный гражданин 2025', image: portfolioActiveCitizenImage },
];

const Portfolio = () => {
  return (
    <PortfolioContainer>
      {arr.map((card) => (
        <PortfolioItem key={card.id} title={card.title} img={card.image} />
      ))}
    </PortfolioContainer>
  );
};

export default Portfolio;
