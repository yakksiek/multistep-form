import React from 'react';

// import Label from '../Label/Label';
import { StyledToggleContainer, StyledCheckbox, StyledSlider, StyledCircle } from './Checkbox.styled';

function Checkbox({ data }) {
    const { type, value: checked, onChange, name, id } = data;

    return (
        <StyledToggleContainer>
            <StyledCheckbox type={type} checked={checked} onChange={onChange} name={name} id={id}/>
            <StyledSlider checked={checked}>
                <StyledCircle checked={checked} />
            </StyledSlider>
        </StyledToggleContainer>
    );
}

export default Checkbox;
