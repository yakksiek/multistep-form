import React from 'react';

import StyledLabel from './Label.styled';

function Label({ children, htmlFor, type }) {
    return <StyledLabel htmlFor={htmlFor} type={type}>{children}</StyledLabel>;
}

export default Label;
