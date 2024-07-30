import { FC, ReactElement } from 'react';
import { NavigateLink } from '../NavigateLink';

import style from './styles/links.module.scss';

type ILink = {
  name: string;
  to: string;
};

const links: ILink[] = [
  { name: 'ОБО МНЕ', to: 'about' },
  { name: 'МЕДИА', to: 'media' },
  { name: 'ОТЗЫВЫ', to: 'feedback' },
];

export const Navigation: FC = (): ReactElement => {
  return (
    <nav className={style.links}>
      {links.map(({ name, to }) => (
        <NavigateLink key={to} to={to}>
          <span className={style.links__text}>{name}</span>
        </NavigateLink>
      ))}
    </nav>
  );
};
