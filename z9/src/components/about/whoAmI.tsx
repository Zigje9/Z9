import React from 'react';
import styled from 'styled-components';

const Background = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 75vh;
  background-color: #3d3d3d;
`;

const WhoAmIContainer = styled.div`
  width: 85%;
  height: 75vh;
  background-color: pink;
  border-radius: 10px;
  @media ${(props) => props.theme.mobile} {
    width: 80%;
  }
`;

const WhoAmI: React.FC = () => {
  return (
    <Background>
      <WhoAmIContainer></WhoAmIContainer>
    </Background>
  );
};

export default WhoAmI;
