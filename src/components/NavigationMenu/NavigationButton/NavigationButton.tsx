import React, { FC, ReactNode } from 'react';
import styled from 'styled-components';
import Link from 'next/link';

const LinkContainer = styled.div`
  display: flex;
  height: 32px;
  align-items: center;
  justify-content: start;
  gap: 10px;
  background: transparent;
  width: 100%;
  text-align: start;
  padding: 0 10px;
  border: none;
  border-radius: 5px;
  box-shadow: 0 0 2px rgba(0, 0, 0, 0.2);
  transition: all 0.5s ease-in-out;
  font-weight: 500;
  color: #d2b48c !important;
  cursor: pointer;
  & div {
    width: 20px;
    display: flex;
    justify-content: center;
  }

  path {
    fill: #d2b48c;
    transition: all 0.5s ease-in-out;
  }

  &:hover path {
    fill: #dcdcdc;
  }

  &:hover {
    box-shadow: 0 0 3px #996515;
    color: #dcdcdc !important;
  }
`;

interface INavigationButton {
  title: string;
  path?: string;
  icon: ReactNode;
}

const NavigationButton: FC<INavigationButton> = ({ title, path = '#', icon }) => {
  // console.log(location);
  return (
    <Link href={path}>
      <LinkContainer>
        <div>{icon}</div>
        <span>{title}</span>
      </LinkContainer>
    </Link>
  );
};

export default NavigationButton;
