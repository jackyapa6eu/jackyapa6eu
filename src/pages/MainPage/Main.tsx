import React, { FC } from 'react';
import classNames from 'classnames';

import styles from './styles/main.module.scss';
import globalStyles from '../../app.module.scss';

const Main: FC = (): React.ReactElement => {
  return (
    <article className={styles.main}>
      <h1>Денисов Евгений</h1>
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
