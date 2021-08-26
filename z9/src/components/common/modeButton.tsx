import React from 'react';
import styled from 'styled-components';
import { MoonStarsFill } from '@styled-icons/bootstrap/MoonStarsFill';
import { Sun } from '@styled-icons/fa-solid/Sun';

const LightButton = styled(Sun)`
  width: 70px;
  height: 70px;
  color: yellow;
  position: fixed;
  bottom: 10px;
  right: 80px;
  @media ${(props) => props.theme.mobile} {
    width: 50px;
    height: 50px;
  }
`;

const DarkButton = styled(MoonStarsFill)`
  width: 70px;
  height: 70px;
  color: yellow;
  position: fixed;
  bottom: 10px;
  right: 80px;
  @media ${(props) => props.theme.mobile} {
    width: 50px;
    height: 50px;
  }
`;

const ModeButton: React.FC = () => {
  return <LightButton></LightButton>;
};

export default ModeButton;
