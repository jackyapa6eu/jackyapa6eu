import styled from 'styled-components';
import React, { memo } from 'react';
import { Button, Drawer, Modal } from 'antd';
import { useAppDispatch, useAppSelector } from '../../src/hooks/defaultHooks';
import selectors from '../../src/selectors';
import { closeModal, openModal } from '../../src/store/suggestMusicModalSlice';

const MediaContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr;
  gap: 15px;
`;

const MusicPlaylist = styled.iframe`
  border: none;
  width: 100%;
  height: 542px;
  border-radius: 13px;
`;

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  color: white;

  & h3 {
    margin: 0;
  }
`;

const ShareMusicButton = styled(Button)`
  background: none;
  border: none;
  border-radius: 5px;
  box-shadow: 0 0 2px rgba(0, 0, 0, 0.2);
  transition: all 0.5s ease-in-out;
  font-weight: 500;
  color: #d2b48c !important;
  &:hover {
    box-shadow: 0 0 3px #996515;
    color: #dcdcdc !important;
  }
`;

const Music = () => {
  const dispatch = useAppDispatch();
  const isOpened = useAppSelector(selectors.suggestMusicIsOpened);

  const handleCloseModal = () => {
    dispatch(closeModal());
  };

  const handleOpenModal = () => {
    dispatch(openModal());
  };

  return (
    <MediaContainer>
      <Drawer placement='left' width={260} onClose={handleCloseModal} open={isOpened}>
        xxx
      </Drawer>
      <TitleContainer>
        {/*<ShareMusicButton onClick={handleOpenModal}>Поделись со мной музыкой</ShareMusicButton>*/}
        <h3>Мой плейлист</h3>
      </TitleContainer>
      <MusicPlaylist src='https://music.yandex.ru/iframe/playlist/jackyapa6eu/3'>
        Слушайте <a href='https://music.yandex.ru/users/jackyapa6eu/playlists/3'>Мне нравится</a> —{' '}
        <a href='https://music.yandex.ru/users/jackyapa6eu'>jackyapa6eu</a> на Яндекс Музыке
      </MusicPlaylist>
    </MediaContainer>
  );
};

export default memo(Music);
