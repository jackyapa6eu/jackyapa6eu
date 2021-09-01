import './Contacts.css';
import { FC } from 'react';
import gitIcon from '../../images/contacts__github-icon.png';
import phoneIcon from '../../images/contacts__phone.png';
import telegIcon from '../../images/contacts__telegram.png';
import emailIcon from '../../images/contacts__mail-icon.png';

const Contacts: FC = () => {
  return (
    <div className="contacts">
      <h3 className="contacts__title">КОНТАКТЫ</h3>
      <div className="contacts__container">
        <a className="contacts__link" href="tel:+79037783589">
          <img alt="иконка телефона" className="contacts__icon" src={phoneIcon}/>
          +7(903)778-35-89
        </a>
        <a className="contacts__link" href="mailto:yapa6eu@gmail.com">
          <img alt="иконка телефона" className="contacts__icon" src={emailIcon}/>
          yapa6eu@gmail.com
        </a>
        <a className="contacts__link" href="https://t.me/jackyapa6eu" target="_blank" rel="noreferrer">
          <img alt="иконка телефона" className="contacts__icon" src={telegIcon}/>
          @jackyapa6eu
        </a>
        <a className="contacts__link" href="https://github.com/jackyapa6eu" target="_blank" rel="noreferrer">
          <img alt="иконка телефона" className="contacts__icon" src={gitIcon}/>
          github.com/jackyapa6eu
        </a>
      </div>
    </div>
  )
}

export default Contacts;