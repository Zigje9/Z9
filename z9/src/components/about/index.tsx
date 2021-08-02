import React from 'react';
import styled from 'styled-components';

const AboutContainer = styled.div`
  height: 100vh;
  background-color: red;
`;

const About: React.FC<any> = ({ ...props }: any) => {
  return (
    <AboutContainer ref={(cur) => (props.scrollRef.current[1] = cur)}>
      a
    </AboutContainer>
  );
};

export default About;
