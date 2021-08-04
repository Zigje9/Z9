import React from 'react';
import styled from 'styled-components';
import mypicture from '../../assets/images/mypic.jpeg';
import { Github } from '@styled-icons/bootstrap/Github';
import { Book } from '@styled-icons/boxicons-regular/Book';
import { Mail } from '@styled-icons/feather/Mail';
import * as info from '../../assets/information';

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

  background: rgb(34, 34, 34);
  background: linear-gradient(
    96deg,
    rgba(34, 34, 34, 1) 0%,
    rgba(97, 97, 97, 1) 78%,
    rgba(117, 117, 117, 1) 100%
  );
  border: 3px solid white;
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
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  @media ${(props) => props.theme.mobile} {
    flex-direction: row;
    width: 100%;
    height: 40%;
  }
`;

const MyPicture = styled.img`
  height: 77%;
  padding: 5% 10%;
  @media ${(props) => props.theme.mobile} {
    width: 55%;
    height: 100%;
    padding: 4% 4%;
  }
`;

const NameBox = styled.div`
  width: 100%;
  flex-direction: column;
  @media ${(props) => props.theme.mobile} {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const Name = styled.p`
  color: gray;
  font-size: 2rem;
  display: flex;
  justify-content: center;
  @media ${(props) => props.theme.mobile} {
    font-size: 1rem;
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
  height: 33.3%;
`;

const GitHubIcon = styled(Github)`
  margin-left: 5%;
  width: 60px;
  color: purple;

  &:hover {
    cursor: pointer;
    transition: all ease 0.5s;
    -webkit-transform: rotate(45deg) scale(1.5);
  }
  @media ${(props) => props.theme.mobile} {
    width: 35px;
  }
`;

const BlogIcon = styled(Book)`
  margin-left: 5%;
  width: 60px;
  color: greenyellow;
  &:hover {
    cursor: pointer;
    transition: all ease 0.5s;
    -webkit-transform: rotate(45deg) scale(1.5);
  }
  @media ${(props) => props.theme.mobile} {
    width: 35px;
  }
`;

const MailIcon = styled(Mail)`
  margin-left: 5%;
  width: 60px;
  color: orange;
  &:hover {
    cursor: pointer;
    transition: all ease 0.5s;
    -webkit-transform: rotate(45deg) scale(1.5);
  }
  @media ${(props) => props.theme.mobile} {
    width: 35px;
  }
`;

const InfoTextBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const InfoText = styled.p`
  color: white;
  font-size: 1.8rem;
  line-height: 90%;
  @media ${(props) => props.theme.mobile} {
    font-size: 0.7rem;
  }
`;

const HighlightText1 = styled.p`
  background: rgb(211, 214, 0);
  background: linear-gradient(
    96deg,
    rgba(211, 214, 0, 1) 0%,
    rgba(255, 255, 84, 1) 60%,
    rgba(249, 255, 203, 1) 100%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 1.8rem;
  line-height: 90%;
  @media ${(props) => props.theme.mobile} {
    font-size: 0.7rem;
  }
`;

const HighlightText2 = styled.p`
  background: rgb(0, 35, 214);
  background: linear-gradient(
    96deg,
    rgba(0, 35, 214, 1) 0%,
    rgba(48, 164, 246, 1) 57%,
    rgba(204, 234, 255, 1) 100%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 1.8rem;
  line-height: 90%;
  @media ${(props) => props.theme.mobile} {
    font-size: 0.7rem;
  }
`;

const HighlightText3 = styled.p`
  background: rgb(134, 8, 189);
  background: linear-gradient(
    96deg,
    rgba(134, 8, 189, 1) 0%,
    rgba(179, 95, 227, 1) 57%,
    rgba(233, 204, 255, 1) 100%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 1.8rem;
  line-height: 90%;
  @media ${(props) => props.theme.mobile} {
    font-size: 0.7rem;
  }
`;

const HighlightText4 = styled.p`
  background: rgb(30, 184, 0);
  background: linear-gradient(
    96deg,
    rgba(30, 184, 0, 1) 0%,
    rgba(97, 238, 69, 1) 69%,
    rgba(204, 255, 146, 1) 100%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 1.8rem;
  line-height: 90%;
  @media ${(props) => props.theme.mobile} {
    font-size: 0.7rem;
  }
`;

const HighlightText5 = styled.p`
  background: rgb(251, 86, 18);
  background: linear-gradient(
    96deg,
    rgba(251, 86, 18, 1) 0%,
    rgba(238, 159, 69, 1) 69%,
    rgba(255, 198, 146, 1) 100%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 1.8rem;
  line-height: 90%;
  @media ${(props) => props.theme.mobile} {
    font-size: 0.7rem;
  }
`;

const TextLine = styled.div`
  display: flex;
`;

const WhoAmI: React.FC = () => {
  return (
    <Background>
      <WhoAmIContainer>
        <ProfileContainer>
          <MyPicture src={mypicture}></MyPicture>
          <NameBox>
            <Name>{info.about.name[0]}</Name>
            <Name>{info.about.name[1]}</Name>
          </NameBox>
        </ProfileContainer>
        <InfoContainer>
          <ContentBox>
            <GitHubIcon
              onClick={() => window.open('https://github.com/Zigje9')}
            ></GitHubIcon>
            <InfoTextBox>
              <TextLine>
                <HighlightText1>{info.about.info[0]}</HighlightText1>
                &nbsp;
                <InfoText>{info.about.info[1]}</InfoText>
                &nbsp;
                <HighlightText2>{info.about.info[2]}</HighlightText2>
                &nbsp;
                <InfoText>{info.about.info[3]}</InfoText>
              </TextLine>
              <InfoText>{info.about.info[4]}</InfoText>
              <TextLine>
                <HighlightText3>{info.about.info[5]}</HighlightText3>
                &nbsp;
                <InfoText>{info.about.info[6]}</InfoText>
              </TextLine>
            </InfoTextBox>
          </ContentBox>
          <ContentBox>
            <BlogIcon
              onClick={() => window.open('https://velog.io/@zigje9')}
            ></BlogIcon>
            <InfoTextBox>
              <InfoText>{info.about.info[7]}</InfoText>
              <TextLine>
                <HighlightText4>{info.about.info[8]}</HighlightText4>
                &nbsp;
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
                <HighlightText5>{info.about.info[10]}</HighlightText5>
                <InfoText>{info.about.info[11]}</InfoText>
                &nbsp;
                <HighlightText5>{info.about.info[12]}</HighlightText5>
                <InfoText>{info.about.info[13]}</InfoText>
              </TextLine>
            </InfoTextBox>
          </ContentBox>
        </InfoContainer>
      </WhoAmIContainer>
    </Background>
  );
};

export default WhoAmI;
