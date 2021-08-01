import React from 'react';
import styled from 'styled-components';
import Text from './text';

const HomeContainer = styled.div`
  height: 100vh;
  background-color: green;
`;

const Home: React.FC = () => {
  return (
    <HomeContainer>
      <Text />
    </HomeContainer>
  );
};

export default Home;
