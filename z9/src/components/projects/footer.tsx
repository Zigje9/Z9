import React from 'react';
import styled from 'styled-components';
import * as info from '../../assets/information';

const FooterContainer = styled.div`
  display: flex;
  height: 10vh;
  align-items: flex-end;
`;

const Copyright = styled.p`
  color: white;
  font-size: 1.2em;
  @media ${(props) => props.theme.mobile} {
    font-size: 0.7rem;
  }
`;

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <Copyright>{info.projects.footer[0]}</Copyright>
    </FooterContainer>
  );
};

export default Footer;
