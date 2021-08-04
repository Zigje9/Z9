import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import Title from './pageTitle';
import WhoAmI from './whoAmI';
import Career from './career';
import Experience from './experience';
interface AboutProps {
  scrollRef: React.MutableRefObject<HTMLDivElement[] | any>;
}

const AboutContainer = styled.div`
  width: 300vw;
  height: 100vh;
  background-color: #3d3d3d;
  overflow: hidden;
`;

const Button = styled.button`
  all: unset;
  border: 1px solid coral;
  padding: 0.5em 2em;
  color: coral;
  border-radius: 10px;
  &:hover {
    transition: all 0.3s ease-in-out;
    background-color: coral;
    color: #fff;
  }
`;
const CarouselContainer = styled.div`
  width: 100%;
  display: flex;
`;

const TOTAL_SLIDES = 2;

const About: React.FC<AboutProps> = ({ ...props }: AboutProps) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideRef = useRef<any>(null);
  const nextSlide = () => {
    if (currentSlide >= TOTAL_SLIDES) {
      setCurrentSlide(0);
    } else {
      setCurrentSlide(currentSlide + 1);
    }
  };
  const prevSlide = () => {
    if (currentSlide === 0) {
      setCurrentSlide(TOTAL_SLIDES);
    } else {
      setCurrentSlide(currentSlide - 1);
    }
  };
  useEffect(() => {
    slideRef.current.style.transition = 'all 1s ease-in-out';
    slideRef.current.style.transform = `translateX(-${currentSlide}00vw)`;
  }, [currentSlide]);
  return (
    <AboutContainer ref={(cur) => (props.scrollRef.current[1] = cur)}>
      <Title titleIdx={currentSlide} />
      <CarouselContainer ref={slideRef}>
        <WhoAmI />
        <Career />
        <Experience />
      </CarouselContainer>
      <Button onClick={prevSlide}>Previous Slide</Button>
      <Button onClick={nextSlide}>Next Slide</Button>
    </AboutContainer>
  );
};

export default About;
