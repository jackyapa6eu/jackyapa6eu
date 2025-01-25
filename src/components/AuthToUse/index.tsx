import { FC } from 'react';
import { Link } from 'react-router-dom';

import styles from './styles/auth-to-use.module.scss';

interface IAuthToUseProps {
  text: string;
  from?: string;
}

export const AuthToUse: FC<IAuthToUseProps> = ({
  text = 'Необходимо',
  from = '/',
}) => (
  <p className={styles.authToUse}>
    {text}
    <Link to="/auth" state={{ from }}>
      {' '}
      Авторизоваться
    </Link>
  </p>
);
