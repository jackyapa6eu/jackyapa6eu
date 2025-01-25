import React, { FC, useState } from 'react';
import { useLocation } from 'react-router-dom';

import { SignUp, SignIn } from '../../components';

import styles from './styles/auth.module.scss';
// import globalStyles from '../../app.module.scss';

const Auth: FC = () => {
  const [type, setType] = useState('signIn');

  const location = useLocation();

  console.log('location.state:', location.state);

  const AuthContent = (): React.ReactElement => {
    switch (type) {
      case 'signUp':
        return (
          <>
            <h1 className={styles.auth__title}>Регистрация</h1>
            <SignUp from={location.state?.from} />
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
            <SignIn from={location.state?.from} />
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
