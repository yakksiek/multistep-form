import styled, { css } from 'styled-components';

interface InputWrapperProps {
    type: string;
}

const StyledCustomInput = styled.input`
    margin-top: var(--input-top-margin);
    background-color: var(--background-color);
    box-shadow: var(--box-shadow-concave);
    border-radius: var(--outer-radius);
    font-size: 1em;
    color: var(--color-4-light);
    font-family: 'SFProText', sans-serif;
    border: 2px solid transparent;
    padding: var(--input-padding);

    &:focus {
        outline: none;
        border-color: var(--color-4-light);
    }

    ${(props) =>
        props.type === 'file' &&
        css`
            position: absolute;
            /* opacity: 0; */
            display: none;
            /* width: 80%; */
            /* width: auto; */
            height: calc(100% - 20px);
            width: calc(100% - 100px);
            cursor: pointer;
        `}
    ${(props) =>
        props.type === 'checkbox' &&
        css`
            display: none;
        `}
`;

const StyledInputWrapper = styled.div<InputWrapperProps>`
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
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
