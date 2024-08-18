import { observer } from 'mobx-react-lite';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

import { DefaultLayout } from './layouts/DefaultLayout';
import { MainPage } from './pages/MainPage';

import './styles/global/index.scss';

const App = observer(() => {
  return (
    <HelmetProvider>
      <Router>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route
            path="/about"
            element={
              <DefaultLayout>
                <div>about</div>
              </DefaultLayout>
            }
          />
          <Route
            path="*"
            element={
              <DefaultLayout>
                <div>404</div>
              </DefaultLayout>
            }
          />
        </Routes>
      </Router>
    </HelmetProvider>
  );
});

export default App;
