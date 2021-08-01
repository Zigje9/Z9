import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

const GlobalStyle = createGlobalStyle`
  ${normalize}
  html,
  body {
    overflow: auto;
    height: 100%;
    padding: 0;
    margin: 0;
  }
  * {
    box-sizing: border-box;
  }
`;

export default GlobalStyle;
