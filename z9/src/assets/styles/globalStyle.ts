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
    height: 100%;
    padding: 0;
    margin: 0;
    font-family: 'Do Hyeon', sans-serif;
    font-size: 10px;
  }
  * {
    box-sizing: border-box;
  }
`;

export default GlobalStyle;
