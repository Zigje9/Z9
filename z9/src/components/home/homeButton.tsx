import React from 'react';
import styled from 'styled-components';
import { Home } from '@styled-icons/boxicons-regular/Home';

const HomeIcon = styled(Home)`
  width: 100px;
  color: white;
  &:hover {
    cursor: pointer;
  }
  @media ${(props) => props.theme.mobile} {
    width: 50px;
  }
`;

const HomeButton: React.FC = () => {
  return <HomeIcon />;
};

export default HomeButton;
