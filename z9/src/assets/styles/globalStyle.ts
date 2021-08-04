import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';
import DoHyeon from '../fonts/DoHyeon-Regular.ttf';

const GlobalStyle = createGlobalStyle`
  ${normalize}
  @font-face {
    font-family: 'Do Hyeon';
    src: url(${DoHyeon});
  }
  html,
  body {
    overflow: auto;
    height: 100vh;
    padding: 0;
    margin: 0;
    font-family: 'Do Hyeon', sans-serif;
  }
  * {
    box-sizing: border-box;
  }
`;

export default GlobalStyle;
