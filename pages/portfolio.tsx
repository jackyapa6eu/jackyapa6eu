import React from 'react';
import styled from 'styled-components';
import PortfolioItem from '../src/components/PortfolioItem/PortfolioItem';

export const PortfolioContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr;
  gap: 15px;
`;

const arr = [
  { id: 1, title: 'Активный гражданин 2025' },
  { id: 2, title: 'Активный гражданин 2025' },
  { id: 3, title: 'Активный гражданин 2025' },
];

const Portfolio = () => {
  return (
    <PortfolioContainer>
      {arr.map((card) => (
        <PortfolioItem key={card.id} title={card.title} />
      ))}
    </PortfolioContainer>
  );
};

export default Portfolio;
