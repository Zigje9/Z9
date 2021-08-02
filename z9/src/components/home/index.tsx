import React from 'react';
import styled from 'styled-components';
import Title from './title';
import Introduce from './introduce';
import Background from './background';

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
        <Title />
        <Introduce />
      </HomeContainer>
      <Background />
    </>
  );
};

export default Home;
