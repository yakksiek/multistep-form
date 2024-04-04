import styled from 'styled-components';

const StyledFormSummary = styled.div`
    flex: 1;
    padding: var(--container-padding);
    box-shadow: var(--box-shadow-convex);
    border-top-left-radius: 32px;
    border-bottom-left-radius: 32px;
    background-color: var(--color-4);
    color: var(--background-color);
`;

const StyledList = styled.ul`
    margin-top: 50px;
`;

const StyledListItem = styled.li<{ isActive: boolean }>`
    color: ${({ isActive }) => (isActive ? 'white' : 'var(--color-1)')};
    margin-bottom: 2em;
    display: flex;
    align-items: center;
    line-height: 1.2;
`;

const StyledListNumber = styled.span`
    width: 30px;
    height: 30px;
    border-color: inherit;
    border: 1px solid;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: bold;
    margin-right: 1em;
`;

const StyledFormSummarySubtitle = styled.p`
    font-family: 'SFProBold', sans-serif;
    line-height: 1.5;
`;

export { StyledFormSummary, StyledListItem, StyledListNumber, StyledFormSummarySubtitle, StyledList };
