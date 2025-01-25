import { FC } from 'react';
import { Icon, NavigateLink } from '../index';
import { Dropdown } from 'antd';
import type { MenuProps } from 'antd';

import { ROUTES } from '../../const';

import { Navigation } from '../Navigation';

import styles from './styles/header.module.scss';

const items: MenuProps['items'] = ROUTES.map(({ to, name }) => ({
  key: to,
  label: (
    <div className={styles.header__navlink__wrapper}>
      <NavigateLink fullWidth to={to}>
        <span className={styles.header__navlink__text}>{name}</span>
      </NavigateLink>
    </div>
  ),
}));

export const Header: FC = () => {
  return (
    <header className={styles.header}>
      <NavigateLink to="/">
        <Icon name="Logo" size="xl" />
      </NavigateLink>

      <Navigation />
      <div className={styles.header__burgerWrapper}>
        <Dropdown menu={{ items: items }}>
          <div>
            <Icon name="BurgerMenu" size="large" />
          </div>
        </Dropdown>
      </div>
    </header>
  );
};
