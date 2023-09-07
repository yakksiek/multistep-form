import React from 'react';

import StyledTextInput from './TextInput.styled';
import Label from '../Label/Label';
import Wrapper from '../Wrapper';
import FieldError from '../FieldError';

function TextInput({ name, error, onChange, value, type, label }) {
    return (
        <Wrapper>
            <Label htmlFor={name}>{label}</Label>
            <StyledTextInput name={name} onChange={onChange} value={value} type={type} id={name} />
            <FieldError>{error}</FieldError>
        </Wrapper>
    );
}

export default TextInput;
