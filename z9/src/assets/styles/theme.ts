import { DefaultTheme } from 'styled-components';

const size = {
  mobile: '600px',
  laptop: '1400px',
};

const theme: DefaultTheme = {
  basicWidth: '320px',

  color: {
    main: '#1c1f25',
    sub: '#fff',
  },
  mobile: `(max-width: ${size.mobile})`,
  laptop: `(max-width: ${size.laptop})`,
};

export { theme };
