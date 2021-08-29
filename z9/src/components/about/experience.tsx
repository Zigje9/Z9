import React from 'react';
import styled from 'styled-components';
import * as info from '../../assets/information';

const Background = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.color.about.container};
  width: 100%;
  height: 70vh;
`;

const ExperienceContainer = styled.div`
  width: 80%;
  height: 70vh;
  display: flex;
`;

const TimelineContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const UpConatiner = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

const CenterContainer = styled.div`
  width: 100%;
  height: 15%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Circle = styled.div`
  width: 35px;
  height: 35px;
  border: 2px solid ${(props) => props.theme.color.about.experienceText};
  border-radius: 50%;
  background-color: ${(props) => props.theme.color.about.experienceSubText};
  @media ${(props) => props.theme.mobile} {
    width: 22px;
    height: 22px;
  }
`;

const Line = styled.hr`
  width: 50%;
  height: 3px;
  background-color: ${(props) => props.theme.color.about.experienceText};
  border: none;
  @media ${(props) => props.theme.mobile} {
    width: 40%;
  }
`;

const DownContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

const Title = styled.p`
  color: ${(props) => props.theme.color.about.experienceSubText};
  font-size: 2rem;
  display: flex;
  justify-content: center;
  text-align: center;
  @media ${(props) => props.theme.mobile} {
    font-size: 1rem;
  }
`;

const Host = styled.p`
  color: ${(props) => props.theme.color.about.experienceText};
  font-size: 1.8rem;
  display: flex;
  justify-content: center;
  text-align: center;
  @media ${(props) => props.theme.mobile} {
    font-size: 0.7rem;
  }
`;

const Contents = styled.p`
  color: ${(props) => props.theme.color.about.experienceText};
  font-size: 2rem;
  display: flex;
  justify-content: center;
  text-align: center;
  @media ${(props) => props.theme.mobile} {
    font-size: 0.7rem;
  }
`;

const Period = styled.p`
  color: ${(props) => props.theme.color.about.experienceSubText};
  font-size: 1.7rem;
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
          <UpConatiner>
            <Title>{info.experience.card3[0]}</Title>
            <Host>{info.experience.card3[1]}</Host>
            <Contents>{info.experience.card3[2]}</Contents>
          </UpConatiner>
          <CenterContainer>
            <Line />
            <Circle></Circle>
            <Line />
          </CenterContainer>
          <DownContainer>
            <Period>{info.experience.card3[3]}</Period>
          </DownContainer>
        </TimelineContainer>
      </ExperienceContainer>
    </Background>
  );
};

export default Experience;
