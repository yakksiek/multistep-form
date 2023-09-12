/* eslint-disable no-unused-vars */
import React from 'react';
import { UilTrashAlt } from '@iconscout/react-unicons';
import styled from 'styled-components';

import StyledCustomInput from './CustomInput.styled';
import Label from '../Label/Label';
import Wrapper from '../../Wrapper';
import FieldError from '../FieldError';
import StyledButton from '../../Button/Button.styled';
import IconWrapper from '../../IconWrapper';

const StyledInputWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 10px;
    align-items: center;
`;

function CustomInput({ children, data }) {
    const { type, value, name, label, id, groupName, accept, onChange, error, deleteButton, handleClick } = data;

    const delInputButton = deleteButton && (
        <StyledButton onClick={() => handleClick(id, groupName)} variant="circle">
            <IconWrapper>
                <UilTrashAlt />
            </IconWrapper>
        </StyledButton>
    );

    return (
        <Wrapper variant="flex-column">
            <Label htmlFor={name}>{label}:</Label>
            <StyledInputWrapper>
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
                {delInputButton}
            </StyledInputWrapper>
            <FieldError>{error}</FieldError>
            {children}
        </Wrapper>
    );
}

export default CustomInput;
