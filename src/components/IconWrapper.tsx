import styled, { CSSProperties } from 'styled-components';

interface StyledIconWrapperProps {
    variant?: 'fill';
    style?: CSSProperties;
}

const DefaultStyledIconWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    &:hover {
        background-color: var(--background-color-dark);
    }
`;

const StyledIconWrapper = styled(DefaultStyledIconWrapper)<StyledIconWrapperProps>(({ theme, variant }) =>
    variant ? theme.icon[variant] : '',
);

interface Props {
    children: React.ReactNode;
    style?: React.CSSProperties;
    variant?: 'fill';
}

function IconWrapper({ children, style, variant }: Props) {
    return (
        <StyledIconWrapper variant={variant} style={style}>
            {children}
        </StyledIconWrapper>
    );
}

export default IconWrapper;
