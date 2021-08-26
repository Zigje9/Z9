import React from 'react';
import styled from 'styled-components';
import * as info from '../../assets/information';
import * as animation from '../../assets/animation';

interface CareerProps {
  now: number;
}

interface CardProps {
  animation: any;
}

interface TextLineProps {
  alignItems: string;
}

const Background = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 70vh;
`;

const CareerContainer = styled.div`
  width: 80%;
  height: 70vh;
  border-radius: 10px;
  display: flex;
`;

const SideContainer = styled.div`
  width: 49%;
  height: 100%;
  display: flex;
  @media ${(props) => props.theme.mobile} {
    width: 45%;
  }
`;

const CenterContainer = styled.div`
  width: 2%;
  height: 100%;
  background: rgb(174, 255, 54);
  background: rgb(133, 224, 137);
  background: linear-gradient(
    90deg,
    rgba(133, 224, 137, 1) 0%,
    rgba(113, 233, 118, 1) 33%,
    rgba(64, 210, 69, 1) 77%,
    rgba(71, 227, 77, 1) 100%
  );
  @media ${(props) => props.theme.mobile} {
    width: 10%;
  }
`;

const Card = styled.div<CardProps>`
  width: 100%;
  height: 33.3%;
  border-bottom: 7px solid #5ace5f;
  animation: ${(props) => props.animation};
  animation-duration: 1.2s;
  animation-timing-function: ease-out;
  animation-iteration-count: 1;
  animation-fill-mode: forwards;
  display: flex;
  margin: 0 10%;
  @media ${(props) => props.theme.mobile} {
    margin: 0 3%;
    border-bottom: 3px solid #5ace5f;
  }
`;

const TextLine = styled.div<TextLineProps>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: ${(props) => props.alignItems};
  width: 100%;
  height: 100%;
`;

const HighlightText = styled.p`
  background: rgb(210, 75, 32);
  background: linear-gradient(
    96deg,
    rgba(210, 75, 32, 1) 12%,
    rgba(246, 142, 65, 1) 55%,
    rgba(230, 229, 179, 1) 100%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 2em;
  @media ${(props) => props.theme.mobile} {
    font-size: 0.9rem;
  }
`;

const Text = styled.p`
  color: ${(props) => props.theme.color.about.careerText};
  font-size: 1.7rem;
  line-height: 50%;
  @media ${(props) => props.theme.mobile} {
    font-size: 0.7rem;
  }
`;

const Career: React.FC<CareerProps> = ({ ...props }: CareerProps) => {
  return (
    <Background>
      <CareerContainer>
        <SideContainer>
          {props.now === 1 ? (
            <Card animation={animation.drop1}>
              <TextLine alignItems={'flex-end'}>
                <HighlightText>{info.career.card1[0]}</HighlightText>
                <Text>{info.career.card1[1]}</Text>
                <Text>{info.career.card1[2]}</Text>
              </TextLine>
            </Card>
          ) : (
            <></>
          )}
        </SideContainer>
        <CenterContainer></CenterContainer>
        <SideContainer>
          {props.now === 1 ? (
            <Card animation={animation.drop2}>
              <TextLine alignItems={'flex-start'}>
                <HighlightText>{info.career.card2[0]}</HighlightText>
                <Text>{info.career.card2[1]}</Text>
              </TextLine>
            </Card>
          ) : (
            <></>
          )}
        </SideContainer>
      </CareerContainer>
    </Background>
  );
};

export default Career;
