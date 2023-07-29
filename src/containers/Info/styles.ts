import styled from 'styled-components';

export const InfoContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const InfoLineContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 5px;

  @media screen and (max-width: 600px) {
    font-size: 13px;
  }

  @media screen and (max-width: 510px) {
    font-size: 12px;
  }

  @media screen and (max-width: 481px) {
    display: grid;
    grid-template-columns: 1fr;
    box-shadow: 0 0 3px #996515;
    border-radius: 5px;
    padding: 2px 2px;
    & .info__dots {
      display: none;
    }
  }
`;

export const InfoTitleContainer = styled.div`
  position: absolute;
  left: -10px;
  top: 0;
  width: fit-content;
  height: fit-content;
  transition: all 0.3s ease;

  @media screen and (max-width: 900px) {
    transform: rotate(270deg);
    left: -28px;
    top: 5px;
  }
`;

export const InfoTitle = styled.span`
  position: absolute;
  display: block;
  color: #d2b48c;
  top: 0;
  right: 0;
  font-size: 13px;
`;

export const InfoDots = styled.div`
  border-bottom: 1px dashed rgba(220, 220, 220, 0.3);
  flex-grow: 1;
  height: 9px;
`;

export const InfoLinkContainer = styled.a`
  color: #ffffff;
  text-decoration: none;
  transition: all 0.3s ease;

  &:hover {
    color: #d2b48c;
  }
`;
