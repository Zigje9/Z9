import React from 'react';
import styled from 'styled-components';
import {
  ReactLogo,
  Redux,
  Javascript,
  Html5,
  Css3,
} from '@styled-icons/boxicons-logos';
import * as info from '../../assets/information';

interface ExplainProps {
  cardIdx: number;
}

const ExplainContainer = styled.div`
  width: 80%;
  height: 15%;
  opacity: 0.7;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  @media ${(props) => props.theme.mobile} {
    height: 10%;
    border-radius: 5px;
  }
`;

const ReactIcon = styled(ReactLogo)`
  width: 60px;
  color: #61dafb;
  @media ${(props) => props.theme.mobile} {
    width: 30px;
  }
`;

const ReduxIcon = styled(Redux)`
  width: 60px;
  color: #774abc;
  @media ${(props) => props.theme.mobile} {
    width: 30px;
  }
`;

const JavaScriptIcon = styled(Javascript)`
  width: 60px;
  color: #f7e017;
  @media ${(props) => props.theme.mobile} {
    width: 30px;
  }
`;

const HTMLIcon = styled(Html5)`
  width: 60px;
  color: #e54e21;
  @media ${(props) => props.theme.mobile} {
    width: 30px;
  }
`;

const CSSIcon = styled(Css3)`
  width: 60px;
  color: #2b73b7;
  @media ${(props) => props.theme.mobile} {
    width: 30px;
  }
`;

const Title = styled.p`
  color: white;
  font-size: 1.5rem;
  @media ${(props) => props.theme.mobile} {
    font-size: 0.7rem;
  }
`;

const CardExplain: React.FC<ExplainProps> = ({ ...props }: ExplainProps) => {
  const { cardIdx } = props;
  return (
    <ExplainContainer>
      {(() => {
        switch (cardIdx) {
          case 1:
            return (
              <>
                <JavaScriptIcon />
                <Title>{info.skills.card1[0]}</Title>
              </>
            );
          case 2:
            return (
              <>
                <ReactIcon />
                <Title>{info.skills.card2[0]}</Title>
              </>
            );
          case 3:
            return (
              <>
                <HTMLIcon />
                <CSSIcon />
                <Title>{info.skills.card3[0]}</Title>
              </>
            );
          case 4:
            return (
              <>
                <ReduxIcon />
                <Title>{info.skills.card4[0]}</Title>
              </>
            );
          default:
            return <></>;
        }
      })()}
    </ExplainContainer>
  );
};

export default CardExplain;
