import React from 'react';
import styled from 'styled-components';

const StyledContainer = styled.main`
  height: calc((var(--vh, 1vh) * 100));
  color: white;
`;

const MainContainer = () => {
  return <StyledContainer></StyledContainer>;
};

export default MainContainer;
