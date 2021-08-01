import { keyframes } from 'styled-components';

export const typing = keyframes`
  from { width: 0 
  }
  to { width: 100% 
  }
`;

export const blink = keyframes`
  0% {
    border-color: transparent;
  }
  50% {
    border-color: black;
  }
  100% {
    border-color: transparent;
  }
`;
