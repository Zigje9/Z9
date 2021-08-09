import React, { useState } from 'react';
import styled from 'styled-components';
import * as animation from '../../assets/animation';
import Footer from './footer';

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
  margin: 10vh 0 0 10vw;
  width: 1vw;
  height: 10vh;
  perspective: 3000px;
  display: flex;
  justify-content: flex-end;
`;

const Carousel = styled.div`
  position: absolute;
  width: 10vw;
  height: 100%;
  transform-style: preserve-3d;
  transform: rotateY(-360deg) translateZ(1000px);
  animation: ${animation.rotateY} 8s steps(1000, end) infinite;
  &:hover {
    /* animation-play-state: paused; */
  }
`;

const Card1 = styled.div<CardProps>`
  position: absolute;
  top: 20px;
  left: 30px;
  width: 10vw;
  height: 10vh;
  border-radius: 20px;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
  transform: ${(props) =>
    props.projectIdx === 1
      ? `rotateY(0deg) translateZ(200px) translateY(-50px)`
      : `rotateY(0deg) translateZ(200px);`};
  opacity: ${(props) => (props.projectIdx === 1 ? `1` : `0.4`)};
  &:hover {
    cursor: pointer;
    transform: rotateY(0deg) translateZ(200px) translateY(-35px);
    opacity: 1;
  }
`;

const Card2 = styled.div<CardProps>`
  position: absolute;
  top: 20px;
  left: 30px;
  width: 10vw;
  height: 10vh;
  background-color: yellow;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
  transform: ${(props) =>
    props.projectIdx === 2
      ? `rotateY(90deg) translateZ(200px) translateY(-50px)`
      : `rotateY(90deg) translateZ(200px);`};
  opacity: ${(props) => (props.projectIdx === 2 ? `1` : `0.4`)};
  &:hover {
    cursor: pointer;
    transform: rotateY(90deg) translateZ(200px) translateY(-35px);
    opacity: 1;
  }
`;

const Card3 = styled.div<CardProps>`
  position: absolute;
  top: 20px;
  left: 30px;
  width: 10vw;
  height: 10vh;
  background-color: red;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
  transform: ${(props) =>
    props.projectIdx === 3
      ? `rotateY(180deg) translateZ(200px) translateY(-50px)`
      : `rotateY(180deg) translateZ(200px);`};
  opacity: ${(props) => (props.projectIdx === 3 ? `1` : `0.4`)};
  &:hover {
    cursor: pointer;
    transform: rotateY(180deg) translateZ(200px) translateY(-35px);
    opacity: 1;
  }
`;

const Card4 = styled.div<CardProps>`
  position: absolute;
  top: 20px;
  left: 30px;
  width: 10vw;
  height: 10vh;
  background-color: blue;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
  transform: ${(props) =>
    props.projectIdx === 4
      ? `rotateY(270deg) translateZ(200px) translateY(-50px)`
      : `rotateY(270deg) translateZ(200px);`};
  opacity: ${(props) => (props.projectIdx === 4 ? `1` : `0.4`)};
  &:hover {
    cursor: pointer;
    transform: rotateY(270deg) translateZ(200px) translateY(-35px);
    opacity: 1;
  }
`;

const ProjectInfo = styled.div`
  width: 100%;
  height: 60vh;
  background-color: green;
