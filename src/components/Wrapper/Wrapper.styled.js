import styled from 'styled-components';

const DefaultStyledWrapper = styled.div``;

const StyledWrapper = styled(DefaultStyledWrapper)(({ theme, variant }) => theme.wrapper[variant]);

export default StyledWrapper;
