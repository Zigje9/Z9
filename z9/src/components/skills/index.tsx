import React from 'react';
import styled from 'styled-components';
import CardExplain from './cardExplain';
import Card from './card';
import { InformationCircle } from '@styled-icons/heroicons-solid/InformationCircle';
interface SkillsProps {
  scrollRef: React.MutableRefObject<HTMLDivElement[] | any>;
}

const SkillsContainer = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #2d2a2c;
  display: flex;
  flex-direction: column;
`;

const LineContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
`;

const CardContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const TitleContainer = styled.div`
  width: 90vw;
  margin-left: 50px;
  height: 20vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  align-items: baseline;
  @media ${(props) => props.theme.mobile} {
    margin-left: 20px;
  }
`;

const Title = styled.p`
  color: white;
  font-size: 6rem;
  line-height: 1%;
  @media ${(props) => props.theme.mobile} {
    font-size: 1.7rem;
  }
`;

const InfoIcon = styled(InformationCircle)`
  width: 40px;
  color: white;
  &:hover {
    cursor: pointer;
    transform: scale(1.2);
  }
  @media ${(props) => props.theme.mobile} {
    width: 20px;
  }
`;

const Skills: React.FC<SkillsProps> = ({ ...props }: SkillsProps) => {
  return (
    <SkillsContainer ref={(cur) => (props.scrollRef.current[2] = cur)}>
      <TitleContainer>
        <Title>
          &nbsp; SKILLS
          <InfoIcon
            onClick={() =>
              alert('\n\n 기술의 활용 능력 수치는 주관적으로 작성했습니다 :)')
            }
          ></InfoIcon>
        </Title>
      </TitleContainer>
      <LineContainer>
        <CardContainer>
          <CardExplain cardIdx={1}></CardExplain>
          <Card cardIdx={1}></Card>
        </CardContainer>
        <CardContainer>
          <CardExplain cardIdx={2}></CardExplain>
          <Card cardIdx={2}></Card>
        </CardContainer>
      </LineContainer>
      <LineContainer>
        <CardContainer>
          <CardExplain cardIdx={3}></CardExplain>
          <Card cardIdx={3}></Card>
        </CardContainer>
        <CardContainer>
          <CardExplain cardIdx={4}></CardExplain>
          <Card cardIdx={4}></Card>
        </CardContainer>
      </LineContainer>
    </SkillsContainer>
  );
};

export default Skills;
