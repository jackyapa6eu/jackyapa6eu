import React, { FC } from 'react';
import { closeModal } from '../../store/modalSlice';
import { useAppDispatch, useAppSelector } from '../../hooks/defaultHooks';
import selectors from '../../selectors';
import { Modal } from './styles';
import NavigationButton from './NavigationButton';
import AboutMeIcon from '../../icons/AboutMeIcon';
import PortfolioIcon from '../../icons/PortfolioIcon';
import ContactsIcon from '../../icons/ContactsIcon';
import FeedbackIcon from '../../icons/FeedbackIcon';
import MediaIcon from '../../icons/MediaIcon';
import WishListIcon from '../../icons/WishListIcon';
import GithubIcon from '../../icons/GithubIcon';
import EmailIcon from '../../icons/EmailIcon';
import InstagramIcon from '../../icons/InstagramIcon';
import TelegramIcon from '../../icons/TelegramIcon';
import styled from 'styled-components';

const NavigationButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5px;
`;

const ContactsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: start;
  gap: 10px;

  padding: 0 10px;
  & > p {
    margin: 0;
    color: #d2b48c;
  }
`;

const ContactsButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 5px;
  box-sizing: border-box;
`;

const ContactLink = styled.a`
  display: flex;
  gap: 5px;
  width: 100%;
  align-items: center;
  transition: all ease 0.5s;
  div {
    width: 20px;
  }

  span {
    font-size: 14px;
    line-height: 14px;
    display: block;
    height: fit-content;
    color: #d2b48c;
    transition: all ease 0.5s;
  }

  path {
    transition: all ease 0.5s;
  }

  &:hover span {
    color: #dcdcdc;
  }

  &:hover path {
    fill: #d2b48c;
  }
`;

const NavigationMenu: FC = () => {
  const dispatch = useAppDispatch();
  const isOpened = useAppSelector(selectors.modalIsOpened);

  const handleCloseModal = () => {
    dispatch(closeModal());
  };

  return (
    <Modal
      title='Денисов Евгений'
      placement='left'
      width={260}
      onClose={handleCloseModal}
      open={isOpened}
    >
      <NavigationButtonsContainer>
        <NavigationButton title='Обо мне' icon={<AboutMeIcon />} path='/' />
        <NavigationButton title='Портфолио' icon={<PortfolioIcon />} path='/portfolio' />
        <NavigationButton title='Отзывы студентов' icon={<FeedbackIcon />} path='/feedback' />
        <NavigationButton title='Медиа' icon={<MediaIcon />} path='/media' />
        <NavigationButton title='Виш лист' icon={<WishListIcon />} path='/wishlist' />
      </NavigationButtonsContainer>

      <ContactsContainer>
        <p>Контакты</p>
        <ContactsButtonsContainer>
          <ContactLink href='https://github.com/jackyapa6eu' target='_blank'>
            <div>
              <GithubIcon />
            </div>
            <span>Github</span>
          </ContactLink>
          <ContactLink>
            <div>
              <EmailIcon />
            </div>
            <span>yapa6eu@gmail.com</span>
          </ContactLink>
          <ContactLink href='https://www.instagram.com/jackyapa6eu/' target='_blank'>
            <div>
              <InstagramIcon />
            </div>
            <span>Instagram</span>
          </ContactLink>
          <ContactLink href='https://t.me/jackyapa6eu' target='_blank'>
            <div>
              <TelegramIcon />
            </div>
            <span>Telegram</span>
          </ContactLink>
        </ContactsButtonsContainer>
      </ContactsContainer>
    </Modal>
  );
};

export default NavigationMenu;
