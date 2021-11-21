import { useState } from 'react';
import './Header.css';
import { FC } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import SVG from 'react-inlinesvg';
import logoImg from '../../images/header__logo.svg';

const Header: FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const itemsSelector = classNames('header__items', {
    'header__items_opened': isMenuOpen
  })

  function showMenu() {
    setIsMenuOpen(true);
  }

  function hideMenu() {
    setIsMenuOpen(false);
  }

  function transitionDuration(n: number) {
    return {
      transition: `all ${n / 4}s ease`
    }
  }

  return (
    <header className="header">
      <div className="header__logo" onMouseOver={showMenu} onMouseLeave={hideMenu}>
        <SVG className="header__image" src={logoImg}/>
      </div>
      <h2 className="header__title" onMouseOver={showMenu} onMouseLeave={hideMenu}>МЕНЮ</h2>  
      <div className={itemsSelector} onMouseOver={showMenu} onMouseLeave={hideMenu}>
        <Link to="/" className="header__item" style={transitionDuration(1)}>ДОМОЙ</Link>
        <Link to="/" className="header__item" style={transitionDuration(2)}>ОБО МНЕ</Link>
        <Link to="/portfolio" className="header__item" style={transitionDuration(3)}>РАБОТЫ</Link>
        <Link to="/contacts" className="header__item" style={transitionDuration(4)}>КОНТАКТЫ</Link>
      </div>
    </header>
  )
}

export default Header;