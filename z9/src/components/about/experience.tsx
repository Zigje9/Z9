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

const ExperienceContainer = styled.div`
  width: 80%;
  height: 75vh;
  background-color: pink;
`;

const Experience: React.FC = () => {
  return (
    <Background>
      <ExperienceContainer />;
    </Background>
  );
};

export default Experience;
