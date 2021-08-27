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
        moveArrow: string;
        moveOn: string;
        moveOff: string;
      };
      common: {
        scrollButton: string;
      };
      skills: {
        background: string;
        text: string;
      };
      projects: {
        background: string;
        text: string;
      };
    };
    mobile: string;
    tablet: string;
    pc: string;
  }
}
