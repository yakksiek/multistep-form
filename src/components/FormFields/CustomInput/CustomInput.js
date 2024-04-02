/* eslint-disable no-unused-vars */
import React from 'react';
import { UilTrashAlt, UilImageUpload } from '@iconscout/react-unicons';

import { useImageUploaderContext } from '../../../context/ImageUploaderContext';
import Label from '../Label/Label';
import Wrapper from '../../Wrapper';
import FieldError from '../FieldError';
import StyledButton from '../../Button/Button.styled';
import IconWrapper from '../../IconWrapper';

import { StyledCustomInput, StyledInputWrapper } from './CustomInput.styled';

function CustomInput({ children = '', data }) {
    const { isImageSelected, clearImage } = useImageUploaderContext();
    const { type, value, name, label, id, groupName, accept, onChange, error, deleteButton, handleClick } = data;

    const delInputButton = deleteButton && (
        <StyledButton
            onClick={() => handleClick(id, groupName)}
            variant="circle"
            style={{ alignSelf: 'flex-end', marginBottom: '5px' }}
        >
            <IconWrapper>
                <UilTrashAlt />
            </IconWrapper>
        </StyledButton>
    );

    const handleTrashClick = (e) => {
        e.preventDefault();
        if (!isImageSelected) return;
        clearImage();
    };

    const inputFileIcon = type === 'file' && (
        <>
            <IconWrapper variant="fill" htmlFor={id} type={type} style={{ marginLeft: '1em' }}>
                <UilImageUpload />
            </IconWrapper>

            {isImageSelected && (
                <StyledButton variant="circle" onClick={handleTrashClick} style={{ marginLeft: '1em' }}>
                    <IconWrapper variant="fill">
                        <UilTrashAlt />
                    </IconWrapper>
                </StyledButton>
            )}
        </>
    );

    return (
        <Wrapper variant="flex-column">
            <StyledInputWrapper type={type}>
                <Label htmlFor={id} type={type}>
                    {label}:
                    <StyledCustomInput
                        name={name}
                        onChange={(e) => onChange(e, id, groupName)}
                        value={type === 'file' ? '' : value}
                        type={type}
                        id={id}
                        data-id={id}
                        accept={accept}
                    />
                    {inputFileIcon}
                </Label>
                {delInputButton}
            </StyledInputWrapper>
            <FieldError>{error}</FieldError>
            {children}
        </Wrapper>
    );
}

export default CustomInput;
