import React, { FC, memo } from 'react';
import { AboutMeContainer, AboutMeParagraph, AboutMeSentence } from './styles';
import AccentText from '../AccentText/AccentText';

const AboutMeArticle: FC = () => {
  return (
    <AboutMeContainer>
      <AboutMeParagraph>
        <AboutMeSentence>Меня зовут Евгений Денисов. Я Frontend разработчик.</AboutMeSentence>
      </AboutMeParagraph>
      <AboutMeParagraph>
        <AboutMeSentence>
          <AboutMeSentence>
            Владею основными технологиями web-разработки:
            <AccentText text='JS' />, <AccentText text='HTML' />, <AccentText text='CSS' />,{' '}
            <AccentText text='React' />, <AccentText text='TypeScript' />,{' '}
            <AccentText text='Redux' />, <AccentText text='Redux-Toolkit' />,{' '}
            <AccentText text='MobX' />, <AccentText text='Ant Design' />, <AccentText text='Mui' />,{' '}
            <AccentText text='Vue.js' />, <AccentText text='Git' />, <AccentText text='Node.js' />,{' '}
            <AccentText text='Express' />.{' '}
          </AboutMeSentence>
        </AboutMeSentence>
        <AboutMeSentence>Всегда готов изучать что-то новое.</AboutMeSentence>
      </AboutMeParagraph>
      <AboutMeParagraph>
        <AboutMeSentence>
          Выбрал frontend-разработку, потому что мне всегда нравилось пересечение дизайна и
          технологий.
        </AboutMeSentence>
        <AboutMeSentence>
          Отношусь к разработке как к решению логических задач, где если все сделать правильно, то
          все сложится.
        </AboutMeSentence>
        <AboutMeSentence>В работе и жизни стараюсь декомпозировать задачи.</AboutMeSentence>
      </AboutMeParagraph>
      <AboutMeParagraph>
        <AboutMeSentence>
          Участвовал в стажировке от <AccentText text='Сбермаркет' color='#24b23e' /> и успешно
          прошел буткемп от <AccentText text='red_mad_robot' color='red' />. Это дало мне ценный
          опыт работы в команде и тайм менеджменту.
        </AboutMeSentence>
        <AboutMeSentence>
          Сейчас работаю frontend разработчиком в компании{' '}
          <AccentText text='I-TECH' color='#129f7b' /> и код ревьюером в{' '}
          <AccentText text='Яндекс.Практикум' color='rgb(209, 178, 128)' /> на курсе веб
          разработчик.
        </AboutMeSentence>
      </AboutMeParagraph>
      <AboutMeParagraph>Люблю путешествовать, кататься на роликах и сноуборде.</AboutMeParagraph>
      <AboutMeParagraph>
        В прошлом работал в <AccentText text='Московском Планетарии' color='#d5ecf2' /> . Где
        сталкивался с реализацией интерфейсов и разработкой решений для автоматизации задач.
      </AboutMeParagraph>
    </AboutMeContainer>
  );
};

export default memo(AboutMeArticle);
