import styled, { css } from 'styled-components';

const StyledLabel = styled.label`
    font-family: 'SFProBold', sans-serif;
    position: relative;
    display: flex;
    flex-direction: column;
    width: 100%;

    ${(props) =>
        (props.type === 'file' || props.type === 'checkbox') &&
        css`
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 0;
            &:hover {
                cursor: pointer;
            }
        `}

    ${(props) =>
        props.type === 'checkbox' &&
        css`
            padding: 15px 10px;
            display: inline-block;
            flex-shrink: 0;
            flex: 1;
        `}
`;
export default StyledLabel;
