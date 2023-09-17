import styled, { css } from 'styled-components';

const StyledCustomSelect = styled.div`
    margin-top: var(--input-top-margin);
    position: relative;
    min-height: 1.5em;
    display: flex;
    align-items: center;
    gap: 0.5em;
    padding: 0.5em;
    outline: none;
    cursor: pointer;
    border: none;
    background-color: var(--background-color);
    box-shadow: var(--box-shadow-convex);
    border-radius: var(--outer-radius);
    font-size: 1em;
    color: var(--color-4-light);
    font-family: 'SFProText', sans-serif;
    &:focus {
        outline: 2px solid var(--color-4);
    }

    ${({ isVisible }) =>
        isVisible &&
        css`
            border-top-left-radius: 10px;
            border-top-right-radius: 10px;
            border-bottom-left-radius: 0;
            border-bottom-right-radius: 0;
        `};

    ${({ disabled }) =>
        disabled &&
        css`
            pointer-events: none;
            background-color: lightgrey;
            &:focus {
                outline: none;
            }
        `}
`;

const StyledValue = styled.span.attrs((props) => ({
    'data-select': props['data-select'],
}))`
    padding: 0 1.5em;
    flex-grow: 1;
`;

const StyledSelectOptions = styled.ul`
    margin: 0;
    padding: 0;
    display: none;
    position: absolute;

    left: 0;
    z-index: 100;
    max-height: 15em;
    overflow-y: auto;
    width: calc(100% - 3em);
    padding: 0.5em 1.5em;

    top: 100%;
    background-color: var(--background-color);
    box-shadow: var(--box-shadow-convex);
    border: none;
    border-top: 2px solid var(--color-4);
    ${({ isVisible }) =>
        isVisible &&
        css`
            display: block;
            border-top-left-radius: 0;
            border-top-right-radius: 0;
            border-bottom-right-radius: 10px;
            border-bottom-left-radius: 10px;
        `};
`;

const StyledOptionItem = styled.li`
    padding: 0.5em 0.5em;
    cursor: pointer;

    ${({ isOver }) =>
        isOver &&
        css`
            background-color: var(--color-4);
            color: var(--background-color);
        `}
`;

export { StyledOptionItem, StyledCustomSelect, StyledSelectOptions, StyledValue };
