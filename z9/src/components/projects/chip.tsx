import React from 'react';
import styled from 'styled-components';
import * as info from '../../assets/information';

interface ChipProps {
  children: string;
  idx: number;
}

interface ChipStyleProps {
  idx: number;
}

const ChipContainer = styled.div<ChipStyleProps>`
  height: 3.5rem;
  display: inline-block;
  background-color: ${(props) => `${info.projects.borderColor[props.idx - 1]}`};
  border-radius: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 1rem;
  @media ${(props) => props.theme.mobile} {
    height: 2.5rem;
  }
`;

const ChipContent = styled.p<ChipStyleProps>`
  color: ${(props) => (props.idx <= 2 ? 'black' : 'white')};
  font-size: 1.5rem;
  padding: 1.1rem;
  @media ${(props) => props.theme.tablet} {
    font-size: 1.3rem;
  }
  @media ${(props) => props.theme.mobile} {
    font-size: 0.7rem;
    padding: 0.7rem;
  }
`;

const Chip: React.FC<ChipProps> = ({ children, ...props }: ChipProps) => {
  return (
    <ChipContainer idx={props.idx}>
      <ChipContent idx={props.idx}>{children}</ChipContent>
    </ChipContainer>
  );
};

export default Chip;
