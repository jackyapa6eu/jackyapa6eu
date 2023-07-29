import Info from '../../containers/Info/Info';
import InfoLine from '../../containers/Info/InfoLine/InfoLine';
import React, { memo } from 'react';
import InfoDataContainer from '../../containers/Info/InfoDataContainer/InfoDataContainer';
import InfoDates from '../../containers/Info/InfoDates/InfoDates';

const MainWorkExperience = () => {
  return (
    <Info title='Работа'>
      <InfoLine
        title='I-TECH'
        right={
          <InfoDataContainer>
            <span>Frontend-разработчик</span>
            <InfoDates start={[12, 22]} />
          </InfoDataContainer>
        }
      />
      <InfoLine
        title='Московский Планетарий'
        right={
          <InfoDataContainer>
            <span>Программист астросимулятора</span>
            <InfoDates start={[10, 21]} end={[11, 22]} />
          </InfoDataContainer>
        }
      />
      <InfoLine
        title='Яндекс.Практикум'
        right={
          <InfoDataContainer>
            <span>Код ревьюер</span>
            <InfoDates start={[12, 21]} />
          </InfoDataContainer>
        }
      />
      <InfoLine
        title='Московский Планетарий'
        right={
          <InfoDataContainer>
            <span>Инженер-оператор</span>
            <InfoDates start={[12, 13]} end={[10, 21]} />
          </InfoDataContainer>
        }
      />
    </Info>
  );
};

export default memo(MainWorkExperience);
