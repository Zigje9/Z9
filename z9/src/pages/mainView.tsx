import React from 'react';
import styled from 'styled-components';
import Home from '../components/home';
import About from '../components/about';
import Skills from '../components/skills';
import Projects from '../components/projects';

const Conatiner = styled.div`
  width: 100%;
  overflow-x: hidden;
`;

const MainView: React.FC = () => {
  return (
    <Conatiner>
      <Home />
      <About />
      <Skills />
      <Projects />
    </Conatiner>
  );
};

export default MainView;
