import React, { FC, memo } from 'react';
import styled from 'styled-components';

interface IInfoDates {
  start: number[];
  end?: number[];
}

const InfoDatesContainer = styled.p`
  display: flex;
  margin: 0;
  width: 105px;
  color: #d2b48c;

  @media screen and (max-width: 600px) {
    width: 86px;
  }

  @media screen and (max-width: 510px) {
    width: 79px;
  }
`;

const handleNumber = (num) => `0${num}`.slice(-2);

const InfoDates: FC<IInfoDates> = ({ start, end = [] }) => {
  return (
    <InfoDatesContainer>
      <span>{start.map((n) => handleNumber(n)).join('.')}</span>
      <span>-</span>
      <span>{end.map((n) => handleNumber(n)).join('.')}</span>
    </InfoDatesContainer>
  );
};

export default memo(InfoDates);
