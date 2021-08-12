import React from 'react';
import styled from 'styled-components';
import * as info from '../../assets/information';
import TitleContainer from './title';
import Chip from './chip';
import Subject from './subject';
import Explain from './explain';

interface ContainerProps {
  projectIdx: number;
}

interface ContainerStyleProps {
  idx: number;
}

const Container = styled.div<ContainerStyleProps>`
  width: 50vw;
  height: 65vh;
  border: ${(props) => `3px solid ${info.projects.borderColor[props.idx - 1]}`};
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media ${(props) => props.theme.mobile} {
    width: 80vw;
  }
`;

const ContentContainer = styled.div`
  width: 90%;
  height: 60%;
`;

const ChipContainer = styled.div`
  width: 100%;
  height: 30%;
  display: flex;
  align-items: center;
  @media ${(props) => props.theme.mobile} {
    height: 25%;
    flex-wrap: wrap;
  }
`;

const NullContainer = styled.div`
  width: 50vw;
  height: 50vh;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 5rem;
  color: white;
  @media ${(props) => props.theme.mobile} {
    font-size: 1.2rem;
  }
`;

const ProjectContainer: React.FC<ContainerProps> = ({
  ...props
}: ContainerProps) => {
  return props.projectIdx === 0 ? (
    <NullContainer>프로젝트를 선택해 주세요!</NullContainer>
  ) : (
    <Container idx={props.projectIdx}>
      <TitleContainer projectIdx={props.projectIdx}></TitleContainer>
      <ContentContainer>
        <Subject idx={props.projectIdx}></Subject>
        <Explain idx={props.projectIdx}></Explain>
      </ContentContainer>
      <ChipContainer>
        {info.projects.chips[props.projectIdx - 1].map((tag, idx) => {
          return (
            <Chip key={`${tag}_${idx}`} idx={props.projectIdx}>
              {tag}
            </Chip>
          );
        })}
      </ChipContainer>
    </Container>
  );
};

export default ProjectContainer;
