import React from 'react';
import styled from 'styled-components';
import img from '../../assets/images/sky.jpeg';

const BackContainer = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  background-color: black;
  background-image: url(${img});
  background-repeat: no-repeat;
  background-size: 35% 100%;
  background-position: center;
  opacity: 0.8;
  @media ${(props) => props.theme.mobile} {
    background-size: cover;
    background-position: 0;
  }
`;

const Background: React.FC = () => {
  return <BackContainer />;
};

export default Background;