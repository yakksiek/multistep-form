import React from 'react';
import { createRoot } from 'react-dom/client';
import { Reset } from 'styled-reset';

import GlobalFonts from './fonts';
import GlobalStyles from './GlobalStyles';

import App from './components/App';

const root = createRoot(document.querySelector('#root'));
root.render(
    <>
        <Reset />
        <GlobalFonts />
        <GlobalStyles />
        <App />
    </>,
);
