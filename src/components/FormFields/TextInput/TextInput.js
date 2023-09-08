import React from 'react';

import StyledTextInput from './TextInput.styled';
import Label from '../Label/Label';
import Wrapper from '../Wrapper';
import FieldError from '../FieldError';

function TextInput({ name, error, onChange, value, type, label, checked, id, groupName, children }) {
    const wrapperID = `${name}-${id}`;
    return (
        <Wrapper id={wrapperID}>
            <Label htmlFor={name}>{label}</Label>
            <StyledTextInput
                name={name}
                onChange={(e) => onChange(e, id, groupName)}
                value={value}
                type={type}
                id={name}
                checked={checked}
                data-id={id}
            />
            <FieldError>{error}</FieldError>
            {children}
        </Wrapper>
    );
}

export default TextInput;
