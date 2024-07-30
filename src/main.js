import { jsx as _jsx } from "react/jsx-runtime";
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { initializeApp } from 'firebase/app';
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
    ReactDOM.createRoot(rootElement).render(_jsx(React.StrictMode, { children: _jsx(App, {}) }));
}
