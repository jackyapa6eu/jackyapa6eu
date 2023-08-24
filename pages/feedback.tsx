import React from 'react';
import styled from 'styled-components';
import { studentFeedback } from '../src/utils/studentFeedback';
import FeedbackCard from '../src/components/FeedbackCard/FeedbackCard';

const FeedbackContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  color: #dcdcdc;
  gap: 10px;
`;

const Feedback = () => {
  return (
    <FeedbackContainer>
      {studentFeedback.map((feedback, index) => (
        <FeedbackCard feedback={feedback} key={index} />
      ))}
    </FeedbackContainer>
  );
};

export default Feedback;
