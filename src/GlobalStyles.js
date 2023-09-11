import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  :root {
    --color-1: rgb(168 180 207);
    --color-2: rgb(190 177 200);
    --color-3: rgb(188 211 211);
    --color-4: rgb(44 65 105);
    --color-5: rgb(78 95 126);
    --box-shadow-convex: -4px -4px 12px rgba(255, 255, 255, 0.8), -6px -6px 8px rgba(255, 255, 255, 0.6),
        6px 6px 8px rgba(255, 255, 255, 0.08), 6px 6px 10px rgba(0, 0, 0, 0.2);
    --box-shadow-flat: -2px -2px 6px rgba(255, 255, 255, 0.6), -2px -2px 4px rgba(255, 255, 255, 0.4),
            2px 2px 2px rgba(255, 255, 255, 0.05), 2px 2px 4px rgba(0, 0, 0, 0.1);
    --box-shadow-concave: inset -2px -2px 6px rgba(255, 255, 255, 0.7),
            inset -2px -2px 4px rgba(255, 255, 255, 0.5),
            inset 2px 2px 2px rgba(255, 255, 255, 0.075), inset 2px 2px 4px rgba(0, 0, 0, 0.15);

  }

  body {
    font-family: 'SFPro', sans-serif;
  }

  ul {
    list-style: none;
  }

  .bold {
    font-family: 'SFProBold';
  }

  button {
    border: none;
    background-color: transparent;
    box-shadow: var(--box-shadow-convex);
  }
`;

export default GlobalStyles;
