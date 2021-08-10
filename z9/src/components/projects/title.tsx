import React from 'react';
import styled from 'styled-components';
import * as info from '../../assets/information';
import Chip from './chip';
import { Github } from '@styled-icons/bootstrap/Github';

interface TitleProps {
  projectIdx: number;
}

interface SpanProps {
  idx: number;
}

const TitleContainer = styled.div`
  width: 100%;
  height: 20%;
  border: 1px solid white;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ProjectTitle = styled.div`
  height: 100%;
  width: 20%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Period = styled.div`
  height: 100%;
  width: 40%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const IconBox = styled.div`
  height: 100%;
  width: 20%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const GitHubIcon = styled(Github)`
  width: 40px;
  height: 40px;
  color: white;
  &:hover {
    cursor: pointer;
    transform: scale(1.2);
  }
`;

const Member = styled.div`
  height: 100%;
  width: 20%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const TitleSpan = styled.p<SpanProps>`
  color: ${(props) => `${info.projects.borderColor[props.idx - 1]}`};
  font-size: 1.8rem;
  display: flex;
  justify-content: center;
  align-items: center;
  @media ${(props) => props.theme.mobile} {
    font-size: 1rem;
  }
`;

const PeriodSpan = styled.p`
  color: white;
  font-size: 1.2rem;
  display: flex;
  justify-content: center;
  align-items: baseline;
  @media ${(props) => props.theme.mobile} {
    font-size: 1rem;
  }
`;

const Title: React.FC<TitleProps> = ({ ...props }: TitleProps) => {
  return (
    <TitleContainer>
      <ProjectTitle>
        <TitleSpan idx={props.projectIdx}>
          {info.projects.title[props.projectIdx - 1]}
        </TitleSpan>
      </ProjectTitle>
      <Period>
        <PeriodSpan>{info.projects.period[props.projectIdx - 1]}</PeriodSpan>
      </Period>
      <IconBox>
        <GitHubIcon
          onClick={() =>
            window.open(`${info.projects.link[props.projectIdx - 1]}`)
          }
        ></GitHubIcon>
      </IconBox>
      <Member>
        <Chip idx={props.projectIdx}>
          {info.projects.team[props.projectIdx - 1]}
        </Chip>
      </Member>
    </TitleContainer>
  );
};

export default Title;
