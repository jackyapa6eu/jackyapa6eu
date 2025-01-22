import { useEffect, useState } from 'react';
import { observer } from 'mobx-react-lite';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { toJS } from 'mobx';
import { getAuth } from 'firebase/auth';
import authStore from './stores/authStore';

import { DefaultLayout } from './layouts/';

import { MainPage, AuthPage, AboutPage, TimeTrackerPage } from './pages';

import './styles/global/index.scss';

const App = observer(() => {
  const auth = getAuth();
  const { getUserData, setUser, user, logout } = authStore;
  // const [clientWidth, setClientWidth] = useState(0);
  //
  // const handleClientWidth = () => {
  //   setClientWidth(window.innerWidth);
  // };
  //
  // useEffect(() => {
  //   window.addEventListener('resize', handleClientWidth);
  //   handleClientWidth();
  // }, []);

  useEffect(() => {
    auth.onAuthStateChanged(async (user): void => {
      if (user) await getUserData(user.uid);
      else setUser(null);
    });
  }, []);

  return (
    <HelmetProvider>
      {/*<div style={{ position: 'absolute ' }}>{clientWidth}</div>*/}
      <Router
        future={{
          v7_startTransition: true,
          v7_relativeSplatPath: true,
        }}
      >
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/auth" element={<AuthPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/time-tracker" element={<TimeTrackerPage />} />
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
