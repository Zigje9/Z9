import React from 'react';
import styled from 'styled-components';
import * as info from '../../assets/information';
import TitleContainer from './title';

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
`;

const ContentContainer = styled.div`
  width: 100%;
  height: 60%;
  border: 1px solid white;
`;

const ChipContainer = styled.div`
  width: 100%;
  height: 20%;
  border: 1px solid white;
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
`;

const ProjectContainer: React.FC<ContainerProps> = ({
  ...props
}: ContainerProps) => {
  return props.projectIdx === 0 ? (
    <NullContainer>프로젝트를 선택해 주세요!</NullContainer>
  ) : (
    <Container idx={props.projectIdx}>
      <TitleContainer projectIdx={props.projectIdx}></TitleContainer>
      <ContentContainer></ContentContainer>
      <ChipContainer></ChipContainer>
    </Container>
  );
};

export default ProjectContainer;
