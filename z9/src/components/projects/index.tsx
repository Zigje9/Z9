import React, { useState } from 'react';
import styled from 'styled-components';
import * as animation from '../../assets/animation';
import * as info from '../../assets/information';
import Footer from './footer';
import ProjectInfo from './projectContainer';

interface ProjectsProps {
  scrollRef: React.MutableRefObject<HTMLDivElement[] | any>;
}

interface CardProps {
  projectIdx: number;
}

const ProjectsContainer = styled.div`
  height: 100vh;
  background-color: #262424;
  display: flex;
  align-items: center;
  flex-direction: column;
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

const CarouselContainer = styled.div`
  position: relative;
  margin: 8vh 0 0 10vw;
  width: 1vw;
  height: 10vh;
  perspective: 3000px;
  display: flex;
  justify-content: flex-end;
  @media ${(props) => props.theme.mobile} {
    margin: 8vh 0 0 40vw;
    width: 10vw;
    height: 12vh;
    perspective: 1000px;
  }
`;

const Carousel = styled.div`
  position: absolute;
  width: 10vw;
  height: 100%;
  transform-style: preserve-3d;
  transform: rotateY(-360deg) translateZ(1000px);
  animation: ${animation.rotateY} 8s steps(1000, end) infinite;
  @media ${(props) => props.theme.mobile} {
    position: absolute;
    width: 200px;
    height: 100%;
  }
`;

const Card1 = styled.div<CardProps>`
  position: absolute;
  top: 20px;
  left: 30px;
  width: 10vw;
  height: 13vh;
  border-radius: 20px;
  background-color: ${info.projects.borderColor[0]};
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
  color: white;
  transform: ${(props) =>
    props.projectIdx === 1
      ? `rotateY(0deg) translateZ(200px) translateY(-50px)`
      : `rotateY(0deg) translateZ(200px)`};
  opacity: ${(props) => (props.projectIdx === 1 ? `1` : `0.4`)};
  &:hover {
    cursor: pointer;
    transform: rotateY(0deg) translateZ(200px) translateY(-35px);
    opacity: 1;
  }
  @media ${(props) => props.theme.tablet} {
    width: 20vw;
    height: 12vh;
    font-size: 1.5rem;
    transform: ${(props) =>
      props.projectIdx === 1
        ? `rotateY(0deg) translateZ(150px) translateY(-35px)`
        : `rotateY(0deg) translateZ(150px)`};
    &:hover {
      cursor: pointer;
      transform: rotateY(0deg) translateZ(150px) translateY(-35px);
      opacity: 1;
    }
  }
  @media ${(props) => props.theme.mobile} {
    width: 25vw;
    height: 12vh;
    font-size: 0.8rem;
    transform: ${(props) =>
      props.projectIdx === 1
        ? `rotateY(0deg) translateZ(100px) translateY(-35px)`
        : `rotateY(0deg) translateZ(100px)`};
    &:hover {
      cursor: pointer;
      transform: rotateY(0deg) translateZ(100px) translateY(-35px);
      opacity: 1;
    }
  }
`;

const Card2 = styled.div<CardProps>`
  position: absolute;
  top: 20px;
  left: 30px;
  width: 10vw;
  height: 13vh;
  background-color: ${info.projects.borderColor[1]};
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
  color: white;
  transform: ${(props) =>
    props.projectIdx === 2
      ? `rotateY(90deg) translateZ(200px) translateY(-50px)`
      : `rotateY(90deg) translateZ(200px)`};
  opacity: ${(props) => (props.projectIdx === 2 ? `1` : `0.4`)};
  &:hover {
    cursor: pointer;
    transform: rotateY(90deg) translateZ(200px) translateY(-35px);
    opacity: 1;
  }
  @media ${(props) => props.theme.tablet} {
    width: 20vw;
    height: 12vh;
    font-size: 1.5rem;
    transform: ${(props) =>
      props.projectIdx === 2
        ? `rotateY(90deg) translateZ(150px) translateY(-35px)`
        : `rotateY(90deg) translateZ(150px)`};
    &:hover {
      cursor: pointer;
      transform: rotateY(90deg) translateZ(150px) translateY(-35px);
      opacity: 1;
    }
  }
  @media ${(props) => props.theme.mobile} {
    width: 25vw;
    height: 12vh;
    font-size: 0.8rem;
    transform: ${(props) =>
      props.projectIdx === 2
        ? `rotateY(90deg) translateZ(100px) translateY(-35px)`
        : `rotateY(90deg) translateZ(100px)`};
    &:hover {
      cursor: pointer;
      transform: rotateY(90deg) translateZ(100px) translateY(-35px);
      opacity: 1;
    }
  }
