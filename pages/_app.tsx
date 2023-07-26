import React, { useEffect } from 'react';
import '../src/vendor/normalize.css';
import './index.css';
import '../src/vendor/fonts/fonts.css';
import type { AppProps } from 'next/app';
import NavigationMenu from '../src/components/NavigationMenu';
import BurgerMenu from '../src/components/BurgerMenu';
import store from '../src/store/store';
import { Provider } from 'react-redux';
import styled from 'styled-components';

const PageContentContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 650px;
  margin: 0 auto;
  padding: calc(5vh + 16px) 54px 30px 54px;
  transition: all 0.3s ease;
  @media screen and (max-width: 758px) {
    max-width: 100%;
  }
`;

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
      <BurgerMenu />
      <PageContentContainer>
        <Component {...pageProps} />
      </PageContentContainer>
      <NavigationMenu />
    </Provider>
  );
};

export default MyApp;
