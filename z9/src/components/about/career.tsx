import React from 'react';
import styled from 'styled-components';

const Background = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 75vh;
  background-color: yellow;
`;

const CareerContainer = styled.div`
  width: 80%;
  height: 75vh;
  background-color: pink;
`;

const Career: React.FC = () => {
  return (
    <Background>
      <CareerContainer />;
    </Background>
  );
};

export default Career;
