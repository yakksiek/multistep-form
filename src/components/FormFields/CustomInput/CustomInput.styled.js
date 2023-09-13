import styled, { css } from 'styled-components';

const StyledCustomInput = styled.input`
    border: none;
    background-color: var(--background-color);
    box-shadow: var(--box-shadow-concave);
    padding: var(--element-padding);
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
            opacity: 0;
            width: 100%;
            height: 100%;
            position: absolute;
            padding: 0;
            cursor: pointer;
        `}
`;

export default StyledCustomInput;
