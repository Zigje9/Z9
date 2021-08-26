import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    basicWidth: string;

    color: {
      main: string;
      sub: string;

      home: {
        background: string;
        text: string;
      };
      about: {
        container: string;
        whoAmIText: string;
        careerText: string;
        experienceText: string;
        experienceSubText: string;
        moveOn: string;
        moveOff: string;
      };
    };
    mobile: string;
    tablet: string;
    pc: string;
  }
}
