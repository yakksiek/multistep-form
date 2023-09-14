import styled, { css } from 'styled-components';

const StyledLabel = styled.label`
    /* margin-bottom: 10px; */
    font-family: 'SFProBold', sans-serif;

    ${(props) =>
        (props.type === 'file' || props.type === 'checkbox') &&
        css`
            margin-bottom: 0;
            &:hover {
                cursor: pointer;
            }
        `}

    ${(props) =>
        props.type === 'checkbox' &&
        css`
            padding: 15px 10px;
        `}
`;
export default StyledLabel;
