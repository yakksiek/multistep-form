import React from 'react';
import { StyledForm } from './Form.styled';

function Form({ onSubmit, children }) {
    return (
        <StyledForm noValidate onSubmit={onSubmit}>
            {children}
        </StyledForm>
    );
}

export default Form;
