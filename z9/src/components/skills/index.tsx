import React from 'react';
import styled from 'styled-components';

const SkillsContainer = styled.div`
  height: 100vh;
  background-color: blue;
`;

const Skills: React.FC<any> = ({ ...props }: any) => {
  return (
    <SkillsContainer ref={(cur) => (props.scrollRef.current[2] = cur)}>
      d
    </SkillsContainer>
  );
};

export default Skills;
