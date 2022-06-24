import './Header.css';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import SVG from 'react-inlinesvg';
import logoImg from '../../images/header__logo.svg';

interface IProps {
  isMenuOpen: boolean,
  setIsMenuOpen: Function
}

const Header: React.FC<IProps> = ({isMenuOpen, setIsMenuOpen}) => {

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
      <div className="header__logo" onMouseOver={showMenu}>
        <SVG className="header__image" src={logoImg}/>
      </div>
      <h2 className="header__title" onMouseOver={showMenu}>МЕНЮ</h2>
      <div className={itemsSelector} onMouseLeave={hideMenu}>
        <button className="header__close-btn" type="button" onClick={hideMenu}>X</button>
        <Link to="/" className="header__item" style={transitionDuration(1)}>ДОМОЙ</Link>
        <Link to="/about" className="header__item" style={transitionDuration(2)}>ОБО МНЕ</Link>
        <Link to="/portfolio" className="header__item" style={transitionDuration(3)}>РАБОТЫ</Link>
        <Link to="/contacts" className="header__item" style={transitionDuration(4)}>КОНТАКТЫ</Link>
      </div>
    </header>
  )
}

export default Header;
