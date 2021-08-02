import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import Home from '../components/home';
import About from '../components/about';
import Skills from '../components/skills';
import Projects from '../components/projects';

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
  const scrollRef = useRef<any>([]);
  const [nowScroll, setNowScroll] = useState<number>(0);
  const scroll = () => {
    const num = nowScroll + 1 === 4 ? 0 : nowScroll + 1;
    scrollRef.current[num].scrollIntoView({ behavior: 'smooth' });
    setNowScroll(num);
  };

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
