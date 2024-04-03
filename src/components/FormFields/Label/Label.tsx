import StyledLabel from './Label.styled';

export type LabelType = 'checkbox' | 'file';

interface Props {
    children: React.ReactNode;
    htmlFor?: string;
    type?: LabelType;
}

function Label({ children, htmlFor, type }: Props) {
    return (
        <StyledLabel htmlFor={htmlFor} type={type}>
            {children}
        </StyledLabel>
    );
}

export default Label;
