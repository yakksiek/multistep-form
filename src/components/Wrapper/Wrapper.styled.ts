import styled from 'styled-components';
import { ThemeWrapper } from 'types/theme.interfaces';

interface StyledWrapperProps {
    variant: keyof ThemeWrapper;
}

const DefaultStyledWrapper = styled.div``;

const StyledWrapper = styled(DefaultStyledWrapper)<StyledWrapperProps>(({ theme, variant }) => theme.wrapper[variant]);

export default StyledWrapper;
