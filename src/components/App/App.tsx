import { useEffect, useState } from 'react';
import { initializeApp } from "firebase/app";
import "firebase/analytics";
import "firebase/auth";
import "firebase/firestore";
import './App.css';
import { firebaseConfig } from '../utils/firebaseConfig';
import Header from '../Header/Header';
import MainPage from '../MainPage/MainPage';
import { Route, 
  Switch
} from 'react-router-dom';
import Contacts from '../Contacts/Contacts';
import Portfolio from '../Portfolio/Portfolio';
import classNames from 'classnames';
import ProjectPage from '../ProjectPage/ProjectPage';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  useEffect(() => {
    initializeApp(firebaseConfig);
  }, []);

  const mainContentSelectors = classNames('App__main-content', {
    'App__main-content__blured': isMenuOpen
  })

  return (
    <div className="App">
      <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen}/>
      <div className={mainContentSelectors}>
        <Switch>
          <Route exact path="/">
            <MainPage/>
          </Route>
          <Route exact path="/contacts">
            <Contacts/>
          </Route>
          <Route exact path="/portfolio">
            <Portfolio/>
          </Route>
          <Route path="/portfolio/:name" component={ProjectPage} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
