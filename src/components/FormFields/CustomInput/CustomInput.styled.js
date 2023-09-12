import styled from 'styled-components';

const StyledCustomInput = styled.input`
    border: none;
    background-color: var(--background-color);
    box-shadow: var(--box-shadow-concave);
    padding: var(--element-padding);
    border-radius: var(--element-radius);
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
`;

export default StyledCustomInput;