`;

const Projects: React.FC<ProjectsProps> = ({ ...props }: ProjectsProps) => {
  const [projectIdx, setProjectIdx] = useState<number>(0);
  return (
    <ProjectsContainer ref={(cur) => (props.scrollRef.current[3] = cur)}>
      <TitleContainer>
        <Title>PROJECTS</Title>
      </TitleContainer>
      <ProjectInfo></ProjectInfo>
      <CarouselContainer>
        <Carousel>
          <Card1 projectIdx={projectIdx} onClick={() => setProjectIdx(1)}>
            Chatter
          </Card1>
          <Card2 projectIdx={projectIdx} onClick={() => setProjectIdx(2)}>
            HoneyInMoney
          </Card2>
          <Card3 projectIdx={projectIdx} onClick={() => setProjectIdx(3)}>
            Y-storage
          </Card3>
          <Card4 projectIdx={projectIdx} onClick={() => setProjectIdx(4)}>
            Portfolio
          </Card4>
        </Carousel>
      </CarouselContainer>
      <Footer />
    </ProjectsContainer>
  );
};

export default Projects;

// import React from 'react';
// import styled from 'styled-components';
// import * as animation from '../../assets/animation';
// import Footer from './footer';

// interface ProjectsProps {
//   scrollRef: React.MutableRefObject<HTMLDivElement[] | any>;
// }

// const ProjectsContainer = styled.div`
//   height: 100vh;
//   background-color: #3d3d3d;
//   display: flex;
//   align-items: center;
//   flex-direction: column;
// `;

// const TitleContainer = styled.div`
//   width: 90vw;
//   margin-left: 50px;
//   height: 20vh;
//   display: flex;
//   align-items: center;
//   justify-content: space-between;
//   align-items: baseline;
//   @media ${(props) => props.theme.mobile} {
//     margin-left: 20px;
//   }
// `;

// const Title = styled.p`
//   color: white;
//   font-size: 6rem;
//   line-height: 1%;
//   @media ${(props) => props.theme.mobile} {
//     font-size: 1.7rem;
//   }
// `;

// const CarouselContainer = styled.div`
//   position: relative;
//   margin: 0 auto 500px auto;
//   width: 25%;
//   perspective: 1000px;
// `;

// const Carousel = styled.div`
//   position: absolute;
//   width: 100%;
//   height: 100%;
//   transform-style: preserve-3d;
//   transform: rotateY(-360deg) translateZ(-500px);
//   animation: ${animation.rotateY} 15s steps(1000, end) infinite;
//   &:hover {
//     /* animation-play-state: paused; */
//   }
// `;

// const Card1 = styled.div`
//   position: absolute;
//   top: 20px;
//   left: 10px;
//   width: 25vw;
//   height: 25vh;
//   background-color: pink;
//   transform: rotateY(0deg) translateZ(500px);
//   border-radius: 20px;
//   &:hover {
//     background-color: green;
//     cursor: pointer;
//   }
// `;

// const Card2 = styled.div`
//   position: absolute;
//   top: 20px;
//   left: 10px;
//   width: 25vw;
//   height: 25vh;
//   background-color: black;
//   transform: rotateY(90deg) translateZ(500px);
//   border-radius: 20px;
//   opacity: 0.6;
//   &:hover {
//     background-color: black;
//     cursor: pointer;
//     /* transform: rotateY(90deg) translateZ(500px) translateY(-50px); */
//     opacity: 1;
//   }
// `;

// const Card3 = styled.div`
//   position: absolute;
//   top: 20px;
//   left: 10px;
//   width: 25vw;
//   height: 25vh;
//   background-color: red;
//   transform: rotateY(180deg) translateZ(500px);
//   border-radius: 20px;
//   &:hover {
//     background-color: green;
//     cursor: pointer;
//   }
// `;

// const Card4 = styled.div`
//   position: absolute;
//   top: 20px;
//   left: 10px;
//   width: 25vw;
//   height: 25vh;
//   background-color: orange;
//   transform: rotateY(270deg) translateZ(500px);
//   border-radius: 20px;
// `;

// const Projects: React.FC<ProjectsProps> = ({ ...props }: ProjectsProps) => {
//   return (
//     <ProjectsContainer ref={(cur) => (props.scrollRef.current[3] = cur)}>
//       <TitleContainer>
//         <Title>PROJECTS</Title>
//       </TitleContainer>

//       <CarouselContainer>
//         <Carousel>
//           <Card1></Card1>
//           <Card2></Card2>
//           <Card3></Card3>
//           <Card4></Card4>
//         </Carousel>
//       </CarouselContainer>
//       <Footer />
//     </ProjectsContainer>
//   );
// };

// export default Projects;
