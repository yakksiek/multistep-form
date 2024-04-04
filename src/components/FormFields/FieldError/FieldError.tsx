import StyledFieldError from './FieldError.styled';

interface Props {
    children: React.ReactNode;
}

function FieldError({ children }: Props) {
    return <StyledFieldError>{children}</StyledFieldError>;
}

export default FieldError;
