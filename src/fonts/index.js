import { createGlobalStyle } from 'styled-components';

import SFProWoff from './SFProDisplay-Regular.woff';
import SFProWoff2 from './SFProDisplay-Regular.woff2';

import SFProBoldWoff from './SFProDisplay-Bold.woff';
import SFProBoldWoff2 from './SFProDisplay-Bold.woff2';

const fontFiles = [
    {
        family: 'SFPro',
        woff: SFProWoff,
        woff2: SFProWoff2,
    },
    {
        family: 'SFProBold',
        woff: SFProBoldWoff,
        woff2: SFProBoldWoff2,
        style: 'bold',
    },
];

const createFontFace = ({ family, woff, woff2, style }) => `
  @font-face {
    font-family: '${family}';
    src: local('${family}'), local('${family}'),
      url(${woff}) format('woff'),
      url(${woff2}) format('woff2');
    font-style: ${style || 'normal'};
  }
`;

export default createGlobalStyle`
  ${fontFiles.map(createFontFace).join('\n')}
`;
