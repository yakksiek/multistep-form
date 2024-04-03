import { ThemeWrapper } from 'types/theme.interfaces';
import StyledWrapper from './Wrapper.styled';

interface Props {
    children: React.ReactNode;
    variant: keyof ThemeWrapper;
}

function Wrapper({ children, variant }: Props) {
    return <StyledWrapper variant={variant}>{children}</StyledWrapper>;
}

export default Wrapper;
