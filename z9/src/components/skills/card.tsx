import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import CardExplain from './cardExplain';
import * as info from '../../assets/information';

interface CardProps {
  cardIdx: number;
}

interface CardStyleProps {
  isFront: boolean;
  cardIdx: number;
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
  transition: 0.5s linear;
  border: 3px solid white;
  transform: ${(props) => (props.isFront ? '' : `rotateY(180deg)`)};
  border-radius: 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  overflow: hidden;
  &:hover {
    cursor: pointer;
    box-shadow: ${(props) => info.skills.cardShadow[props.cardIdx - 1]};
  }
  @media ${(props) => props.theme.mobile} {
    flex-direction: column;
  }
`;

const CardBack = styled.div<CardStyleProps>`
  position: absolute;
  height: 100%;
  width: 100%;
  backface-visibility: hidden;
  transition: 0.5s linear;
  transform: ${(props) => (props.isFront ? `rotateY(-180deg)` : '')};
  border: 3px solid white;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  &:hover {
    cursor: pointer;
  }
`;

const CardBackContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  @media ${(props) => props.theme.mobile} {
    flex-direction: column;
  }
`;

const TextContainer = styled.div`
  width: 60%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: baseline;
  @media ${(props) => props.theme.mobile} {
    width: 100%;
    height: 100%;
    justify-content: flex-end;
  }
`;

const DonutContainer = styled.div`
  width: 40%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  @media ${(props) => props.theme.mobile} {
    width: 100%;
    height: 0;
  }
`;

const Donut = styled.div<DonutProps>`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  animation: ${(props) => props.animation} 2s linear;
  animation-iteration-count: 1;
  animation-fill-mode: forwards;
  position: relative;
  @media ${(props) => props.theme.tablet} {
    width: 120px;
    height: 120px;
  }
  @media ${(props) => props.theme.mobile} {
    width: 100px;
    height: 100px;
  }
`;

const InDonut = styled.span`
  position: absolute;
  background-color: #2d2a2c;
  width: 150px;
  height: 150px;
  top: 50%;
  left: 50%;
  text-align: center;
  color: white;
  line-height: 150px;
  border-radius: 50%;
  transform: translate(-50%, -50%);
  font-size: 1.5rem;
  @media ${(props) => props.theme.tablet} {
    width: 90px;
    height: 90px;
    line-height: 90px;
    font-size: 0.7rem;
  }
  @media ${(props) => props.theme.mobile} {
    width: 75px;
    height: 75px;
    line-height: 75px;
    font-size: 0.7rem;
  }
`;

const Contents = styled.p`
  color: white;
  font-size: 1.2rem;
  @media ${(props) => props.theme.mobile} {
    font-size: 1rem;
  }
`;

const SkillCard: React.FC<CardProps> = ({ ...props }: CardProps) => {
  const [isFront, setIsFront] = useState<boolean>(true);
  const { cardIdx } = props;

  const makeDonutAnimation = (
    backColor: string,
    color: string,
    percent: number,
  ) => {
    let str = ``;
    for (let i = 1; i <= 100; i++) {
      str += `${i}%{background: conic-gradient(${color} 0% ${
        (percent * i) / 100
      }%, ${backColor} ${(percent * i) / 100}% 100%)}`;
    }
    return str;
  };

  const color = info.skills.cardColor[cardIdx - 1];
  const backColor = info.skills.cardBackColor[cardIdx - 1];
  const percent = info.skills.cardPercent[cardIdx - 1];

  const donutAnimation = keyframes`${makeDonutAnimation(
    backColor,
    color,
    percent,
  )}`;

  return (
    <CardContainer>
      <Card>
        <CardFront
          cardIdx={cardIdx}
          isFront={isFront}
          onClick={() => setIsFront(!isFront)}
        >
          <CardExplain cardIdx={cardIdx}></CardExplain>
        </CardFront>
        <CardBack
          cardIdx={cardIdx}
          isFront={isFront}
          onClick={() => setIsFront(!isFront)}
        >
          <CardBackContainer>
            {isFront ? (
              <DonutContainer></DonutContainer>
            ) : (
              <DonutContainer>
                <Donut animation={donutAnimation}>
                  <InDonut>{percent}%</InDonut>
                </Donut>
              </DonutContainer>
            )}

            {(() => {
              switch (cardIdx) {
                case 1:
                  return (
                    <TextContainer>
                      <Contents>&nbsp;&nbsp;{info.skills.card1[1]}</Contents>
                      <Contents>&nbsp;&nbsp;{info.skills.card1[2]}</Contents>
                      <Contents>&nbsp;&nbsp;{info.skills.card1[3]}</Contents>
                    </TextContainer>
                  );
                case 2:
                  return (
                    <TextContainer>
                      <Contents>&nbsp;&nbsp;{info.skills.card2[1]}</Contents>
                      <Contents>&nbsp;&nbsp;{info.skills.card2[2]}</Contents>
                    </TextContainer>
                  );
                case 3:
                  return (
                    <TextContainer>
                      <Contents>&nbsp;&nbsp;{info.skills.card3[1]}</Contents>
                      <Contents>&nbsp;&nbsp;{info.skills.card3[2]}</Contents>
                      <Contents>&nbsp;&nbsp;{info.skills.card3[3]}</Contents>
                    </TextContainer>
                  );
                case 4:
                  return (
                    <TextContainer>
                      <Contents>&nbsp;&nbsp;{info.skills.card4[1]}</Contents>
                      <Contents>&nbsp;&nbsp;{info.skills.card4[2]}</Contents>
                    </TextContainer>
                  );
                default:
                  return <TextContainer></TextContainer>;
              }
            })()}
          </CardBackContainer>
        </CardBack>
      </Card>
    </CardContainer>
  );
};

export default SkillCard;
