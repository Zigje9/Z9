import { keyframes } from 'styled-components';

export const typing = keyframes`
  from { width: 0 
  }
  to { width: 85%; 
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

export const blink2 = keyframes`
  0% {
    opacity: 1
  }
  25% {
    opacity: 0.5
  }
  50% {
    opacity: 0
  }
  75% {
    opacity: 0.5
  }
  100% {
    opacity: 1
  }
`;
