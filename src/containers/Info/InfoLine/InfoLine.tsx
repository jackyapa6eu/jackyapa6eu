import React, { FC, memo, ReactNode } from 'react';
import { InfoDots } from '../styles';
import { InfoLineContainer } from '../styles';

interface IInfoLine {
  title: string;
  right: ReactNode;
}

const InfoLine: FC<IInfoLine> = ({ title, right }) => {
  return (
    <InfoLineContainer>
      <span>{title}</span>
      <InfoDots className='info__dots' />
      {right}
    </InfoLineContainer>
  );
};

export default memo(InfoLine);
