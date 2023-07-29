import Info from '../../containers/Info/Info';
import InfoLine from '../../containers/Info/InfoLine/InfoLine';
import React, { memo } from 'react';
import InfoDataContainer from '../../containers/Info/InfoDataContainer/InfoDataContainer';
import InfoDates from '../../containers/Info/InfoDates/InfoDates';

const MainLearningExperience = () => {
  return (
    <Info title='Обучение'>
      <InfoLine
        title='red_mad_robot'
        right={
          <InfoDataContainer>
            <span>Bootcamp. Frontend-разработчик</span>
            <InfoDates start={[10, 22]} end={[11, 22]} />
          </InfoDataContainer>
        }
      />
      <InfoLine
        title='Сбермаркет'
        right={
          <InfoDataContainer>
            <span>Стажер. Frontend-разработчик</span>
            <InfoDates start={[12, 21]} end={[3, 22]} />
          </InfoDataContainer>
        }
      />
      <InfoLine
        title='Яндекс.Практикум'
        right={
          <InfoDataContainer>
            <span>Курс Веб-разработчик</span>
            <InfoDates start={[6, 20]} end={[4, 21]} />
          </InfoDataContainer>
        }
      />
    </Info>
  );
};

export default memo(MainLearningExperience);
