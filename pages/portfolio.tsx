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
    id: 6,
    title: 'Big star-hall translation',
    bg: '#6e8382',
    border: '#ada683',
    hBorder: '#0a0908',
    shadow: '#ada683',
    previewLink: 'https://i.ibb.co/dWQ8vjx/portfolio-Translation-Image.jpg',
    description: 'Коммерческий проект для Московского планетария.',
    deployLink: 'http://91.229.221.53/',
  },
  {
    id: 5,
    title: 'Truestore',
    bg: '#e7e7e7',
    border: '#3367b4',
    hBorder: '#90584e',
    shadow: '#3367b4',
    deployLink: 'https://thetruestore.netlify.app/applications',
    githubLink: 'https://github.com/jackyapa6eu/bootcamp_team3',
    previewLink: 'https://i.ibb.co/kqpmdTK/portfolio-True-Store-Image.jpg',
    description: 'Проект команды №3 в рамках буткема от red_mad_robot.',
  },
  {
    id: 4,
    title: 'Единый личный кабинет питомца “Котопёс”',
    bg: '#cfc1b0',
    border: '#854336',
    hBorder: '#323220',
    shadow: '#a4a230',
    deployLink: 'https://elk-kotopes.web.app/',
    githubLink: 'https://github.com/jackyapa6eu/bootcamp_team5_frontend',
    previewLink: 'https://i.ibb.co/Q8Jm2fF/portfolio-ELKKotopes-Image.jpg',
    description: 'Проект команды №5 в рамках буткема от red_mad_robot.',
  },
  {
    id: 1,
    title: 'Napoleon',
    bg: '#dbd5c5',
    border: '#7c524d',
    hBorder: '#a38153',
    shadow: '#7c524d',
    deployLink: 'https://napoleon-tech.web.app/',
    githubLink: 'https://github.com/jackyapa6eu/napoleon-tech',
    previewLink: 'https://i.ibb.co/gmYRL7J/portfolio-Napoleon-Tech.jpg',
    description: 'Финальный проект frontend-стажировки в СберМаркет.',
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
    previewLink: 'https://i.ibb.co/Qm8sZ9y/portfolio-Active-Citizen-Image.png',
    description: 'Работа в рамках хакатона Яндекс Практикум.',
  },
  {
    id: 3,
    title: 'Dreamer-online',
    bg: '#b6bbb3',
    border: '#4d4e4e',
    hBorder: '#4d4e4e',
    shadow: '#979ead',
    deployLink: 'https://dreamer-online-backup.web.app/',
    githubLink: 'https://github.com/jackyapa6eu/dreamer-online',
    previewLink: 'https://i.ibb.co/G0kbnNq/portfolio-Dreamer-Online-Image.jpg',
    description: 'Мой первый frontend проект. Сайт для мобильной MMORPG.',
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
