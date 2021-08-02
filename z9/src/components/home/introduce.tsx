import React from 'react';
import styled from 'styled-components';
import * as info from '../../assets/information';

const TextLine = styled.div`
  display: flex;
`;

const Text = styled.p`
  color: white;
  font-size: 2rem;
  @media ${(props) => props.theme.mobile} {
    font-size: 1rem;
  }
`;

const HighlightText = styled.p`
  background: rgb(210, 75, 32);
  background: linear-gradient(
    96deg,
    rgba(210, 75, 32, 1) 12%,
    rgba(246, 142, 65, 1) 55%,
    rgba(230, 229, 179, 1) 100%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 2rem;
  @media ${(props) => props.theme.mobile} {
    font-size: 1rem;
  }
`;

const TextContainer = styled.div`
  display: flex;
  align-items: flex-end;
  flex-direction: column;
  @media ${(props) => props.theme.mobile} {
    margin-top: 20%;
  }
`;

const Introduce: React.FC = () => {
  return (
    <TextContainer>
      {info.home.introduce.map((str, idx) => {
        const [first, second, ...rest] = str.split(' ');
        return (
          <TextLine key={idx}>
            <Text>{first}</Text>
            &nbsp;&nbsp;
            <HighlightText>{second}</HighlightText>
            &nbsp;&nbsp;
            <Text>{rest.join(' ')}</Text>
          </TextLine>
        );
      })}
    </TextContainer>
  );
};

export default Introduce;
