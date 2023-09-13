import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  :root {
    --color-1: rgb(168 180 207);
    --color-2: rgb(190 177 200);
    --color-3: rgb(188 211 211);
    --color-4: rgb(44 65 105);
    --color-4-light: rgba(44, 65, 105, 0.85);
    --color-4-dark: rgb(39 57 96);
    --color-5: rgb(78 95 126);
    --border-radius-outer: 30px;
    --border-radius-inner: 20px;
    --element-padding: 10px 50px;
    --outer-radius: 32px;
    --inner-radius: 10px;
    --input-padding: 0.625em 1.5em;
    --background-color: #ebecf0;
    --background-gradient: linear-gradient(to right bottom, #d2defe, #dae0fd, #e0e1fb, #e6e4f9, #ebe6f8, #ebe9fa, #ebebfb, #eceefc, #e9f2ff, #e7f6ff, #e6faff, #e7fdff);
    --container-padding: 2em;
    --box-shadow: -4px -4px 12px var(--background-gradient), -6px -6px 8px rgba(255, 255, 255, 0.6),
        6px 6px 8px rgba(255, 255, 255, 0.08), 6px 6px 10px rgba(0, 0, 0, 0.2);



    --box-shadow-convex: -4px -4px 12px rgba(255, 255, 255, 0.8), -6px -6px 8px rgba(255, 255, 255, 0.6),
        6px 6px 8px rgba(255, 255, 255, 0.08), 6px 6px 10px rgba(0, 0, 0, 0.2);
    --box-shadow-flat: -2px -2px 6px rgba(255, 255, 255, 0.6), -2px -2px 4px rgba(255, 255, 255, 0.4),
            2px 2px 2px rgba(255, 255, 255, 0.05), 2px 2px 4px rgba(0, 0, 0, 0.1);
    --box-shadow-concave: inset -2px -2px 6px rgba(255, 255, 255, 0.7),
            inset -2px -2px 4px rgba(255, 255, 255, 0.5),
            inset 2px 2px 2px rgba(255, 255, 255, 0.075), inset 2px 2px 4px rgba(0, 0, 0, 0.15);

  }

  body {
    font-family: 'SFProText', sans-serif;
    /* font-size: 1.1em; */
    /* background-image: linear-gradient(to right bottom, #d2defe, #d7ddfd, #dbdcfb, #dfdcf9, #e3dbf7, #e2def9, #e1e1fb, #e0e4fd, #ddebff, #ddf2ff, #e0f8ff, #e7fdff); */
    background: var(--background-color);
    background-repeat: no-repeat;
    height: 100vh;
    color: var(--color-4)

  }

  h2 {
    font-family: 'SFPro', sans-serif;
    font-size: 2.125em;
    font-weight: bold;
    margin-bottom: 2em;
  }

  svg {
    vertical-align: middle;
  }

  ul {
    list-style: none;
  }

  /* .bold {
    font-family: 'SFProBold';
  } */
`;

export default GlobalStyles;
