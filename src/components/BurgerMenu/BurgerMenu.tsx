import React, { FC } from 'react';
import styled from 'styled-components';
import { useAppDispatch } from '../../hooks/defaultHooks';
import { openModal } from '../../store/modalSlice';

const StyledSvg = styled.svg`
  position: sticky;
  left: 11px;
  top: calc(5vh + 16px);
  cursor: pointer;
`;

interface IBurgerMenu {
  w?: number;
  h?: number;
  color?: string;
}

const BurgerMenu: FC<IBurgerMenu> = ({ w = 32, h = 32, color = '#dcdcdc' }) => {
  const dispatch = useAppDispatch();

  const handleOpenModal = () => {
    dispatch(openModal());
  };

  return (
    <StyledSvg
      xmlns='http://www.w3.org/2000/svg'
      width={w}
      height={h}
      viewBox='0 0 24 24'
      onClick={handleOpenModal}
    >
      <path
        fill='none'
        stroke={color}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='2'
        d='M3 6h18M3 12h18M3 18h18'
      />
    </StyledSvg>
  );
};

export default BurgerMenu;
