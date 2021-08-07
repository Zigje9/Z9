import React from 'react';
import styled from 'styled-components';
import * as animation from '../../assets/animation';

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

const Title = styled.p`
  width: 100%;
  color: white;
  font-size: 3rem;
  @media ${(props) => props.theme.mobile} {
    font-size: 2rem;
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
    animation-play-state: paused;
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
`;

const Card2 = styled.div`
  position: absolute;
  top: 20px;
  left: 10px;
  width: 25vw;
  height: 25vh;
  background-color: blue;
  transform: rotateY(90deg) translateZ(500px);
  border-radius: 20px;
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
      <Title>&nbsp; Projects</Title>
      <CarouselContainer>
        <Carousel>
          <Card1></Card1>
          <Card2></Card2>
          <Card3></Card3>
          <Card4></Card4>
        </Carousel>
      </CarouselContainer>
    </ProjectsContainer>
  );
};

export default Projects;
