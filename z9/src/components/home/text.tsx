import React from 'react';
import styled from 'styled-components';
import * as animation from '../../assets/animation';
import * as info from '../../assets/information';

const Title = styled.p`
  overflow: hidden;
  border-right: 0.1em solid orange;
  color: white;
  font-size: 50px;
  white-space: nowrap;
  margin: 0 auto;
  letter-spacing: 0.2em;
  animation: ${animation.typing} 2.5s steps(30, end),
    ${animation.blink} 0.3s step-end infinite;
`;

const Text: React.FC = () => {
  return <Title>{info.home.text}</Title>;
};

export default Text;
