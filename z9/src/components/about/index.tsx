import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import Title from './pageTitle';
import WhoAmI from './whoAmI';
import Career from './career';
import Experience from './experience';
import MoveButton from './moveButton';

interface AboutProps {
  scrollRef: React.MutableRefObject<HTMLDivElement[] | any>;
}

interface CircleProps {
  now: boolean;
}

const AboutContainer = styled.div`
  width: 300vw;
  height: 100vh;
  background-color: ${(props) => props.theme.color.about.container};
`;

const CarouselContainer = styled.div`
  width: 100%;
  height: 70vh;
  display: flex;
`;

const ProgressBox = styled.div`
  width: 180px;
  height: 7vh;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  @media ${(props) => props.theme.mobile} {
    width: 80px;
    height: 7vh;
  }
`;

const Circle = styled.div<CircleProps>`
  width: 12.5px;
  height: 12.5px;
  background-color: ${(props) =>
    props.now
      ? props.theme.color.about.moveOn
      : props.theme.color.about.moveOff};
  border-radius: 50%;
  align-items: center;
  justify-content: center;
  @media ${(props) => props.theme.mobile} {
    width: 7.5px;
    height: 7.5px;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100vw;
  height: 10vh;
  align-items: center;
  justify-content: center;
`;

const About: React.FC<AboutProps> = ({ ...props }: AboutProps) => {
  const [nowAbout, setNowAbout] = useState<number>(0);
  const carouselRef = useRef<HTMLInputElement>(null);
  const moveLeft = () => setNowAbout(nowAbout === 0 ? 2 : nowAbout - 1);
  const moveRight = () => setNowAbout(nowAbout === 2 ? 0 : nowAbout + 1);

  useEffect(() => {
    if (carouselRef.current !== null) {
      const changeWidth = -nowAbout * 100;
      carouselRef.current.style.transition = `0.7s ease-in-out`;
      carouselRef.current.style.transform = `translateX(${changeWidth}vw)`;
    }
  }, [nowAbout]);
  return (
    <AboutContainer ref={(cur) => (props.scrollRef.current[1] = cur)}>
      <Title titleIdx={nowAbout} />
      <CarouselContainer ref={carouselRef}>
        <WhoAmI />
        <Career now={nowAbout} />
        <Experience />
      </CarouselContainer>
      <ButtonContainer>
        <MoveButton isLeft={true} moveLeft={moveLeft}></MoveButton>
        <ProgressBox>
          {[0, 1, 2].map((key) => {
            return <Circle key={key} now={key === nowAbout}></Circle>;
          })}
        </ProgressBox>
        <MoveButton isLeft={false} moveRight={moveRight}></MoveButton>
      </ButtonContainer>
    </AboutContainer>
  );
};

export default About;
