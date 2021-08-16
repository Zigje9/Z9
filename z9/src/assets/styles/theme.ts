import { DefaultTheme } from 'styled-components';

const size = {
  mobile: '767px',
  tablet: '1023px',
  pc: '1024px',
};

const theme: DefaultTheme = {
  // basicWidth: '320px',
  basicWidth: '1024px',

  color: {
    main: '#1c1f25',
    sub: '#fff',
  },
  mobile: `(max-width: ${size.mobile})`,
  tablet: `(max-width: ${size.tablet})`,
  pc: `(min-width: ${size.pc})`,
};

export { theme };
