import { MuliInputsGroupType } from 'types/mulitInputsGroupTypes';
import StyledButton from './Button.styled';

interface ButtonProps {
    onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
    onDeleteInput?: (id: string, groupName: MuliInputsGroupType) => void;
    type: 'button' | 'submit' | 'reset' | 'delete';
    children: React.ReactNode;
    disabled?: boolean;
    variant?: 'dark' | 'circle';
    style?: React.CSSProperties;
    id?: string;
    groupName?: MuliInputsGroupType;
}

function Button({
    onClick,
    type = 'button',
    children,
    disabled,
    variant,
    style,
    onDeleteInput,
    id,
    groupName,
}: ButtonProps) {
    const clickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
        console.log('click');
        if (type === 'delete') {
            e.preventDefault();
            if (onDeleteInput && id !== undefined && groupName !== undefined) {
                onDeleteInput(id, groupName);
            }
        } else {
            onClick?.(e);
        }
    };

    const buttonType = type === 'delete' ? 'button' : type;
    return (
        <StyledButton type={buttonType} onClick={clickHandler} disabled={disabled} variant={variant} style={style}>
            {children}
        </StyledButton>
    );
}

export default Button;
