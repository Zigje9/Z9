import React from 'react';
import styled from 'styled-components';
import * as animation from '../../assets/animation';
import * as info from '../../assets/information';

const Phrases = styled.p`
  width: 85%;
  overflow: hidden;
  border-right: 0.1em solid white;
  color: white;
  font-size: 4.5rem;
  white-space: nowrap;
  margin: 0 auto;
  letter-spacing: 0.1em;
  animation: ${animation.typing} 2.5s steps(30, end),
    ${animation.blink} 0.3s step-end infinite;
  @media ${(props) => props.theme.tablet} {
    font-size: 2.5rem;
  }
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
    margin-top: 15px;
    padding: 5%;
  }
`;

const Title: React.FC = () => {
  return (
    <TextContainer>
      {info.home.title.map((str, idx) => {
        return <Phrases key={idx}>{str}</Phrases>;
      })}
    </TextContainer>
  );
};

export default Title;
