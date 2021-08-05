import React from 'react';
import styled from 'styled-components';
import * as info from '../../assets/information';

const Background = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 75vh;
  background-color: #3d3d3d;
`;

const ExperienceContainer = styled.div`
  width: 80%;
  height: 75vh;
  display: flex;
`;

const TimelineContainer = styled.div`
  width: 100%;
  background-color: #a9a9e7;
  display: flex;
  flex-direction: column;
`;

const UpConatiner = styled.div`
  width: 100%;
  height: 100%;
  background-color: #a9a9e7;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

const CenterContainer = styled.div`
  width: 100%;
  height: 15%;
  background-color: #a9a9e7;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Circle = styled.div`
  width: 35px;
  height: 35px;
  border: 2px solid white;
  border-radius: 50%;
  background-color: orange;
  @media ${(props) => props.theme.mobile} {
    width: 22px;
    height: 22px;
  }
`;

const Line = styled.hr`
  width: 50%;
  height: 3px;
  background-color: white;
  border: none;
  @media ${(props) => props.theme.mobile} {
    width: 40%;
  }
`;

const DownContainer = styled.div`
  width: 100%;
  height: 100%;
  background-color: #a9a9e7;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

const Title = styled.p`
  color: #f7bb62;
  font-size: 2.2rem;
  display: flex;
  justify-content: center;
  text-align: center;
  @media ${(props) => props.theme.mobile} {
    font-size: 1rem;
  }
`;

const Host = styled.p`
  color: white;
  font-size: 1.7rem;
  display: flex;
  justify-content: center;
  text-align: center;
  @media ${(props) => props.theme.mobile} {
    font-size: 0.7rem;
  }
`;

const Contents = styled.p`
  color: white;
  font-size: 1.7rem;
  display: flex;
  justify-content: center;
  text-align: center;
  @media ${(props) => props.theme.mobile} {
    font-size: 0.7rem;
  }
`;

const Period = styled.p`
  color: #ffd760;
  font-size: 1.5rem;
  display: flex;
  justify-content: center;
  @media ${(props) => props.theme.mobile} {
    font-size: 0.5rem;
  }
`;

const Experience: React.FC = () => {
  return (
    <Background>
      <ExperienceContainer>
        <TimelineContainer>
          <UpConatiner>
            <Title>{info.experience.card1[0]}</Title>
            <Host>{info.experience.card1[1]}</Host>
            <Contents>{info.experience.card1[2]}</Contents>
          </UpConatiner>
          <CenterContainer>
            <Line />
            <Circle></Circle>
            <Line />
          </CenterContainer>
          <DownContainer>
            <Period>{info.experience.card1[3]}</Period>
          </DownContainer>
        </TimelineContainer>
        <TimelineContainer>
          <UpConatiner>
            <Period>{info.experience.card2[3]}</Period>
          </UpConatiner>
          <CenterContainer>
            <Line />
            <Circle></Circle>
            <Line />
          </CenterContainer>
          <DownContainer>
            <Title>{info.experience.card2[0]}</Title>
            <Host>{info.experience.card2[1]}</Host>
            <Contents>{info.experience.card2[2]}</Contents>
          </DownContainer>
        </TimelineContainer>
        <TimelineContainer>
          <UpConatiner></UpConatiner>
          <CenterContainer>
            <Line />
            <Circle></Circle>
            <Line />
          </CenterContainer>
          <DownContainer></DownContainer>
        </TimelineContainer>
      </ExperienceContainer>
    </Background>
  );
};

export default Experience;
