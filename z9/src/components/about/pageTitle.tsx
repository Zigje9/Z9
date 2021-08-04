import React from 'react';
import styled from 'styled-components';
import * as info from '../../assets/information';

interface TitleProps {
  titleIdx: number;
}

interface CircleProps {
  now: boolean;
}

const TitleContainer = styled.div`
  width: 90vw;
  margin-left: 50px;
  height: 12vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media ${(props) => props.theme.mobile} {
    margin-left: 20px;
  }
`;

const Text = styled.p`
  color: white;
  font-size: 3rem;
  @media ${(props) => props.theme.mobile} {
    font-size: 2rem;
  }
`;

const ProgressBox = styled.div`
  width: 130px;
  height: 7vh;
  border: 1px solid gray;
  border-radius: 30px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  @media ${(props) => props.theme.mobile} {
    width: 80px;
    height: 5vh;
  }
`;

const Circle = styled.div<CircleProps>`
  width: 25px;
  height: 25px;
  background-color: ${(props) => (props.now ? `white` : `gray`)};
  border-radius: 50%;
  @media ${(props) => props.theme.mobile} {
    width: 15px;
    height: 15px;
  }
`;

const Title: React.FC<TitleProps> = ({ ...props }: TitleProps) => {
  return (
    <TitleContainer>
      <Text>{info.about.title[props.titleIdx]}</Text>
      <ProgressBox>
        {[0, 1, 2].map((key) => {
          return <Circle key={key} now={key === props.titleIdx}></Circle>;
        })}
      </ProgressBox>
    </TitleContainer>
  );
};

export default Title;
