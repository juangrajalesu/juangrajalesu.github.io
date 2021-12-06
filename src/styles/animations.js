import { css, keyframes } from "styled-components";

const lateralMove = keyframes`
    0% {
        transform: translateX(100%);
        opacity: 0;
    }
    100% {
        transform: translateX(0);
        opacity: 1;
    }
`;

const bakgroundMove = keyframes`
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
`;

const lateralMoveBack = keyframes`
    0% {
        transform: translateX(0);
    }
    100% {
        transform: translateX(100%);
        overflow: hidden;
        opacity: 0;
    }
    
`;

export const lateralMoveAnimation = css`
  animation: ${lateralMove} 1s ease-in-out;
`;

export const lateralMoveBackAnimation = css`
  animation: ${lateralMoveBack} 1s ease-in-out;
`;

export const backgroundMoveAnimation = css`
  animation: ${bakgroundMove} 20s ease infinite;
`;
