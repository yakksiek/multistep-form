import React from 'react';
import styled from 'styled-components';

const DefaultStyledIconWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    &:hover {
        background-color: var(--background-color-dark);
    }
`;

const StyledIconWrapper = styled(DefaultStyledIconWrapper)(({ theme, variant }) => theme.icon[variant]);

function IconWrapper({ children, style, variant }) {
    return (
        <StyledIconWrapper variant={variant} style={style}>
            {children}
        </StyledIconWrapper>
    );
}

export default IconWrapper;
