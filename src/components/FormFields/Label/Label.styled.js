import styled, { css } from 'styled-components';

const StyledLabel = styled.label`
    margin-bottom: 10px;
    font-family: 'SFProBold', sans-serif;

    ${(props) =>
        (props.type === 'file' || props.type === 'checkbox') &&
        css`
            margin-bottom: 0;
        `}
`;
export default StyledLabel;
