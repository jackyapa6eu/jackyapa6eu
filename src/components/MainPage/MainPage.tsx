import './MainPage.css';
import { FC } from 'react';

const MainPage: FC = () => {
  return (
    <main className="main-page">
      <h1 className="main-page__title">ДЕНИСОВ ЕВГЕНИЙ</h1>
      <p className="main-page__subtitle">FRONT-END РАЗРАБОТЧИК</p>
      <div className="main-page__main-container">
        <div className="job-item">
          <div className="">
            <h4 className="job-item__title">Яндекс.Практикум</h4>
            <p className="job-item__position">Код ревьюер</p>
            <p className="job-item__time">
              Ноябрь 2021 — по настоящее время
            </p>
            <p className="job-item__description">
              Проверка работ студентов, которые проходят курс "Веб-разработчик".
              Выявление ошибок, объяснения как их решить и советы по рефакторингу кода.
            </p>
          </div>
        </div>

      </div>
    </main>
  )
}

export default MainPage;
