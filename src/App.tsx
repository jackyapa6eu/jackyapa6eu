import { observer } from 'mobx-react-lite';
import './styles/global/index.scss';

import styles from './app.module.scss';

const App = observer(() => {
  return (
    <div className={styles.App}>
      <article className={styles.App__main_article}>
        <h1>[Денисов Евгений]</h1>
        <p>Frontend разработчик</p>
      </article>
    </div>
  );
});

export default App;
