import Link from 'next/link';
import React, { memo } from 'react';
import styled from 'styled-components';

const NotFoundContainer = styled.div`
  color: #dcdcdc;
`;

const NotFoundLinkText = styled.span`
  color: #d2b48c;
  cursor: pointer;
  border-bottom: 1px solid #d2b48c;
`;

const NotFoundPage = () => {
  return (
    <NotFoundContainer>
      <h1>404 - Страница не найдена.</h1>
      <p>Извините, запрашиваемая страница не существует.</p>
      <Link href='/'>
        <NotFoundLinkText>Вернуться на главную</NotFoundLinkText>
      </Link>
    </NotFoundContainer>
  );
};

export default memo(NotFoundPage);
