import React from 'react';

import StyledCustomInput from './CustomInput.styled';
import Label from '../Label/Label';
import Wrapper from '../Wrapper';
import FieldError from '../FieldError';
import StyledButton from '../../Button/Button.styled';

function CustomInput({ children, data }) {
    const { type, value, name, label, id, groupName, accept, onChange, error, deleteButton, handleClick } = data;

    if (label === 'School' || label === 'Experience') console.log(handleClick);

    const delInputButton = deleteButton && (
        <StyledButton onClick={() => handleClick(id, groupName)}>DELTE</StyledButton>
    );

    return (
        <Wrapper>
            <Label htmlFor={name}>{label}</Label>
            <StyledCustomInput
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

export default CustomInput;
