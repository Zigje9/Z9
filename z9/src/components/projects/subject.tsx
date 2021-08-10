import React from 'react';
import styled from 'styled-components';
import * as info from '../../assets/information';

interface SubjectProps {
  idx: number;
}

interface SubjectStyleProps {
  idx: number;
}

const SubjectContainer = styled.div`
  width: 100%;
  height: 20%;
`;

const SubjectContent = styled.p<SubjectStyleProps>`
  color: ${(props) => `${info.projects.borderColor[props.idx - 1]}`};
  font-size: 1.5rem;
  display: flex;
  justify-content: center;
  align-items: baseline;
  @media ${(props) => props.theme.mobile} {
    font-size: 0.8rem;
    padding: 10px;
  }
`;

const Subject: React.FC<SubjectProps> = ({ ...props }: SubjectProps) => {
  return (
    <SubjectContainer>
      <SubjectContent idx={props.idx}>
        {info.projects.subject[props.idx - 1]}
      </SubjectContent>
    </SubjectContainer>
  );
};

export default Subject;
