import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: Arial, Helvetica, sans-serif;
    font-size: 16px;
    color: white;
    background: ${({ theme }) => theme.palette.background};
    transition: all ${({ theme }) => theme.transitionDuration}ms ease-in-out;
  }
`;
