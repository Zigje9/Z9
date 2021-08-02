import React from 'react';
import styled from 'styled-components';

interface ProjectsProps {
  scrollRef: React.MutableRefObject<HTMLDivElement[] | any>;
}

const ProjectsContainer = styled.div`
  height: 100vh;
  background-color: pink;
`;

const Projects: React.FC<ProjectsProps> = ({ ...props }: ProjectsProps) => {
  return (
    <ProjectsContainer ref={(cur) => (props.scrollRef.current[3] = cur)}>
      d
    </ProjectsContainer>
  );
};

export default Projects;
