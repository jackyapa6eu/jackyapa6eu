import Info from '../../containers/Info/Info';
import InfoLine from '../../containers/Info/InfoLine/InfoLine';
import InfoLink from '../../containers/Info/InfoLink/InfoLink';
import React, { memo } from 'react';
import InfoDataContainer from '../../containers/Info/InfoDataContainer/InfoDataContainer';

const MainContacts = () => {
  return (
    <Info title='Контакты'>
      <InfoLine
        title='Telegram'
        right={
          <InfoDataContainer>
            <InfoLink link='https://t.me/jackyapa6eu' title='Написать' />
          </InfoDataContainer>
        }
      />

      <InfoLine
        title='Github'
        right={
          <InfoDataContainer>
            <InfoLink link='https://github.com/jackyapa6eu' title='Подписаться' />
          </InfoDataContainer>
        }
      />
      <InfoLine
        title='Email'
        right={
          <InfoDataContainer>
            <InfoLink link='mailto:yapa6eu@gmail.com' title='yapa6eu@gmail.com' />
          </InfoDataContainer>
        }
      />

      <InfoLine
        title='Instagram'
        right={
          <InfoDataContainer>
            <InfoLink link='https://www.instagram.com/jackyapa6eu/' title='Подписаться' />
          </InfoDataContainer>
        }
      />
    </Info>
  );
};

export default memo(MainContacts);
