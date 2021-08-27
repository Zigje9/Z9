import { DefaultTheme } from 'styled-components';

const size = {
  mobile: '767px',
  tablet: '1023px',
  pc: '1024px',
};

const theme: DefaultTheme = {
  basicWidth: '1024px',

  color: {
    main: '#1c1f25',
    sub: '#fff',

    home: {
      background: 'black',
      text: 'white',
    },
    about: {
      container: '#262424',
      whoAmIText: 'white',
      careerText: 'white',
      experienceText: 'white',
      experienceSubText: 'orange',
      moveArrow: 'white',
      moveOn: 'white',
      moveOff: 'gray',
    },
    common: {
      scrollButton: 'white',
    },
    skills: {
      background: '#2d2a2c',
      text: 'white',
    },
    projects: {
      background: '#262424',
      text: '#f2f2f2',
    },
  },
  mobile: `(max-width: ${size.mobile})`,
  tablet: `(min-width: ${size.mobile}) and (max-width: ${size.tablet})`,
  pc: `(min-width: ${size.pc})`,
};

const lightTheme: DefaultTheme = {
  basicWidth: '1024px',

  color: {
    main: '#1c1f25',
    sub: '#fff',

    home: {
      background: 'white',
      text: 'black',
    },
    about: {
      container: '#f2f2f2',
      whoAmIText: '#383838',
      careerText: 'black',
      experienceText: 'black',
      experienceSubText: '#50658b',
      moveArrow: '#50658b',
      moveOn: '#50658b',
      moveOff: 'lightgray',
    },
    common: {
      scrollButton: '#50658b',
    },
    skills: {
      background: 'white',
      text: '#2d2a2c',
    },
    projects: {
      background: '#f2f2f2',
      text: '#262424',
    },
  },

  mobile: `(max-width: ${size.mobile})`,
  tablet: `(min-width: ${size.mobile}) and (max-width: ${size.tablet})`,
  pc: `(min-width: ${size.pc})`,
};

export { theme, lightTheme };
