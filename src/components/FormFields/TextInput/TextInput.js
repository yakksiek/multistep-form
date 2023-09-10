import React from 'react';

import StyledTextInput from './TextInput.styled';
import Label from '../Label/Label';
import Wrapper from '../Wrapper';
import FieldError from '../FieldError';

function TextInput({ children, data }) {
    const { type, value, name, label, id, groupName, accept, onChange, error } = data;

    // const wrapperID = `${name}-${id}`;
    return (
        // <Wrapper id={wrapperID}>
        <Wrapper>
            <Label htmlFor={name}>{label}</Label>
            <StyledTextInput
                name={name}
                onChange={(e) => onChange(e, id, groupName)}
                value={type === 'file' ? '' : value}
                type={type}
                id={name}
                checked={value}
                data-id={id}
                accept={accept}
            />
            <FieldError>{error}</FieldError>
            {children}
        </Wrapper>
    );
}

export default TextInput;
