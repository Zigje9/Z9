import React from 'react';
import styled from 'styled-components';
import * as animation from '../../assets/animation';
import { ChevronsDown } from '@styled-icons/boxicons-regular/ChevronsDown';
import { Home } from '@styled-icons/boxicons-regular/Home';

interface ScrollProps {
  nowPos: number;
  click: () => void;
}

const DownButton = styled(ChevronsDown)`
  width: 70px;
  height: 70px;
  color: white;
  position: fixed;
  bottom: 10px;
  right: 10px;
  animation: ${animation.blink2} 1.5s infinite;
  &:hover {
    cursor: pointer;
  }
  @media ${(props) => props.theme.mobile} {
    width: 50px;
    height: 50px;
  }
`;

const HomeButton = styled(Home)`
  width: 70px;
  height: 70px;
  color: white;
  position: fixed;
  bottom: 10px;
  right: 10px;
  animation: ${animation.blink2} 1.5s infinite;
  &:hover {
    cursor: pointer;
  }
  @media ${(props) => props.theme.mobile} {
    width: 50px;
    height: 50px;
  }
`;

const ScrollButton: React.FC<ScrollProps> = ({ ...props }: ScrollProps) => {
  return props.nowPos > 0 ? (
    <DownButton onClick={() => props.click()} />
  ) : (
    <HomeButton onClick={() => props.click()} />
  );
};

export default ScrollButton;
