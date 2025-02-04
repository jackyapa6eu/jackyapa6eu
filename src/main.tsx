import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { initializeApp } from 'firebase/app';
import { ConfigProvider } from 'antd';
import ruRU from 'antd/locale/ru_RU';

import './index.css';

(function () {
  const firebaseConfig = {
    apiKey: 'AIzaSyAwRdOsofcA26IuEPV_dRMVv78cceMzkH0',
    authDomain: 'jackyapa6eu.firebaseapp.com',
    databaseURL: 'https://jackyapa6eu.firebaseio.com',
    projectId: 'jackyapa6eu',
    storageBucket: 'jackyapa6eu.appspot.com',
    messagingSenderId: '487808843024',
    appId: '1:487808843024:web:1f7ec5914f3b4495e33995',
  };
  initializeApp(firebaseConfig);
})();

const rootElement = document.getElementById('root');
if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <ConfigProvider locale={ruRU}>
        <App />
      </ConfigProvider>
    </React.StrictMode>,
  );
}
