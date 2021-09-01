import './MainPage.css';
import { FC } from 'react';
import mainVideo from '../../videos/main__video.mp4';
import videoPoster from '../../videos/main__video-poster.png'

const MainPage: FC = () => {
  return (
    <main className="main-page">
      <h1 className="main-page__title">ДЕНИСОВ ЕВГЕНИЙ</h1>
      <p className="main-page__subtitle">FRONT-END РАЗРАБОТЧИК</p>
      <video className="main-page__video" width="100wv" src={mainVideo} poster={videoPoster} loop autoPlay muted/>
    </main>
  )
}

export default MainPage;