import { useEffect } from 'react';
import { initializeApp } from "firebase/app";
import "firebase/analytics";
import "firebase/auth";
import "firebase/firestore";
import './App.css';
import { firebaseConfig } from '../utils/firebaseConfig';
import Header from '../Header/Header';
import MainPage from '../MainPage/MainPage';
import { Route, Switch } from 'react-router-dom';
import Contacts from '../Contacts/Contacts';

function App() {
  useEffect(() => {
    initializeApp(firebaseConfig);
  }, [])
  return (
    <div className="App">
      <Header/>
      <Switch>
        <Route exact path="/">
          <MainPage/>
        </Route>
        <Route exact path="/contacts">
          <Contacts/>
        </Route>
      </Switch>
      
    </div>
  );
}

export default App;
