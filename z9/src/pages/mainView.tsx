import React, { useState, useRef, useEffect } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { theme, lightTheme } from '../assets/styles/theme';
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

const TempButton = styled.button`
  top: 0;
  position: absolute;
  width: 50px;
  height: 50px;
`;

const MainView: React.FC = () => {
  const scrollRef = useRef<HTMLInputElement[] | null>([]);
  const [currentY, setCurrentY] = useState<number>(0);
  const [isDark, setIsDark] = useState<boolean>(true);

  const scrollButton = () => {
    const num = getCurrentPosition(currentY);
    if (scrollRef.current !== null) {
      scrollRef.current[num].scrollIntoView({ behavior: 'smooth' });
    }
  };

  const setCurY = () => {
    setCurrentY(document.body.scrollTop);
  };

  const throttling = throttle(setCurY, 3000);

  useEffect(() => {
    window.addEventListener('scroll', throttling._throttling, true);
    return () => {
      window.removeEventListener('scroll', throttling._throttling, true);
    };
  });

  return (
    <>
      <ThemeProvider theme={isDark ? theme : lightTheme}>
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
        <TempButton onClick={() => setIsDark(!isDark)}></TempButton>
      </ThemeProvider>
    </>
  );
};

export default MainView;
