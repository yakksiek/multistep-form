import styled, { css } from 'styled-components';

const StyledCustomInput = styled.input`
    background-color: var(--background-color);
    box-shadow: var(--box-shadow-concave);
    border-radius: var(--outer-radius);
    font-size: 1em;
    color: var(--color-4-light);
    font-family: 'SFProText', sans-serif;
    border: 1px solid transparent;
    width: 100%;
    padding: var(--input-padding);

    &:focus {
        outline: none;
        border-color: var(--color-4-light);
    }

    ${(props) =>
        props.type === 'file' &&
        css`
            position: absolute;
            opacity: 0;
            /* display: none; */
            width: 80%;
            /* width: auto; */
            height: calc(100% - 20px);
            width: calc(100% - 100px);
            cursor: pointer;
        `}
`;

const StyledInputWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 10px;
    align-items: center;
    ${(props) =>
        (props.type === 'file' || props.type === 'checkbox') &&
        css`
            position: relative;
            display: flex;
            align-items: center;
            border-radius: var(--outer-radius);
            box-shadow: var(--box-shadow-convex);
            height: 55px;
            padding: var(--element-padding);
            &:hover {
                background-color: var(--background-color-dark);
            }
        `}
`;

export { StyledCustomInput, StyledInputWrapper };
