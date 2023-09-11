import React from 'react';

import StyledButton from './Button.styled';

function Button({ onClick, type, children, disabled }) {
    const typeAttr = typeof type === 'undefined' ? 'button' : type;
    return (
        <StyledButton type={typeAttr} onClick={onClick} disabled={disabled}>
            {children}
        </StyledButton>
    );
}

export default Button;
