import { FC } from 'react';
// import classNames from 'classnames';
import { AccentText, Paragraph, ExperiencePlace } from '../../components';

import styles from './styles/about.module.scss';
// import globalStyles from '../../app.module.scss';

const jobs = [
  {
    name: 'Garpix',
    position: 'Middle Frontend-разработчик',
    startDate: '07.23',
    description: `Разработка и поддержка коммерческих веб-проектов. 
    Проектирование архитектуры и улучшение UX на всех стадиях разработки.
    Взаимодействие с командой на всех этапах разработки продукта.
    Проведение демонстраций результатов работы команды для заказчиков.
    Наставничество стажеров и проведение код-ревью.`,
  },
  {
    name: 'I-TECH',
    position: 'Frontend-разработчик',
    startDate: '12.22',
    endDate: '07.24',
    description: `Разработка корпоративной системы для внутреннего использования.
            Проектирование и реализация новых компонентов. 
            Менторство и проведение код-ревью. 
            Оптимизация и глобальный рефакторинг существующего функционала. 
            Создание библиотеки компонентов, что ускорило решение новых бизнес-задач на 40%. 
            Успешный онбординг трёх новых сотрудников.`,
  },
  {
    name: 'Яндекс.Практикум',
    position: 'Код ревьюер',
    startDate: '11.21',
    endDate: '08.24',
    description: `Проверка практических работ студентов, проходящих курс "Веб-разработчик". 
            Выявление ошибок, предоставление решений и рекомендаций по рефакторингу кода. 
            Обеспечение качественной обратной связи для улучшения навыков студентов. 
            Помощь студентам в освоении лучших практик разработки и повышении уровня их кода.`,
  },
];

const learning = [
  {
    name: 'red_mad_robot',
    position: 'Bootcamp. Frontend-разработчик',
    startDate: '10.22',
    endDate: '12.23',
    description: `Командная разработка проектов. 
    Стек используемых технологий: 
    React + TypeScript, Redux Toolkit + RTK Query, And Design.`,
  },
  {
    name: 'Сбермаркет',
    position: 'Стажировка. Frontend-разработчик',
    startDate: '12.21',
    endDate: '08.22',
    description: `Обучение по дисциплинам: 
    html, css, javascript, react, redux, redux-toolkit. 
    Разработка финального проекта в команда.`,
  },
  {
    name: 'Яндекс.Практикум',
    position: 'Обучение. Курс Веб разработчик',
    startDate: '06.20',
    endDate: '04.21',
  },
];

const About: FC = () => {
  return (
    <article className={styles.about}>
      <div className={styles.about_wrapper}>
        <h4 className={styles.about_title}>Технологии web-разработки:</h4>

        <p style={{ display: 'flex', gap: '6px', flexWrap: 'wrap', margin: 0 }}>
          <AccentText text="JS" />
          <AccentText text="TypeScript" />
          <AccentText text="HTML" />
          <AccentText text="CSS" />
          <AccentText text="SCSS" />
          <AccentText text="React" />
          <AccentText text="MobX" />
          <AccentText text="Redux" />
          <AccentText text="Redux-Toolkit" />
          <AccentText text="Git" />
          <AccentText text="Vue" />
          <AccentText text="Ant Design" />
          <AccentText text="Mui" />
          <AccentText text="Node.js" />
          <AccentText text="Express" />
        </p>
      </div>

      <div className={styles.about_wrapper}>
        <h4 className={styles.about_title}>Коротко:</h4>

        <div>
          <Paragraph>Всегда готов изучать что-то новое.</Paragraph>

          <Paragraph>
            Выбрал frontend-разработку, потому что мне всегда нравилось
            пересечение дизайна и технологий.
          </Paragraph>

          <Paragraph>
            Отношусь к разработке как к решению логических задач, где если все
            сделать правильно, то все сложится.
          </Paragraph>

          <Paragraph>
            В работе и жизни стараюсь декомпозировать задачи.
          </Paragraph>
        </div>
      </div>

      <div className={styles.about_wrapper}>
        <h4 className={styles.about_title}>Работа:</h4>
        {jobs.map((el) => (
          <ExperiencePlace key={el.name} {...el} />
        ))}
      </div>

      <div className={styles.about_wrapper}>
        <h4 className={styles.about_title}>Обучение:</h4>
        {learning.map((el) => (
          <ExperiencePlace key={el.name} {...el} />
        ))}
      </div>
    </article>
  );
};

export default About;
