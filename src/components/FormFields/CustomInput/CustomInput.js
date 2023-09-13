/* eslint-disable no-unused-vars */
import React from 'react';
import { UilTrashAlt } from '@iconscout/react-unicons';
import styled, { css } from 'styled-components';

import StyledCustomInput from './CustomInput.styled';
import Label from '../Label/Label';
import Wrapper from '../../Wrapper';
import FieldError from '../FieldError';
import StyledButton from '../../Button/Button.styled';
import IconWrapper from '../../IconWrapper';
import Checkbox from '../Checkbox/Checkbox';

const StyledInputWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 10px;
    align-items: center;
    ${(props) =>
        props.type === 'file' ||
        (props.type === 'checkbox' &&
            css`
                position: relative;
                display: flex;
                align-items: center;
                border-radius: var(--outer-radius);
                padding: var(--element-padding);
                box-shadow: var(--box-shadow-convex);
                height: 55px;
            `)}
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
            <StyledInputWrapper type={type}>
                <Label htmlFor={id} type={type}>
                    {label}:
                </Label>
                {type === 'checkbox' ? (
                    <Checkbox data={data} />
                ) : (
                    <StyledCustomInput
                        name={name}
                        onChange={(e) => onChange(e, id, groupName)}
                        value={type === 'file' ? '' : value}
                        type={type}
                        id={id}
                        // checked={value}
                        data-id={id}
                        accept={accept}
                    />
                )}
                {delInputButton}
            </StyledInputWrapper>
            <FieldError>{error}</FieldError>
            {children}
        </Wrapper>
    );
}

export default CustomInput;
