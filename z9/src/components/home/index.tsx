import React from 'react';
import styled from 'styled-components';
import Text from './text';
import Background from './background';

const HomeContainer = styled.div`
  height: 100vh;
`;

const Home: React.FC = () => {
  return (
    <>
      <HomeContainer>
        <Text />
      </HomeContainer>
      <Background />
    </>
  );
};

export default Home;
