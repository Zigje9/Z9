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

export const drop1 = keyframes`
  0% {
     -webkit-transform: translateY(0vh)
  }
  100% {
     -webkit-transform: translateY(50vh)
  }
`;

export const drop2 = keyframes`
  0% {
     -webkit-transform: translateY(0vh)
  }
  100% {
     -webkit-transform: translateY(25vh)
  }
`;

export const rotateY = keyframes`
  from {
    transform: rotateY(-360deg);
  }
  to {
    transform: rotateY(0deg);
  }
`;
