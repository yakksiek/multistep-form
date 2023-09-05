import React from 'react';

import StyledTextInput from './TextInput.styled';
import Label from '../Label/Label';
import Wrapper from '../Wrapper';
import FieldError from '../FieldError';

function TextInput({ name, error, onChange, value, type }) {
    return (
        <Wrapper>
            <Label>{name}</Label>
            <StyledTextInput name={name} onChange={onChange} value={value} type={type} />
            <FieldError>{error}</FieldError>
        </Wrapper>
    );
}

export default TextInput;
