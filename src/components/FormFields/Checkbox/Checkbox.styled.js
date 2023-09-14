import styled, { css } from 'styled-components';

const StyledToggleContainer = styled.label`
    position: relative;
    display: inline-block;
    width: 60px;
    height: 34px;
    flex-shrink: 0;
`;

const StyledCheckbox = styled.input`
    /* opacity: 0;
    width: 0;
    height: 0; */
    display: none;
`;

const StyledSlider = styled.div`
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: var(--background-color);
    border-radius: var(--outer-radius);
    box-shadow: var(--box-shadow-concave);
    transition: 0.4s;

    &:before {
        content: '';
        position: absolute;
        height: 26px;
        width: 26px;
        left: 4px;
        bottom: 4px;
        background: var(--background-color);
        border-radius: 50%;
        box-shadow: var(--box-shadow-concave);
        transition: 0.4s;
    }

    ${StyledCheckbox}:checked + & {
        background: var(--color-5);
        box-shadow: none;
        &:before {
            transform: translateX(26px);
            box-shadow: none;
        }
    }
`;

const StyledCircle = styled.div`
    position: absolute;
    height: 26px;
    width: 26px;
    left: 4px;
    bottom: 4px;
    background-color: white;
    border-radius: 50%;
    transition: 0.4s;
    box-shadow: var(--box-shadow-convex);

    ${(props) =>
        props.checked &&
        css`
            transform: translateX(26px);
            /* background-color: var(--background-color); */
            box-shadow: var(--box-shadow-concave);
        `}
`;

export { StyledToggleContainer, StyledCheckbox, StyledSlider, StyledCircle };
