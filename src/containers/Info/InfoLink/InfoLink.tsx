import React from 'react';
import { FC, memo } from 'react';
import { InfoLinkContainer } from '../styles';

interface IInfoLink {
  title: string;
  link: string;
}

const InfoLink: FC<IInfoLink> = ({ title, link }) => {
  return (
    <InfoLinkContainer href={link} target='_blank' rel='noreferrer'>
      {title}
    </InfoLinkContainer>
  );
};

export default memo(InfoLink);
