import React from 'react';
import styled from 'styled-components';

const StyledIconWrapper = styled.div`
    /* margin-right: 10px; */
    display: flex;
    justify-content: center;
    align-items: center;
`;

function IconWrapper({ children, style }) {
    return <StyledIconWrapper style={style}>{children}</StyledIconWrapper>;
}

export default IconWrapper;
