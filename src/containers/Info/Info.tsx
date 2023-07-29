import React, { FC, memo, ReactNode } from 'react';
import { InfoContainer, InfoTitleContainer, InfoTitle } from './styles';

interface IInfo {
  children: ReactNode;
  title?: string;
}

const Info: FC<IInfo> = ({ children, title }) => {
  return (
    <InfoContainer>
      <InfoTitleContainer>
        <InfoTitle>{title}</InfoTitle>
      </InfoTitleContainer>
      {children}
    </InfoContainer>
  );
};

export default memo(Info);
