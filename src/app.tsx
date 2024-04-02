import { createRoot } from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import { Reset } from 'styled-reset';

import GlobalFonts from './fonts';
import GlobalStyles from './styled/GlobalStyles';
import theme from './styled/theme';

import App from './components/App';

const container = document.querySelector('#root');
if (!container) throw new Error('Failed to find the root element');
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
