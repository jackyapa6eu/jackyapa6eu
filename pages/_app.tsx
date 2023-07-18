import React, { useEffect } from 'react';
import '../src/vendor/normalize.css';
import './index.css';
import '../src/vendor/fonts/fonts.css';
import type { AppProps } from 'next/app';
import NavigationMenu from '../src/components/NavigationMenu';
import BurgerMenu from '../src/components/BurgerMenu';
import store from '../src/store/store';
import { Provider } from 'react-redux';

const MyApp = ({ Component, pageProps }: AppProps) => {
  const handleResize = () => {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  };
  useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <Provider store={store}>
      <img
        src='https://mc.yandex.ru/watch/92850603'
        style={{ position: 'absolute', left: '-9999px' }}
        alt=''
      />
      <Component {...pageProps} />
      <NavigationMenu />
      <BurgerMenu />
    </Provider>
  );
};

export default MyApp;
