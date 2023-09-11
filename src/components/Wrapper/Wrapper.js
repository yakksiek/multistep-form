import React from 'react';

import StyledWrapper from './Wrapper.styled';

function Wrapper({ children, variant }) {
    return <StyledWrapper variant={variant}>{children}</StyledWrapper>;
}

export default Wrapper;
