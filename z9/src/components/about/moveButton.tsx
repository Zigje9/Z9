import React from 'react';
import styled from 'styled-components';
import { ArrowLeftShort } from '@styled-icons/bootstrap/ArrowLeftShort';
import { ArrowRightShort } from '@styled-icons/bootstrap/ArrowRightShort';
interface MoveProps {
  moveLeft?: () => void;
  moveRight?: () => void;
  isLeft: boolean;
}

const ButtonContainer = styled.div`
  width: 100vw;
  height: 8vh;
  display: flex;
  justify-content: space-evenly;
  align-items: center; ;
`;

const LeftButton = styled(ArrowLeftShort)`
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

const RightButton = styled(ArrowRightShort)`
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
      {props.isLeft ? (
        <LeftButton onClick={props.moveLeft} />
      ) : (
        <RightButton onClick={props.moveRight} />
      )}
    </ButtonContainer>
  );
};

export default MoveButton;
