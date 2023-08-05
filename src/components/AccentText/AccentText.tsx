import { FC, memo } from 'react';
import React from 'react';
import styled from 'styled-components';

const AccentTextContainer = styled.code`
  display: inline-block;
  border: ${(p) => `1px solid ${p.color}`};
  background: transparent;
  box-shadow: ${(p) => `${p.color} 0 0 3px inset `};
  border-radius: 4px;
  padding: 0.15em 0.35em;
  line-height: 1em;
`;

interface IAccentText {
  text: string;
  color?: string;
}

const AccentText: FC<IAccentText> = ({ text, color = '#83c5be' }) => {
  return <AccentTextContainer color={color}>{text}</AccentTextContainer>;
};

export default memo(AccentText);
