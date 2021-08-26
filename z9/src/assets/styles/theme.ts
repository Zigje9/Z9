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
  },
  mobile: `(max-width: ${size.mobile})`,
  tablet: `(min-width: ${size.mobile}) and (max-width: ${size.tablet})`,
  pc: `(min-width: ${size.pc})`,
};

const lightTheme: DefaultTheme = {
  basicWidth: '1024px',

  color: {
    main: 'orange',
    sub: '#fff',
  },
  mobile: `(max-width: ${size.mobile})`,
  tablet: `(min-width: ${size.mobile}) and (max-width: ${size.tablet})`,
  pc: `(min-width: ${size.pc})`,
};

export { theme, lightTheme };
