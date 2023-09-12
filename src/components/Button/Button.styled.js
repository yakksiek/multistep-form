import styled from 'styled-components';

const DefaultStyledButton = styled.button`
    font-family: 'SFProBold', sans-serif;
    font-size: 0.9em;
    border: none;
    border-radius: var(--element-radius);
    padding: var(--element-padding);
    box-shadow: var(--box-shadow-convex);
    margin-top: 20px;
    color: var(--color-4);
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
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

const StyledButton = styled(DefaultStyledButton)(({ theme, variant }) => theme.button[variant]);

export default StyledButton;
