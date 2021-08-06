import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import * as info from '../../assets/information';
import { Flip2 } from '@styled-icons/evaicons-solid/Flip2';

interface CardProps {
  cardIdx: number;
}

interface CardStyleProps {
  isFront: boolean;
}

interface DonutProps {
  animation: any;
}

const CardContainer = styled.div`
  width: 82%;
  height: 75%;
  perspective: 1500px;
`;

const Card = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;

const CardFront = styled.div<CardStyleProps>`
  position: absolute;
  height: 100%;
  width: 100%;
  backface-visibility: hidden;
  background: #4a605f;
  transition: 0.5s linear;
  transform: ${(props) => (props.isFront ? '' : `rotateY(180deg)`)};
  border-radius: 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  @media ${(props) => props.theme.mobile} {
    flex-direction: column;
  }
`;

const CardBack = styled.div<CardStyleProps>`
  position: absolute;
  height: 100%;
  width: 100%;
  backface-visibility: hidden;
  background: blue;
  transition: 0.5s linear;
  transform: ${(props) => (props.isFront ? `rotateY(-180deg)` : '')};
  border-radius: 20px;
`;

const Donut = styled.div<DonutProps>`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  animation: ${(props) => props.animation} 2s linear;
  animation-iteration-count: 1;
  animation-fill-mode: forwards;
  position: relative;
  @media ${(props) => props.theme.mobile} {
    width: 100px;
    height: 100px;
  }
`;

const InDonut = styled.span`
  position: absolute;
  background-color: white;
  width: 100px;
  height: 100px;
  text-align: center;
  color: black;
  line-height: 100px;
  border-radius: 50%;
  transform: translate(50%, 50%);
  font-size: 1.5rem;
  @media ${(props) => props.theme.mobile} {
    width: 50px;
    height: 50px;
    line-height: 50px;
    font-size: 0.7rem;
  }
`;

const FlipIcon = styled(Flip2)`
  width: 50px;
  color: white;
  &:hover {
    cursor: pointer;
    transform: scale(1.2);
  }
  @media ${(props) => props.theme.mobile} {
    width: 30px;
  }
`;

const SkillCard: React.FC<CardProps> = ({ ...props }: CardProps) => {
  const [isFront, setIsFront] = useState<boolean>(true);
  const { cardIdx } = props;

  const makeDonutAnimation = (color: string, percent: number) => {
    let str = ``;
    for (let i = 1; i <= 100; i++) {
      str += `${i}%{background: conic-gradient(${color} 0% ${
        (percent * i) / 100
      }%, #efedda ${(percent * i) / 100}% 100%)}`;
    }
    return str;
  };

  const color = info.skills.cardColor[cardIdx - 1];
  const percent = info.skills.cardPercent[cardIdx - 1];

  const donutAnimation = keyframes`${makeDonutAnimation(color, percent)}`;

  return (
    <CardContainer>
      <Card>
        <CardFront isFront={isFront}>
          {isFront ? (
            <>
              <Donut animation={donutAnimation}>
                <InDonut>{percent}%</InDonut>
              </Donut>
              <FlipIcon onClick={() => setIsFront(!isFront)}></FlipIcon>
            </>
          ) : (
            <></>
          )}
        </CardFront>
        <CardBack
          isFront={isFront}
          onClick={() => setIsFront(!isFront)}
        ></CardBack>
      </Card>
    </CardContainer>
  );
};

export default SkillCard;
