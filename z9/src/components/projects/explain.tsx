import React from 'react';
import styled from 'styled-components';
import * as info from '../../assets/information';

interface ExplainProps {
  idx: number;
}

interface ExplainStyleProps {
  idx: number;
}

const ExplainContainer = styled.div`
  width: 100%;
  height: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: baseline;
`;

const ExplainContent = styled.p<ExplainStyleProps>`
  color: white;
  font-size: 1.8rem;
  @media ${(props) => props.theme.tablet} {
    font-size: 1.5rem;
  }
  @media ${(props) => props.theme.mobile} {
    font-size: 0.9rem;
    padding: 1px;
  }
`;

const Explain: React.FC<ExplainProps> = ({ ...props }: ExplainProps) => {
  return (
    <ExplainContainer>
      {info.projects.explain[props.idx - 1].map((content, idx) => {
        return (
          <ExplainContent key={`${content}_${idx}`} idx={props.idx}>
            {content}
          </ExplainContent>
        );
      })}
    </ExplainContainer>
  );
};

export default Explain;
