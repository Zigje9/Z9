import React from 'react';
import styled from 'styled-components';
import * as animation from '../../assets/animation';
import Footer from './footer';

interface ProjectsProps {
  scrollRef: React.MutableRefObject<HTMLDivElement[] | any>;
}

const ProjectsContainer = styled.div`
  height: 100vh;
  background-color: #3d3d3d;
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
  margin: 0 auto 500px auto;
  width: 25%;
  perspective: 1000px;
`;

const Carousel = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  transform-style: preserve-3d;
  transform: rotateY(-360deg) translateZ(-500px);
  animation: ${animation.rotateY} 15s steps(1000, end) infinite;
  &:hover {
    /* animation-play-state: paused; */
  }
`;

const Card1 = styled.div`
  position: absolute;
  top: 20px;
  left: 10px;
  width: 25vw;
  height: 25vh;
  background-color: pink;
  transform: rotateY(0deg) translateZ(500px);
  border-radius: 20px;
  &:hover {
    background-color: green;
    cursor: pointer;
  }
`;

const Card2 = styled.div`
  position: absolute;
  top: 20px;
  left: 10px;
  width: 25vw;
  height: 25vh;
  background-color: black;
  transform: rotateY(90deg) translateZ(500px);
  border-radius: 20px;
  opacity: 0.6;
  &:hover {
    background-color: black;
    cursor: pointer;
    transform: rotateY(90deg) translateZ(500px) translateY(-50px);
    opacity: 1;
  }
`;

const Card3 = styled.div`
  position: absolute;
  top: 20px;
  left: 10px;
  width: 25vw;
  height: 25vh;
  background-color: red;
  transform: rotateY(180deg) translateZ(500px);
  border-radius: 20px;
  &:hover {
    background-color: green;
    cursor: pointer;
  }
`;

const Card4 = styled.div`
  position: absolute;
  top: 20px;
  left: 10px;
  width: 25vw;
  height: 25vh;
  background-color: orange;
  transform: rotateY(270deg) translateZ(500px);
  border-radius: 20px;
`;

const Projects: React.FC<ProjectsProps> = ({ ...props }: ProjectsProps) => {
  return (
    <ProjectsContainer ref={(cur) => (props.scrollRef.current[3] = cur)}>
      <TitleContainer>
        <Title>PROJECTS</Title>
      </TitleContainer>

      <CarouselContainer>
        <Carousel>
          <Card1></Card1>
          <Card2></Card2>
          <Card3></Card3>
          <Card4></Card4>
        </Carousel>
      </CarouselContainer>
      <Footer />
    </ProjectsContainer>
  );
};

export default Projects;
