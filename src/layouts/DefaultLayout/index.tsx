import { FC, PropsWithChildren } from 'react';
import { Header } from '../../components';
import styles from './styles/default.module.scss';

export const DefaultLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className={styles.default}>
      <Header />
      <main className={styles.main}>
        <div className={styles.main__content}>{children}</div>
      </main>
    </div>
  );
};
