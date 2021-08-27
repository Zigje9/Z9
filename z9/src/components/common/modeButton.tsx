import React from 'react';
import styled from 'styled-components';
import { MoonStarsFill } from '@styled-icons/bootstrap/MoonStarsFill';
import { Sun } from '@styled-icons/fa-solid/Sun';
import * as animation from '../../assets/animation';

interface ModeProps {
  nowMode: boolean;
  click: () => void;
}

const LightButton = styled(Sun)`
  width: 50px;
  height: 50px;
  color: #fcf9b0;
  position: fixed;
  bottom: 20px;
  right: 80px;
  animation: ${animation.blink2} 1.2s infinite;
  & :hover {
    cursor: pointer;
  }
  @media ${(props) => props.theme.mobile} {
    width: 30px;
    height: 30px;
    right: 60px;
  }
`;

const DarkButton = styled(MoonStarsFill)`
  width: 50px;
  height: 50px;
  color: steelblue;
  position: fixed;
  bottom: 20px;
  right: 80px;
  animation: ${animation.blink2} 1.2s infinite;
  & :hover {
    cursor: pointer;
  }
  @media ${(props) => props.theme.mobile} {
    width: 30px;
    height: 30px;
    right: 60px;
  }
`;

const ModeButton: React.FC<ModeProps> = ({ ...props }: ModeProps) => {
  return props.nowMode ? (
    <LightButton onClick={() => props.click()} />
  ) : (
    <DarkButton onClick={() => props.click()} />
  );
};

export default ModeButton;
