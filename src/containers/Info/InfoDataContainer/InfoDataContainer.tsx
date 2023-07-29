import React, { FC, memo, ReactNode } from 'react';
import styled from 'styled-components';

const InfoDataContainer = styled.div`
  display: flex;
  gap: 5px;
  justify-content: flex-end;
  flex-direction: column;
  align-items: flex-end;
`;

interface IInfoData {
  children: ReactNode;
}

const InfoData: FC<IInfoData> = ({ children }) => {
  return <InfoDataContainer>{children}</InfoDataContainer>;
};

export default memo(InfoData);
