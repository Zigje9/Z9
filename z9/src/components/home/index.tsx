import React from 'react';
import styled from 'styled-components';
import Text from './text';
import Background from './background';
import HomeButton from './homeButton';

const HomeContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  padding: 2%;
`;

const Home: React.FC = () => {
  return (
    <>
      <HomeContainer>
        <HomeButton />
        <Text />
      </HomeContainer>
      <Background />
    </>
  );
};

export default Home;