`;

const Card3 = styled.div<CardProps>`
  position: absolute;
  top: 20px;
  left: 30px;
  width: 10vw;
  height: 13vh;
  background-color: ${info.projects.borderColor[2]};
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
  color: white;
  transform: ${(props) =>
    props.projectIdx === 3
      ? `rotateY(180deg) translateZ(200px) translateY(-50px)`
      : `rotateY(180deg) translateZ(200px)`};
  opacity: ${(props) => (props.projectIdx === 3 ? `1` : `0.4`)};
  &:hover {
    cursor: pointer;
    transform: rotateY(180deg) translateZ(200px) translateY(-35px);
    opacity: 1;
  }
  @media ${(props) => props.theme.tablet} {
    width: 20vw;
    height: 12vh;
    font-size: 1.5rem;
    transform: ${(props) =>
      props.projectIdx === 3
        ? `rotateY(180deg) translateZ(150px) translateY(-35px)`
        : `rotateY(180deg) translateZ(150px)`};
    &:hover {
      cursor: pointer;
      transform: rotateY(180deg) translateZ(150px) translateY(-35px);
      opacity: 1;
    }
  }
  @media ${(props) => props.theme.mobile} {
    width: 25vw;
    height: 12vh;
    font-size: 0.8rem;
    transform: ${(props) =>
      props.projectIdx === 3
        ? `rotateY(180deg) translateZ(100px) translateY(-35px)`
        : `rotateY(180deg) translateZ(100px)`};
    &:hover {
      cursor: pointer;
      transform: rotateY(180deg) translateZ(100px) translateY(-35px);
      opacity: 1;
    }
  }
`;

const Card4 = styled.div<CardProps>`
  position: absolute;
  top: 20px;
  left: 30px;
  width: 10vw;
  height: 13vh;
  background-color: ${info.projects.borderColor[3]};
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
  color: white;
  transform: ${(props) =>
    props.projectIdx === 4
      ? `rotateY(270deg) translateZ(200px) translateY(-50px)`
      : `rotateY(270deg) translateZ(200px)`};
  opacity: ${(props) => (props.projectIdx === 4 ? `1` : `0.4`)};
  &:hover {
    cursor: pointer;
    transform: rotateY(270deg) translateZ(200px) translateY(-35px);
    opacity: 1;
  }
  @media ${(props) => props.theme.tablet} {
    width: 20vw;
    height: 12vh;
    font-size: 1.5rem;
    transform: ${(props) =>
      props.projectIdx === 4
        ? `rotateY(270deg) translateZ(150px) translateY(-35px)`
        : `rotateY(270deg) translateZ(150px)`};
    &:hover {
      cursor: pointer;
      transform: rotateY(270deg) translateZ(150px) translateY(-35px);
      opacity: 1;
    }
  }
  @media ${(props) => props.theme.mobile} {
    width: 25vw;
    height: 12vh;
    font-size: 0.8rem;
    transform: ${(props) =>
      props.projectIdx === 4
        ? `rotateY(270deg) translateZ(100px) translateY(-35px)`
        : `rotateY(270deg) translateZ(100px)`};
    &:hover {
      cursor: pointer;
      transform: rotateY(270deg) translateZ(100px) translateY(-35px);
      opacity: 1;
    }
  }
`;

const Projects: React.FC<ProjectsProps> = ({ ...props }: ProjectsProps) => {
  const [projectIdx, setProjectIdx] = useState<number>(0);
  return (
    <ProjectsContainer ref={(cur) => (props.scrollRef.current[3] = cur)}>
      <TitleContainer>
        <Title>PROJECTS</Title>
      </TitleContainer>
      <ProjectInfo projectIdx={projectIdx}></ProjectInfo>
      <CarouselContainer>
        <Carousel>
          <Card1 projectIdx={projectIdx} onClick={() => setProjectIdx(1)}>
            HoneyInMoney
          </Card1>
          <Card2 projectIdx={projectIdx} onClick={() => setProjectIdx(2)}>
            Portfolio
          </Card2>
          <Card3 projectIdx={projectIdx} onClick={() => setProjectIdx(3)}>
            Y-storage
          </Card3>
          <Card4 projectIdx={projectIdx} onClick={() => setProjectIdx(4)}>
            Chatter
          </Card4>
        </Carousel>
      </CarouselContainer>
      <Footer />
    </ProjectsContainer>
  );
};

export default Projects;
