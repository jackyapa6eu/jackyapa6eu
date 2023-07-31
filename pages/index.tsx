import React, { memo } from 'react';
import styled from 'styled-components';
import AboutMeArticle from '../src/components/AboutMeArticle/AboutMeArticle';
import { aboutMeText } from '../src/utils/constants';
import MainContacts from '../src/components/MainContacts/MainContacts';
import MainWorkExperience from '../src/components/MainWorkExperience';
import MainLearningExperience from '../src/components/MainLearningExperience/MainLearningExperience';
import { YMaps, Map, Placemark } from 'react-yandex-maps';
import MainWhereAmi from '../src/components/MainWhereAmi/MainWhereAmi';

const Main = styled.div`
  // height: calc((var(--vh, 1vh) * 100));
  display: flex;
  flex-direction: column;
  color: white;
  gap: 25px;
`;

const HomePage = () => {
  return (
    <Main>
      <AboutMeArticle text={aboutMeText} />
      <MainContacts />
      <MainWhereAmi />
      <MainWorkExperience />
      <MainLearningExperience />
    </Main>
  );
};

export default memo(HomePage);

/*
export async function getServerSideProps() {
    return {
        props: {
            message: 'SSR IS WORKING!!!'
        }
    };
}
 */
