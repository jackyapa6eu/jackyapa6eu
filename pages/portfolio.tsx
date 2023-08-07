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
  {
    id: 1,
    title: 'Активный гражданин 2025',
    bg: '#f3eff6',
    border: '#916d86',
    hBorder: '#3952b2',
    shadow: '#916d86',
    deployLink: 'https://jackyapa6eu.github.io/active-citizen-2025/#/',
    githubLink: 'https://github.com/jackyapa6eu/active-citizen-2025',
    description: 'Работа в рамках хакатона Яндекс Практикум.',
  },
  {
    id: 2,
    title: 'Активный гражданин 2025',
    bg: '#f3eff6',
    border: '#916d86',
    hBorder: '#3952b2',
    shadow: '#916d86',
    deployLink: 'https://jackyapa6eu.github.io/active-citizen-2025/#/',
    githubLink: 'https://github.com/jackyapa6eu/active-citizen-2025',
    description: 'Работа в рамках хакатона Яндекс Практикум.',
  },
  {
    id: 3,
    title: 'Активный гражданин 2025',
    bg: '#f3eff6',
    border: '#916d86',
    hBorder: '#3952b2',
    shadow: '#916d86',
    deployLink: 'https://jackyapa6eu.github.io/active-citizen-2025/#/',
    githubLink: 'https://github.com/jackyapa6eu/active-citizen-2025',
    description: 'Работа в рамках хакатона Яндекс Практикум.',
  },
];

const Portfolio = () => {
  return (
    <PortfolioContainer>
      {arr.map((card) => (
        <PortfolioItem key={card.id} card={card} />
      ))}
    </PortfolioContainer>
  );
};

export default Portfolio;
