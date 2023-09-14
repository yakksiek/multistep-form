/* eslint-disable no-unused-vars */
import React from 'react';

// import Label from '../Label/Label';
import { StyledToggleContainer, StyledCheckbox, StyledSlider, StyledCircle } from './Checkbox.styled';
import { StyledInputWrapper } from '../CustomInput/CustomInput.styled';
import Label from '../Label/Label';

function Checkbox({ data }) {
    const { type, value: checked, onChange, name, id, label } = data;

    return (
        <StyledToggleContainer>
            <StyledCheckbox type={type} checked={checked} onChange={onChange} name={name} id={id} />
            <StyledSlider checked={checked}>
                <StyledCircle checked={checked} />
            </StyledSlider>
        </StyledToggleContainer>
    );

    // return (
    //     <StyledInputWrapper type={type}>
    //         <Label htmlFor={id} type={type}>
    //             {label}:
    //         </Label>
    //         {/* <StyledToggleContainer> */}
    //         <StyledCheckbox type={type} checked={checked} onChange={onChange} name={name} id={id} />
    //         <StyledSlider checked={checked}>
    //             <StyledCircle checked={checked} />
    //         </StyledSlider>
    //         {/* </StyledToggleContainer> */}
    //     </StyledInputWrapper>
    // );
}

export default Checkbox;
