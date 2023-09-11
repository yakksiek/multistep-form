import styled from 'styled-components';

const StyledButton = styled.button`
    min-width: 100px;
    font-family: 'SFProBold', sans-serif;
    /* font-weight: bold; */
    font-size: 0.9em;
    border-radius: 50px;
    padding: 10px 50px;
    box-shadow: var(--box-shadow-convex);
    margin-right: 15px;
    color: var(--color-4);
    cursor: pointer;
    &:hover {
        background-color: rgb(227 229 235);
    }
    &:active {
        box-shadow: var(--box-shadow-concave);
    }
    &:disabled {
        box-shadow: var(--box-shadow-flat);
        color: lightgrey;
        pointer-events: none;
    }
`;

export default StyledButton;
