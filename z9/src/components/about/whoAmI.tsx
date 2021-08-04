import React from 'react';
import styled from 'styled-components';
import mypicture from '../../assets/images/mypic.jpeg';

const Background = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 75vh;
  background-color: #3d3d3d;
`;

const WhoAmIContainer = styled.div`
  width: 85%;
  height: 75vh;
  background-color: pink;
  border-radius: 10px;
  display: flex;
  flex-direction: row;
  @media ${(props) => props.theme.mobile} {
    width: 80%;
    flex-direction: column;
  }
`;

const ProfileContainer = styled.div`
  width: 30%;
  height: 100%;
  background-color: white;
  display: flex;
  flex-direction: column;
  @media ${(props) => props.theme.mobile} {
    flex-direction: row;
    width: 100%;
    height: 40%;
  }
`;

const MyPicture = styled.img`
  height: 85%;
  padding: 10% 12%;
  @media ${(props) => props.theme.mobile} {
    width: 55%;
    height: 100%;
    padding: 4% 4%;
  }
`;

const NameBox = styled.div`
  width: 100%;
  height: 20%;
  @media ${(props) => props.theme.mobile} {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const Name = styled.p`
  color: gray;
  font-size: 2.5rem;
  display: flex;
  justify-content: center;
  @media ${(props) => props.theme.mobile} {
    font-size: 1rem;
  }
`;

const InfoContainer = styled.div`
  width: 70%;
  height: 100%;
  background-color: green;
  @media ${(props) => props.theme.mobile} {
    width: 100%;
    height: 60%;
  }
`;

const WhoAmI: React.FC = () => {
  return (
    <Background>
      <WhoAmIContainer>
        <ProfileContainer>
          <MyPicture src={mypicture}></MyPicture>
          <NameBox>
            <Name>94.03.15 박제구</Name>
          </NameBox>
        </ProfileContainer>
        <InfoContainer></InfoContainer>
      </WhoAmIContainer>
    </Background>
  );
};

export default WhoAmI;
