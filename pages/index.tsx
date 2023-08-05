import React, { memo } from 'react';
import styled from 'styled-components';
import AboutMeArticle from '../src/components/AboutMeArticle/AboutMeArticle';
import MainContacts from '../src/components/MainContacts/MainContacts';
import MainWorkExperience from '../src/components/MainWorkExperience';
import MainLearningExperience from '../src/components/MainLearningExperience/MainLearningExperience';
import MainWhereAmi from '../src/components/MainWhereAmi/MainWhereAmi';

const Main = styled.div`
  // height: calc((var(--vh, 1vh) * 100));
  display: flex;
  flex-direction: column;
  color: white;
  gap: 25px;
  width: 100%;
`;

const HomePage = () => {
  return (
    <Main>
      <AboutMeArticle />
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
