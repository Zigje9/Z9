import React from 'react';
import styled from 'styled-components';
interface AboutProps {
  scrollRef: React.MutableRefObject<HTMLDivElement[] | any>;
}

const AboutContainer = styled.div`
  height: 100vh;
  background-color: red;
`;

const About: React.FC<AboutProps> = ({ ...props }: AboutProps) => {
  return (
    <AboutContainer
      ref={(cur) => (props.scrollRef.current[1] = cur)}
    ></AboutContainer>
  );
};

export default About;
