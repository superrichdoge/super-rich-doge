import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  *, *::before, *:after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Poppins', sans-serif;
    font-size: 15px;
    color: ${({ theme }) => theme.colors.black};
    overflow-x: hidden;
    max-width: 100vw;
  }

  ul {
    list-style: none;
  }

  button {
    font-family: 'Poppins', sans-serif;
  }
  
  #__next {
    overflow-x: hidden;
  }
`;
