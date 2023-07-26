import React from 'react';
import styled from 'styled-components';
import { aboutMeText } from '../utils/constants';
import AboutMeArticle from '../components/AboutMeArticle';
import Info from '../components/Info';
import InfoLine from '../components/Info/InfoLine';
import InfoLink from '../components/Info/InfoLink/InfoLink';

const Main = styled.div`
  // height: calc((var(--vh, 1vh) * 100));
  display: flex;
  flex-direction: column;
  color: white;
  gap: 20px;
`;

const MainContainer = () => {
  return (
    <Main>
      <AboutMeArticle text={aboutMeText} />
      <Info title='Контакты'>
        <InfoLine
          title='Telegram'
          right={<InfoLink link='https://t.me/jackyapa6eu' title='Написать' />}
        />

        <InfoLine
          title='Github'
          right={<InfoLink link='https://github.com/jackyapa6eu' title='Подписаться' />}
        />
        <InfoLine
          title='Email'
          right={<InfoLink link='mailto:yapa6eu@gmail.com' title='yapa6eu@gmail.com' />}
        />

        <InfoLine
          title='Instagram'
          right={<InfoLink link='https://www.instagram.com/jackyapa6eu/' title='Подписаться' />}
        />
      </Info>
    </Main>
  );
};

export default MainContainer;
