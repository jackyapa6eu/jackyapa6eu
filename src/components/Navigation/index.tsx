import { FC } from 'react';
import { NavigateLink } from '../NavigateLink';
import { ROUTES } from '../../const';

import style from './styles/links.module.scss';

export const Navigation: FC = () => {
  return (
    <nav className={style.links}>
      {ROUTES.map(({ name, to }) => (
        <NavigateLink key={to} to={to}>
          <span className={style.links__text}>{name}</span>
        </NavigateLink>
      ))}
    </nav>
  );
};
