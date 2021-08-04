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

const AboutContainer = styled.div`
  width: 300vw;
  height: 100vh;
  background-color: #3d3d3d;
`;

const CarouselContainer = styled.div`
  width: 100%;
  display: flex;
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
      <MoveButton moveLeft={moveLeft} moveRight={moveRight}></MoveButton>
    </AboutContainer>
  );
};

export default About;
