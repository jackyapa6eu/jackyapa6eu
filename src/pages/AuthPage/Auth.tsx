import React, { FC, useEffect, useState } from 'react';

import { SignUp, SignIn } from '../../components';

import styles from './styles/auth.module.scss';
// import globalStyles from '../../app.module.scss';

const Auth: FC = () => {
  const [type, setType] = useState('signUp');

  const AuthContent = (): React.ReactElement => {
    switch (type) {
      case 'signUp':
        return (
          <>
            <h1 className={styles.auth__title}>Регистрация</h1>
            <SignUp />
            <p className={styles.auth__description}>
              Уже есть аккаунт?{' '}
              <button
                onClick={() => {
                  setType('signIn');
                }}
                className={styles.auth__link}
                type="button"
              >
                авторизоваться
              </button>
            </p>
          </>
        );
      case 'signIn':
        return (
          <>
            <h1 className={styles.auth__title}>Вход</h1>
            <SignIn />
            <p className={styles.auth__description}>
              Нет аккаунта?{' '}
              <button
                onClick={() => {
                  setType('signUp');
                }}
                className={styles.auth__link}
                type="button"
              >
                зарегистрироваться
              </button>
            </p>
          </>
        );
      default:
        return null;
    }
  };

  return <div className={styles.auth}>{AuthContent()}</div>;
};

export default Auth;
