import { FormField } from 'types/formFieldData.interfaces';
import Wrapper from '../../Wrapper';
import { StyledInputWrapper } from '../CustomInput/CustomInput.styled';
import Label from '../Label';
import { StyledCheckbox, StyledCircle, StyledSlider, StyledToggleContainer } from './Checkbox.styled';

interface Props {
    data: FormField;
    value: boolean;
}

function Checkbox({ data, value }: Props) {
    const { type, onChange, name, id, label } = data;

    return (
        <Wrapper variant="flex-column">
            <StyledInputWrapper type={type}>
                <Label htmlFor={id} type={type === 'checkbox' ? type : undefined}>
                    {label}:
                </Label>
                <StyledToggleContainer>
                    <StyledCheckbox
                        type={type}
                        checked={value}
                        onChange={(e) => onChange && onChange(e, id)}
                        name={name}
                        id={id}
                    />
                    <StyledSlider>
                        <StyledCircle checked={value} />
                    </StyledSlider>
                </StyledToggleContainer>
            </StyledInputWrapper>
        </Wrapper>
    );
}

export default Checkbox;
