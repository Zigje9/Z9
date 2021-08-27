export const home = {
  title: ['"안녕하세요 :)', 'Front End 개발자 박제구 입니다!"'],
  introduce: [
    '언제나 소통하는 📢 개발자',
    '끊임없이 도전하는 👊 개발자',
    '모든일에 열정적인 🔥 개발자가 되고 싶습니다.',
  ],
};

export const about = {
  title: ['WHO AM I', 'CAREER', 'EXPERIENCE'],
  name: ['94.03.15 박제구', 'pjkwprn@gmail.com'],
  info: [
    'JavaScript',
    '와',
    'React',
    '에 관심이 많고,',
    '사용자 중심의 서비스를 구현하는 ',
    'Web',
    'FrontEnd',
    '를 공부하고 있습니다.',
    '공부한 내용을 정리하고 복습하기 위해',
    '블로그 를 운영하고 있습니다.',
    '여행을 좋아하고, 사람들과 소통하는 것을 좋아합니다.',
  ],
};

export const career = {
  card1: ['GenesisLab (Intern)', 'Seoul', '2019.08.01 ~ 2019.08.30'],
  card2: ['Free', '아직 커리어가 부족해요'],
};

export const experience = {
  card1: [
    'CommTECH Camp Insight 2020',
    'ITS-인도네시아',
    'Community and Technological Camp',
    '20.01~20.02',
  ],
  card2: [
    'Boostcamp 2020',
    'NAVER Connect Foundation',
    '자바스크립트 웹 풀스택 과정 챌린지 & 멤버십',
    '20.07~20.12',
  ],
};

export const skills = {
  card1: [
    'JavaScript',
    'ES6+ 문법에 익숙하고, 활용할 수 있습니다.',
    'JavaScript 개념에 관심이 많고, 학습하고 있습니다.',
    'TypeScript를 사용한 경험이 있고, 상세한 타입 정의를 위해 노력합니다.',
  ],
  card2: [
    'React',
    '컴포넌트 구조를 이해하며, 재사용성 높은 코드를 작성하기 위해 노력합니다.',
    'Hooks를 사용한 함수 컴포넌트의 상태를 관리할 수 있습니다.',
  ],
  card3: [
    'HTML & CSS',
    '시맨틱 구조의 태그를 작성하는 것이 부족하지만, 노력합니다.',
    '반응형 웹 개발을 위해 노력합니다.',
    'Styled-Components를 적용한 프로젝트 경험이 많습니다.',
  ],
  card4: [
    'Redux',
    'Redux의 단방향 흐름 패턴을 이해하고 전역 상태관리를 사용할 수 있습니다.',
    'Redux-Saga를 통해 사이드 이펙트와 비동기를 처리한 경험이 있습니다.',
  ],
  cardColor: ['#f7e017', '#61dafb', '#e54e21', '#774abc'],
  cardBackColor: ['#fffde8', '#d7eef1', '#ffdfc6', '#f5d1ff'],
  cardPercent: [70, 60, 35, 45],
  cardShadow: [
    'inset 0 0 0 30rem #f7e017',
    'inset 0 -30rem 0 0.1rem #61dafb',
    'inset 70rem 0 0.1rem #e54e21',
    'inset 0 30rem 0.1rem #774abc',
  ],
};

export const projects = {
  footer: ['Copyright 2021. Park JeKoo. All rights reserved.'],
  borderColor: ['#f7e017', '#61dafb', '#e54e21', '#774abc'],
  title: ['HoneyInMoney', 'Portfolio', 'Y-storage', 'Chatter'],
  period: [
    '2020.11.16 ~ 2020.12.18',
    '2021.08.01 ~ 2021.08.11',
    '2021.06.09 ~ 2021.07.06',
    '2021.05 ~ 2021.07',
  ],
  link: [
    'https://github.com/boostcamp-2020/Project16-E-Account-Book',
    'https://github.com/Zigje9/Z9',
    'https://github.com/Zigje9/youtube-storage',
    'https://github.com/Zigje9/chatter',
  ],
  team: ['4인 프로젝트', '개인 프로젝트', '개인 프로젝트', '2인 프로젝트'],
  subject: [
    '부스트캠프에서 진행한 개인 또는 그룹으로 가계부를 작성하고 분석할 수 있는 가계부 웹서비스',
    '개인 포트폴리오 사이트',
    'Youtube API를 활용하여 영상을 검색하고, mp3 파일로 다운받을 수 있는 웹 서비스',
    'socket.io를 활용해 단체 채팅, 개인별 채팅 서비스를 지원하는 웹 서비스',
  ],
  explain: [
    [
      'Atomic Design으로 재활용성을 고려한 컴포넌트 개발과 StoryBook UI 테스팅',
      'GitHub, NAVER OAuth 2.0 인증 로직 구현',
      '라이브러리 없이 구현한 달력, 거래내역, 가계부 초대 UI 구축',
    ],
    [
      '흥미로운 UI를 위해 keyframe 과 css를 활용한 애니메이션 컴포넌트 개발',
      'Mobile, Tablet, Desktop View를 고려한 반응형 사이트',
      '다크모드와 라이트모드 구현',
    ],
    [
      '쓰로틀링 적용한 무한스크롤, 페이지네이션, 로딩처리등 UX 고려한 컴포넌트 개발',
      '파일 다운로드, 업로드, 삭제 작업의 프로미스 체이닝을 통한 비동기 처리',
      'AWS 클라우드 서비스를 활용한 웹 아키텍쳐 설계와 파일 관리',
    ],
    [
      'Redux-Saga를 활용한 socket.io 사이드 이펙트 및 비동기 처리',
      'Toast(알림) 메시지, 유저들의 Broadcasting 등의 상태관리',
      '채팅방, 메시지등 UX를 고려한 컴포넌트 구현',
    ],
  ],
  chips: [
    ['TypeScript', 'React', 'Styled-Components', 'StoryBook', 'Koa'],
    ['TypeScript', 'React', 'Styled-Components'],
    [
      'TypeScript',
      'React',
      'Styled-Components',
      'Express',
      'Youtube-dl',
      'AWS-EC2',
      'AWS-S3',
    ],
    [
      'JavaScript',
      'React',
      'Styled-Components',
      'Redux',
      'Redux-Saga',
      'socket.io',
      'express',
    ],
  ],
};
