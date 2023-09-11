import { css } from 'styled-components';

// export default {
//     container: css`
//         flex: 2;
//         padding: 2em;
//     `,
// };

const theme = {
    wrapper: {
        section: css`
            flex: 2;
            padding: 2em;
        `,
        container: css`
            max-width: 1000px;
            margin: 1em auto;
            display: flex;
            box-shadow: var(--box-shadow-convex);
            border-radius: 30px;
        `,
        element: css`
            display: flex;
            flex-direction: column;
            margin-bottom: 25px;
        `,
    },
};

export default theme;
