import { FC } from 'react';
import classNames from 'classnames';

import styles from './styles/main.module.scss';
import globalStyles from '../../app.module.scss';

const Main: FC = () => {
  return (
    <article className={styles.main}>
      <h1 className={styles.main__title}>Денисов Евгений</h1>
      <p
        className={classNames({
          [styles.main__description]: true,
          [globalStyles.hover]: true,
        })}
      >
        Frontend разработчик
      </p>
    </article>
  );
};

export default Main;
