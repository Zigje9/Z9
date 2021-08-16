import React from 'react';
import styled from 'styled-components';
import mypicture from '../../assets/images/mypic6.jpeg';
import { Github } from '@styled-icons/bootstrap/Github';
import { Book } from '@styled-icons/boxicons-regular/Book';
import { LinkedinSquare } from '@styled-icons/boxicons-logos/LinkedinSquare';
import * as info from '../../assets/information';

const Background = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 70vh;
`;

const WhoAmIContainer = styled.div`
  width: 85%;
  height: 70vh;
  display: flex;
  flex-direction: row;
  @media ${(props) => props.theme.mobile} {
    width: 85%;
    flex-direction: column;
  }
`;

const ProfileContainer = styled.div`
  width: 30%;
  height: 100%;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  @media ${(props) => props.theme.mobile} {
    flex-direction: row;
    width: 80%;
    height: 40%;
  }
`;

const MyPicture = styled.img`
  height: 100%;
  width: 80%;
  @media ${(props) => props.theme.tablet} {
    width: 100%;
    height: 70%;
  }
  @media ${(props) => props.theme.mobile} {
    width: 55%;
    height: 100%;
    padding: 4% 4%;
  }
`;

const MobileNameBox = styled.div`
  display: none;
  @media ${(props) => props.theme.mobile} {
    height: 80%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
  }
`;

const NameBox = styled.div`
  width: 80%;
  flex-direction: column;
  display: flex;
  align-items: baseline;
  @media ${(props) => props.theme.mobile} {
    display: none;
  }
`;

const Name = styled.p`
  color: white;
  font-size: 1.5rem;
  display: flex;
  justify-content: center;
  @media ${(props) => props.theme.mobile} {
    font-size: 1rem;
    justify-content: flex-start;
  }
`;

const InfoContainer = styled.div`
  width: 70%;
  height: 100%;
  @media ${(props) => props.theme.mobile} {
    width: 100%;
    height: 60%;
  }
`;

const ContentBox = styled.div`
  display: flex;
  width: 100%;
  height: 20%;
  justify-content: center;
  align-items: center;
`;

const GitHubIcon = styled(Github)`
  margin-left: 30px;
  margin-right: 30px;
  width: 60px;
  color: white;
  &:hover {
    cursor: pointer;
    transition: all ease 0.5s;
    -webkit-transform: rotate(45deg) scale(1.5);
  }
  @media ${(props) => props.theme.mobile} {
    margin-top: 20px;
    width: 45px;
  }
`;

const BlogIcon = styled(Book)`
  margin-left: 30px;
  margin-right: 30px;
  width: 60px;
  color: white;
  &:hover {
    cursor: pointer;
    transition: all ease 0.5s;
    -webkit-transform: rotate(45deg) scale(1.5);
  }
  @media ${(props) => props.theme.mobile} {
    margin-top: 20px;
    width: 45px;
  }
`;

const MailIcon = styled(LinkedinSquare)`
  margin-left: 30px;
  margin-right: 30px;
  width: 60px;
  color: white;
  &:hover {
    cursor: pointer;
    transition: all ease 0.5s;
    -webkit-transform: rotate(45deg) scale(1.5);
  }
  @media ${(props) => props.theme.mobile} {
    margin-top: 20px;
    width: 45px;
  }
`;

const InfoTextBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: baseline;
  justify-content: center;
  @media ${(props) => props.theme.mobile} {
    height: 100%;
  }
`;

const InfoText = styled.p`
  color: white;
  font-size: 1.5rem;
  display: flex;
  @media ${(props) => props.theme.mobile} {
    font-size: 1rem;
  }
`;

const HighlightText = styled.p`
  color: #50658b;
  font-size: 1.5rem;
  display: flex;
  @media ${(props) => props.theme.mobile} {
    font-size: 1rem;
  }
`;

const TextLine = styled.div`
  display: flex;
  height: 2.6rem;
  @media ${(props) => props.theme.mobile} {
    height: 1.5rem;
  }
`;

const WhoAmI: React.FC = () => {
  return (
    <Background>
      <WhoAmIContainer>
        <ProfileContainer>
          <MyPicture src={mypicture}></MyPicture>
          <MobileNameBox>
            <Name>&nbsp; &nbsp;{info.about.name[0]}</Name>
            <Name>&nbsp; &nbsp;{info.about.name[1]}</Name>
          </MobileNameBox>
        </ProfileContainer>
        <InfoContainer>
          <NameBox>
            <Name>&nbsp; &nbsp;{info.about.name[0]}</Name>
            <Name>&nbsp; &nbsp;{info.about.name[1]}</Name>
          </NameBox>
          <ContentBox>
            <GitHubIcon
              onClick={() => window.open('https://github.com/Zigje9')}
            ></GitHubIcon>
            <InfoTextBox>
              <TextLine>
                <HighlightText>{info.about.info[0]}</HighlightText>
                &nbsp;
                <InfoText>{info.about.info[1]}</InfoText>
                &nbsp;
                <HighlightText>{info.about.info[2]}</HighlightText>
                &nbsp;
                <InfoText>{info.about.info[3]}</InfoText>
              </TextLine>
              <TextLine>
                <InfoText>{info.about.info[4]}</InfoText>
              </TextLine>
              <TextLine>
                <HighlightText>{info.about.info[5]}</HighlightText>
                &nbsp;
                <HighlightText>{info.about.info[6]}</HighlightText>
                &nbsp;
                <InfoText>{info.about.info[7]}</InfoText>
              </TextLine>
            </InfoTextBox>
          </ContentBox>
          <ContentBox>
            <BlogIcon
              onClick={() => window.open('https://velog.io/@zigje9')}
            ></BlogIcon>
            <InfoTextBox>
              <TextLine>
                <InfoText>{info.about.info[8]}</InfoText>
              </TextLine>
              <TextLine>
                <InfoText>{info.about.info[9]}</InfoText>
              </TextLine>
            </InfoTextBox>
          </ContentBox>
          <ContentBox>
            <MailIcon
              onClick={() =>
                window.open('https://www.linkedin.com/in/jekoo-park-316a781b4/')
              }
            ></MailIcon>
            <InfoTextBox>
              <TextLine>
                <InfoText>{info.about.info[10]}</InfoText>
              </TextLine>
            </InfoTextBox>
          </ContentBox>
        </InfoContainer>
      </WhoAmIContainer>
    </Background>
  );
};

export default WhoAmI;
