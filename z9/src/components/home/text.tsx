import React from 'react';
import styled from 'styled-components';
import * as animation from '../../assets/animation';
import * as info from '../../assets/information';

const Title = styled.p`
  width: 85%;
  overflow: hidden;
  border-right: 0.1em solid white;
  color: white;
  font-size: 4rem;
  white-space: nowrap;
  margin: 0 auto;
  letter-spacing: 0.1em;
  animation: ${animation.typing} 2.5s steps(30, end),
    ${animation.blink} 0.3s step-end infinite;

  @media ${(props) => props.theme.mobile} {
    font-size: 1.1rem;
  }
`;

const TextContainer = styled.div`
  width: 100%;
  height: 50%;
  display: flex;
  overflow: hidden;
  flex-direction: column;
  @media ${(props) => props.theme.mobile} {
    padding: 5%;
  }
`;

const Text: React.FC = () => {
  return (
    <TextContainer>
      {info.home.text.map((str, idx) => {
        return <Title key={idx}>{str}</Title>;
      })}
    </TextContainer>
  );
};

export default Text;
