import React from 'react';

import StyledTextInput from './TextInput.styled';
import Label from '../Label/Label';
import Wrapper from '../Wrapper';
import FieldError from '../FieldError';
import StyledButton from '../../Button/Button.styled';

function TextInput({ children, data }) {
    const { type, value, name, label, id, groupName, accept, onChange, error, deleteButton, handleClick } = data;

    if (label === 'School' || label === 'Experience') console.log(handleClick);

    const delInputButton = deleteButton && (
        <StyledButton onClick={() => handleClick(id, groupName)}>DELTE</StyledButton>
    );

    return (
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
            {delInputButton}
        </Wrapper>
    );
}

export default TextInput;
