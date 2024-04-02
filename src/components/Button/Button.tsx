import StyledButton from './Button.styled';

interface ButtonProps {
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
    type: 'button' | 'submit' | 'reset';
    children: React.ReactNode;
    disabled?: boolean;
    variant?: 'dark' | 'circle';
}

function Button({ onClick, type = 'button', children = '', disabled, variant }: ButtonProps) {
    return (
        <StyledButton type={type} onClick={onClick} disabled={disabled} variant={variant}>
            {children}
        </StyledButton>
    );
}

export default Button;
