import styled from 'styled-components';

const StyledFormSummary = styled.div`
    flex: 1;
`;

const StyledListItem = styled.li`
    color: ${({ isActive }) => (isActive ? 'black' : 'lightgrey')};
    margin-bottom: 2em;
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
    /* margin-right: 10px; */
`;

export { StyledFormSummary, StyledListItem, StyledListNumber };
