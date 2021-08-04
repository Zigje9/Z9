import React from 'react';
import styled from 'styled-components';
import { CaretLeftSquare } from '@styled-icons/bootstrap/CaretLeftSquare';
import { CaretRightSquare } from '@styled-icons/bootstrap/CaretRightSquare';

interface MoveProps {
  moveLeft: () => void;
  moveRight: () => void;
}

const ButtonContainer = styled.div`
  width: 100vw;
  height: 8vh;
  display: flex;
  justify-content: space-evenly;
  align-items: center; ;
`;

const LeftButton = styled(CaretLeftSquare)`
  width: 50px;
  color: white;
  &:hover {
    cursor: pointer;
    transform: scale(1.1);
  }
  @media ${(props) => props.theme.mobile} {
    width: 30px;
  }
`;

const RightButton = styled(CaretRightSquare)`
  width: 50px;
  color: white;
  &:hover {
    cursor: pointer;
    transform: scale(1.1);
  }
  @media ${(props) => props.theme.mobile} {
    width: 30px;
  }
`;

const MoveButton: React.FC<MoveProps> = ({ ...props }: MoveProps) => {
  return (
    <ButtonContainer>
      <LeftButton onClick={props.moveLeft} />
      <RightButton onClick={props.moveRight} />
    </ButtonContainer>
  );
};

export default MoveButton;
