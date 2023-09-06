import React from 'react';

import { StyledNavFormBtn } from './Form.styled';

function FormNavBtn({ type, children, onClick, disabled }) {
    return (
        <StyledNavFormBtn type={type} onClick={onClick} disabled={disabled}>
            {children}
        </StyledNavFormBtn>
    );
}

export default FormNavBtn;
