import { FC, ReactElement, ReactNode } from 'react';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames';
import styles from '../../app.module.scss';

interface INavigateLinkProps {
  to: string;
  children: ReactNode;
}

export const NavigateLink: FC<INavigateLinkProps> = ({
  to,
  children,
}): ReactElement => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        classNames({
          [styles.link]: true,
          [styles.hover]: true,
          [styles.hover__active]: isActive,
        })
      }
    >
      {children}
    </NavLink>
  );
};
