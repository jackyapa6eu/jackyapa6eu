import { observer } from 'mobx-react-lite';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
} from 'react-router-dom';
import './styles/global/index.scss';

import styles from './app.module.scss';
import { Icon } from './components/Icon';
import { NavigateLink } from './components/NavigateLink';
import { Navigation } from './components/Navigation';
// import style from './components/Icon/styles/icon.module.scss';

const App = observer(() => {
  return (
    <Router>
      <div className={styles.App}>
        <header className={styles.Header}>
          <NavigateLink to="/">
            <Icon name="Logo" size="xl" />
          </NavigateLink>

          <Navigation />
          <Icon
            name="BurgerMenu"
            size="large"
            clickCallback={() => {
              console.log('click');
            }}
          />
        </header>
        <main>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <article className={styles.App__main_article}>
                    <h1>Денисов Евгений</h1>
                    <p className={styles.hover}>Frontend разработчик</p>
                  </article>
                </>
              }
            />
            <Route path="/about" element={<div>about</div>} />
            <Route path="*" element={<div>404</div>} />
          </Routes>
        </main>
      </div>
    </Router>
  );
});

export default App;
