/* eslint-disable no-unused-vars */
import { UilImageUpload, UilTrashAlt } from '@iconscout/react-unicons';

import { FormField } from 'types/formFieldData.interfaces';
import { MuliInputsGroupType } from 'types/mulitInputsGroupTypes';
import { useImageUploaderContext } from '../../../context/ImageUploaderContext';
import IconWrapper from '../../IconWrapper';
import Wrapper from '../../Wrapper';
import FieldError from '../FieldError';
import Label from '../Label/Label';
import Button from '../../Button';

import { StyledCustomInput, StyledInputWrapper } from './CustomInput.styled';

interface Props {
    children?: React.ReactNode;
    data: FormField;
    value: string;
}

function CustomInput({ children, data, value }: Props) {
    const { isImageSelected, clearImage } = useImageUploaderContext();
    const { type, name, label, id, groupName, accept, onChange, error, deleteButton, handleRemoveField } = data;

    const delInputButton = deleteButton && handleRemoveField && (
        <Button
            onDeleteInput={() => {
                console.log('działa');
                if (groupName) {
                    console.log('działa 2');
                    handleRemoveField(id, groupName);
                }
            }}
            variant="circle"
            type="delete"
            style={{ alignSelf: 'flex-end', marginBottom: '5px' }}
            id={id}
            groupName={groupName}
        >
            <IconWrapper variant="fill">
                <UilTrashAlt />
            </IconWrapper>
        </Button>
    );

    const clickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        if (!isImageSelected) return;
        clearImage();
    };

    const inputFileIcon = type === 'file' && (
        <>
            <IconWrapper variant="fill" style={{ marginLeft: '1em' }}>
                <UilImageUpload />
            </IconWrapper>

            {isImageSelected && (
                <Button type="button" variant="circle" onClick={clickHandler} style={{ marginLeft: '1em' }}>
                    <IconWrapper variant="fill">
                        <UilTrashAlt />
                    </IconWrapper>
                </Button>
            )}
        </>
    );

    return (
        <Wrapper variant="flex-column">
            <StyledInputWrapper type={type}>
                <Label htmlFor={id} type={type === 'file' ? type : undefined}>
                    {label}:
                    <StyledCustomInput
                        name={name}
                        onChange={(e) => {
                            if (groupName && onChange) {
                                return onChange(e, id, groupName);
                            }
                            return onChange && onChange(e, id);
                        }}
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

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
