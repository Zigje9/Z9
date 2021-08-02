import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import Home from '../components/home';
import About from '../components/about';
import Skills from '../components/skills';
import Projects from '../components/projects';
import getCurrentPosition from '../utils/getCurrentY';

const Conatiner = styled.div`
  width: 100%;
  overflow-x: hidden;
`;

const Tempbutton = styled.button`
  width: 30px;
  height: 30px;
  color: white;
  position: fixed;
  bottom: 10px;
  right: 10px;
`;

const MainView: React.FC = () => {
  const scrollRef = useRef<HTMLInputElement[] | null>([]);
  const [currentY, setCurrentY] = useState<number>(0);

  const scroll = () => {
    const num = getCurrentPosition(currentY);
    if (scrollRef.current !== null) {
      scrollRef.current[num].scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handler = () => {
    setCurrentY(document.body.scrollTop);
  };

  useEffect(() => {
    window.addEventListener('scroll', handler, true);
    return () => {
      window.removeEventListener('scroll', handler, true);
    };
  });

  return (
    <>
      <Conatiner>
        <Home scrollRef={scrollRef} />
        <About scrollRef={scrollRef} />
        <Skills scrollRef={scrollRef} />
        <Projects scrollRef={scrollRef} />
      </Conatiner>
      <Tempbutton onClick={() => scroll()} />
    </>
  );
};

export default MainView;
