import { css } from 'styled-components';

const theme = {
    // tak, domyślam się, że jest to bardzo złe rozwiązanie :D 
    wrapper: {
        form: css`
            flex: 2;
            padding: 2em 5em;
        `,
        container: css`
            max-width: 900px;
            margin: 1em auto;
            display: flex;
            box-shadow: var(--box-shadow-convex);
            border-radius: 30px;
        `,
        'flex-column': css`
            display: flex;
            flex-direction: column;
            margin-bottom: 25px;
        `,
        btnContainer: css`
            margin-top: auto;
            padding-top: 50px;
            display: grid;
            grid-auto-flow: column;
            gap: 10px;
            justify-content: end;
        `,
    },
    button: {
        dark: css`
            color: var(--background-color);
            background-color: var(--color-4);
            &:hover {
                background-color: var(--color-4-dark);
            }
        `,
        circle: css`
            height: auto;
            margin-top: 0;
            width: 40px;
            height: 40px;
            padding: 10px 25px;
        `,
    },
    icon: {
        fill: css`
            background-color: var(--background-color);
            box-shadow: var(--box-shadow-concave);
            padding: 15px;
            border-radius: 50%;
        `,
    },
};

export default theme;
