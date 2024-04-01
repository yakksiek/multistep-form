import React from 'react';
import { createRoot } from 'react-dom/client';
import { Reset } from 'styled-reset';
import { ThemeProvider } from 'styled-components';

import GlobalFonts from './fonts';
import GlobalStyles from './components/styled/GlobalStyles';
import theme from './components/styled/theme';

import App from './components/App';

const container = document.querySelector('#root')!;
const root = createRoot(container);
root.render(
    <>
        <Reset />
        <GlobalFonts />
        <GlobalStyles />
        <ThemeProvider theme={theme}>
            <App />
        </ThemeProvider>
    </>,
);
