import React, { FC } from 'react';
import styled from 'styled-components';

interface IArrowIcon {
  color?: string;
  w?: number;
  h?: number;
  bottom?: boolean;
}

interface IStyledSvg {
  bottom: string;
}

const StyledSvg = styled.svg<IStyledSvg>`
  transform: ${(p) => (p.bottom === 'true' ? 'rotate(-90deg)' : 'rotate(90deg)')};
`;

const ArrowIcon: FC<IArrowIcon> = ({ color = '#dcdcdc', w = 24, h = 24, bottom = true }) => {
  return (
    <StyledSvg
      xmlns='http://www.w3.org/2000/svg'
      width={`${w}px`}
      height={`${h}px`}
      viewBox={`0 0 ${w} ${h}`}
      bottom={bottom.toString()}
    >
      <path
        fill={color}
        d='M13 19L2 12l11-7v6h9v2h-9v6Zm-2-3.65v-6.7L5.725 12L11 15.35ZM11 12Z'
      ></path>
    </StyledSvg>
  );
};

export default ArrowIcon;
