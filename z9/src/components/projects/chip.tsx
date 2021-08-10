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
  width: 100px;
  height: 40px;
  background-color: ${(props) => `${info.projects.borderColor[props.idx - 1]}`};
  border-radius: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ChipContent = styled.p<ChipStyleProps>`
  color: ${(props) => (props.idx <= 2 ? 'black' : 'white')};
  font-size: 1rem;
  @media ${(props) => props.theme.mobile} {
    font-size: 0.7rem;
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
