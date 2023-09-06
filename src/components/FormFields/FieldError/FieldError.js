import React from 'react';

import StyledFieldError from './FieldError.styled';

function FieldError({ children }) {
    return <StyledFieldError>{children}</StyledFieldError>;
}

export default FieldError;
