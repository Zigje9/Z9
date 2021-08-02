import React from 'react';
import styled from 'styled-components';
import Text from './text';
import Background from './background';
import HomeButton from './homeButton';

interface HomeProps {
  scrollRef: React.MutableRefObject<HTMLDivElement[] | any>;
}

const HomeContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  padding: 2%;
`;

const Home: React.FC<HomeProps> = ({ ...props }: HomeProps) => {
  return (
    <>
      <HomeContainer ref={(cur) => (props.scrollRef.current[0] = cur)}>
        <HomeButton />
        <Text />
      </HomeContainer>
      <Background />
    </>
  );
};

export default Home;
