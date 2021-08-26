import React from 'react';
import styled from 'styled-components';
import * as info from '../../assets/information';

interface TitleProps {
  titleIdx: number;
}

const TitleContainer = styled.div`
  width: 90vw;
  margin-left: 50px;
  height: 20vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  align-items: baseline;
  @media ${(props) => props.theme.mobile} {
    width: 100%;
    margin-left: 2rem;
  }
`;

const Text = styled.p`
  color: ${(props) => props.theme.color.about.whoAmIText};
  font-size: 6rem;
  @media ${(props) => props.theme.mobile} {
    width: 100%;
    font-size: 2rem;
  }
`;

const Title: React.FC<TitleProps> = ({ ...props }: TitleProps) => {
  return (
    <TitleContainer>
      <Text>&nbsp; {info.about.title[props.titleIdx]}</Text>
    </TitleContainer>
  );
};

export default Title;
