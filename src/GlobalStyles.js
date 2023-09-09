import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  body {
    font-family: 'SFPro', sans-serif;
  }

  ul {
    list-style: none;
  }

  .bold {
    font-family: 'SFProBold';
  }
`;

export default GlobalStyles;
