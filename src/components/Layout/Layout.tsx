import React, { FC, ReactNode } from 'react';
import MainContainer from '../../containers';
import NavigationMenu from '../NavigationMenu';
import BurgerMenu from '../BurgerMenu';

interface ILayout {
  children: ReactNode;
}

const Layout: FC<ILayout> = ({ children }) => {
  return (
    <div>
      <NavigationMenu />
      <BurgerMenu />
      <div>{children}</div>
    </div>
  );
};

export default Layout;
