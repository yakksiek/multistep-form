import { StyledForm } from './Form.styled';

interface Props {
    children: React.ReactNode;
    onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

function Form({ onSubmit, children }: Props) {
    return (
        <StyledForm noValidate onSubmit={onSubmit}>
            {children}
        </StyledForm>
    );
}

export default Form;
