import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import Home from '../components/home';
import About from '../components/about';
import Skills from '../components/skills';
import Projects from '../components/projects';
import ScrollButton from '../components/common/scrollButton';
import getCurrentPosition from '../utils/getCurrentY';
import throttle from '../utils/throttle';

const Conatiner = styled.div`
  width: 100%;
  overflow-x: hidden;
`;

const MainView: React.FC = () => {
  const scrollRef = useRef<HTMLInputElement[] | null>([]);
  const [currentY, setCurrentY] = useState<number>(0);

  const scrollButton = () => {
    const num = getCurrentPosition(currentY);
    if (scrollRef.current !== null) {
      scrollRef.current[num].scrollIntoView({ behavior: 'smooth' });
    }
  };

  const setCurY = () => {
    setCurrentY(document.body.scrollTop);
  };

  const throttling = throttle(setCurY, 100);

  useEffect(() => {
    window.addEventListener('scroll', throttling._throttling, true);
    return () => {
      window.removeEventListener('scroll', throttling._throttling, true);
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
      <ScrollButton
        nowPos={getCurrentPosition(currentY)}
        click={scrollButton}
      />
    </>
  );
};

export default MainView;
