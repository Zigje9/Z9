import React from 'react';
import styled from 'styled-components';

const ProjectsContainer = styled.div`
  height: 100vh;
  background-color: pink;
`;

const Projects: React.FC<any> = ({ ...props }: any) => {
  return (
    <ProjectsContainer ref={(cur) => (props.scrollRef.current[3] = cur)}>
      d
    </ProjectsContainer>
  );
};

export default Projects;
