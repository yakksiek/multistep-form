/* eslint-disable no-unused-vars */
import React from 'react';

import { StyledToggleContainer, StyledCheckbox, StyledSlider, StyledCircle } from './Checkbox.styled';
import { StyledInputWrapper } from '../CustomInput/CustomInput.styled';
import Label from '../Label';
import Wrapper from '../../Wrapper';

function Checkbox({ data }) {
    const { type, value: checked, onChange, name, id, label } = data;

    return (
        <Wrapper variant="flex-column">
            <StyledInputWrapper type={type}>
                <Label htmlFor={id} type={type}>
                    {label}:
                </Label>
                <StyledToggleContainer>
                    <StyledCheckbox type={type} checked={checked} onChange={onChange} name={name} id={id} />
                    <StyledSlider>
                        <StyledCircle checked={checked} />
                    </StyledSlider>
                </StyledToggleContainer>
            </StyledInputWrapper>
        </Wrapper>
    );
}

export default Checkbox;
