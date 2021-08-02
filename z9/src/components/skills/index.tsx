import React from 'react';
import styled from 'styled-components';

interface SkillsProps {
  scrollRef: React.MutableRefObject<HTMLDivElement[] | any>;
}

const SkillsContainer = styled.div`
  height: 100vh;
  background-color: blue;
`;

const Skills: React.FC<SkillsProps> = ({ ...props }: SkillsProps) => {
  return (
    <SkillsContainer ref={(cur) => (props.scrollRef.current[2] = cur)}>
      d
    </SkillsContainer>
  );
};

export default Skills;
