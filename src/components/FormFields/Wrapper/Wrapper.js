import React from 'react';

import StyledWrapper from './Wrapper.styled';

function Wrapper({ children, id }) {
    return <StyledWrapper id={id}>{children}</StyledWrapper>;
}

export default Wrapper;
