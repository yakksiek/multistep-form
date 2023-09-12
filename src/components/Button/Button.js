import React from 'react';

import StyledButton from './Button.styled';

function Button({ onClick, type, children, disabled, variant }) {
    const typeAttr = typeof type === 'undefined' ? 'button' : type;
    return (
        <StyledButton type={typeAttr} onClick={onClick} disabled={disabled} variant={variant}>
            {children}
        </StyledButton>
    );
}

export default Button;
