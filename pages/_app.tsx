import React, { useEffect, useState } from 'react';
import '../src/vendor/normalize.css';
import './index.css';
import '../src/vendor/fonts/fonts.css';
import type { AppProps } from 'next/app';
import NavigationMenu from '../src/components/NavigationMenu';
import BurgerMenu from '../src/components/BurgerMenu';
import store from '../src/store/store';
import { Provider } from 'react-redux';
import styled from 'styled-components';
import { Button } from 'antd';

interface IUnderDevelopmentContainer {
  opened: string;
}

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

const UnderDevelopmentContainer = styled.div<IUnderDevelopmentContainer>`
  position: absolute;
  left: 0;
  top: ${(p) => (p.opened === 'true' ? '0' : '-55px')};
  width: 100%;
  display: flex;
  justify-content: center;
  overflow: hidden;
  height: 55px;
  transition: all ease 0.3s;
  cursor: pointer;
  & .under-development-content {
    color: #ff7f50;
    padding: 14px 54px;
    width: 100%;
    max-width: 650px;
    border-radius: 5px;
    box-shadow: 2px 0 8px #ff7f50;
    border-top-right-radius: 0px;
    border-top-left-radius: 0px;
    height: fit-content;
    display: flex;
    justify-content: space-between;
  }

  & .under-development-content__close-button {
    box-shadow: 0 0 3px #ff7f50;
    color: #ff7f50 !important;
    border: none;!important;
    background: transparent;
    transition: all .3s ease;
  }

  & .under-development-content__close-button:hover {
    box-shadow: 0 0 3px #dcdcdc;
    color: #dcdcdc !important;
  }
`;

const MyApp = ({ Component, pageProps }: AppProps) => {
  const [underDevelopmentIsOpened, setunderDevelopmentIsOpened] = useState(true);

  const handleUnderDevelopmentClick = () => {
    setunderDevelopmentIsOpened(!underDevelopmentIsOpened);
  };

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
      <UnderDevelopmentContainer
        opened={underDevelopmentIsOpened.toString()}
        onClick={handleUnderDevelopmentClick}
      >
        <div className='under-development-content'>
          <span>Сайт находится в стадии разработки</span>
          <Button size='small' className='under-development-content__close-button'>
            Понятно
          </Button>
        </div>
      </UnderDevelopmentContainer>
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
