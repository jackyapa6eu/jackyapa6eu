import React from 'react';
import styled from 'styled-components';
import BurgerMenu from '../components/BurgerMenu';

const StyledContainer = styled.main`
  height: calc((var(--vh, 1vh) * 100));
  color: white;
`;

const MainContainer = () => {
  return <StyledContainer>main container</StyledContainer>;
};

export default MainContainer;
