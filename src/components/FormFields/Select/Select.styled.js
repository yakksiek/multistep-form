import styled, { css } from 'styled-components';

const StyledCustomSelect = styled.div`
    position: relative;
    width: 20em;
    min-height: 1.5em;
    border: 0.05em solid #777;
    display: flex;
    align-items: center;
    gap: 0.5em;
    padding: 0.5em;
    border-radius: 0.25em;
    outline: none;
    cursor: pointer;
    &:focus {
        border-color: hsl(200, 100%, 50%);
    }

    ${({ disabled }) =>
        disabled &&
        css`
            pointer-events: none;
            background-color: lightgrey;
        `}
`;

const StyledValue = styled.span.attrs((props) => ({
    'data-select': props['data-select'],
}))`
    flex-grow: 1;
`;

const StyledDivider = styled.div`
    background-color: #777;
    align-self: stretch;
    width: 0.05em;
`;

const StyledCaret = styled.div`
    translate: 0 25%;
    border: 0.25em solid transparent;
    border-top-color: #777;
    padding: 0.05em;
    cursor: pointer;
`;

const StyledSelectOptions = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: none;
    position: absolute;
    top: calc(100% + 0.25em);
    left: 0;
    z-index: 100;
    background-color: white;
    max-height: 15em;
    overflow-y: auto;
    width: calc(100% - 17px);
    border: 0.05em solid #777;
    border-radius: 0.25em;
    padding: 0.5em;

    ${({ isVisible }) =>
        isVisible &&
        css`
            display: block;
        `}
`;

const StyledOptionItem = styled.li`
    padding: 0.25em 0.5em;
    cursor: pointer;

    ${({ isOver }) =>
        isOver &&
        css`
            background-color: hsl(200, 100%, 70%);
        `}
`;

export { StyledOptionItem, StyledCaret, StyledCustomSelect, StyledSelectOptions, StyledValue, StyledDivider };
