import React, {
  LazyExoticComponent,
  ComponentType,
  SVGProps,
  lazy as _lazy,
} from 'react';

type ImportFn<T> = () => Promise<{ default: T }>;

export const lazy = <T extends ComponentType<never>>(
  importFn: ImportFn<T>,
): LazyExoticComponent<T> => {
  return _lazy(async () => {
    const m = await importFn();
    return { default: m.default };
  });
};

type IconComponent = LazyExoticComponent<
  React.ComponentType<SVGProps<SVGSVGElement>>
>;

type Icons = {
  [key: string]: IconComponent;
};

export const icons: Icons = {
  BurgerMenu: lazy(() => import('../../assets/icons/burger.svg?react')),
  Logo: lazy(() => import('../../assets/icons/logo.svg?react')),
};
