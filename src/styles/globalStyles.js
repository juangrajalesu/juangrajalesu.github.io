import styled, { createGlobalStyle } from "styled-components";
import { backgroundMoveAnimation } from "./animations";
import media from "./media";

export const GlobalStyles = createGlobalStyle`
  html {
    box-sizing: border-box;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }

  ul, li, h1, h2, h3, p, button { margin: 0; padding: 0; }
  ul { list-style: none; }
  button { background: transparent; border: 0; outline: 0 }

  body {
    background: linear-gradient(-30deg,#BBD3E8,white);
    background-size: 800% 800%;
    height: 100vh;
    margin: 0 auto;
    width: 100%;
    ${backgroundMoveAnimation}
  }
  
`;

export const Container = styled.div`
  margin: 0 auto;
  height: 100%;
  background-color: #f5f5f5;
  border-left: 2px solid #c1c1c1;
  border-right: 2px solid #c1c1c1;
  ${media.phone`
    max-width: 576px;
    padding:0 1px;
  `}
  ${media.desktop`
    max-width: 1000px;
    padding: 0 2rem;
  `}
  


  

  display: flex;
  flex-direction: column;
  align-items: center;
`;
