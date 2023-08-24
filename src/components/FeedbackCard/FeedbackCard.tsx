import { FC, memo, useEffect, useRef, useState } from 'react';
import React from 'react';
import styled from 'styled-components';

interface TextContainerProps {
  h: number; // Пропс для высоты контейнера
}

const Card = styled.div`
  position: relative;
  width: 100%;
  // outline: 2px solid #83c5be;
  box-shadow: 0px 0 3px 0px #83c5be;
  font-size: 13px;
  white-space: pre-line;
  border-radius: 4px;
  padding: 25px 30px 5px 30px;
  transition: height 0.3s ease;
  overflow: hidden;
  height: fit-content;
  background: #1a1a1a;
  color: #dcdcdc;
  font-weight: 400;
  p {
    margin: 0;
  }
`;

const ShowBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background: none;
  position: absolute;
  width: 25px;
  height: 25px;
  top: 2px;
  right: 2px;
  outline: none;
  color: #83c5be;
  border: none;
  border-radius: 5px;
  background: #1a1a1a;
  box-shadow: 0 0 3px #83c5be inset;
  cursor: pointer;
  transition: background-color 1s ease;
  &:hover {
    box-shadow: 0 0 3px #83c5be;
    background: #83c5be;
    color: #1a1a1a;
  }

  span {
    font-size: 18px;
    text-align: center;
    line-height: 13px;
  }
`;

const TextContainer = styled.div<TextContainerProps>`
  height: ${(p) => `${p.h}px`};
  overflow: hidden;
  transition: all 0.3s ease;
`;

const RatingBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  left: 2px;
  top: 2px;
  width: 25px;
  height: 25px;
  border-radius: 5px;
  font-weight: 500;
  // outline: 1px solid white;d2b48c
  box-shadow: 0 0 2px #83c5be inset;
  text-align: center;
  span {
    color: #83c5be;
  }
`;

interface Ifeedback {
  feedback: {
    text: string;
    rating: number;
  };
}

const FeedbackCard: FC<Ifeedback> = ({ feedback }) => {
  const textRef = useRef<HTMLParagraphElement>(null!);
  const [canBeOpened, setCanBeOpened] = useState(false);
  const [isOpened, setIsOpened] = useState(false);
  const [textContainerHeight, setTextContainerHeight] = useState(30);

  const handleClick = () => {
    if (textRef.current) {
      const newHeight = isOpened ? 30 : textRef.current.scrollHeight;
      setTextContainerHeight(newHeight);
      setIsOpened(!isOpened);
    }
  };

  useEffect(() => {
    if (textRef.current) {
      // Проверяем, что textRef.current существует
      setCanBeOpened(textRef.current.scrollHeight > 30);
    }
  }, []);

  return (
    <Card>
      {canBeOpened && (
        <ShowBtn type='button' onClick={handleClick}>
          <span>{isOpened ? '🠕' : '🠗'}</span>
        </ShowBtn>
      )}
      <RatingBox>
        <span>{feedback.rating}</span>
      </RatingBox>
      <TextContainer className='review-summary' h={textContainerHeight}>
        <p ref={textRef}>{feedback.text}</p>
      </TextContainer>
    </Card>
  );
};

export default memo(FeedbackCard);
