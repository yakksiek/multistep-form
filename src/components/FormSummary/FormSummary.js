import React from 'react';

import { StyledFormSummary, StyledListItem, StyledListNumber, StyledFormSummarySubtitle } from './FormSummary.styled';

function FormSummary({ currentStepIndex, tabNames, tabDescriptions }) {
    const stepsJSX = tabNames.map((item, index) => {
        const isActive = currentStepIndex === index;
        return (
            <StyledListItem isActive={isActive} key={crypto.randomUUID()}>
                <StyledListNumber isActive={isActive}>{index + 1}</StyledListNumber> {item}
            </StyledListItem>
        );
    });

    return (
        <StyledFormSummary>
            <header>
                <h2>Step {currentStepIndex + 1}</h2>
                <StyledFormSummarySubtitle>{tabDescriptions[currentStepIndex]}</StyledFormSummarySubtitle>
            </header>
            <ul>{stepsJSX}</ul>
        </StyledFormSummary>
    );
}

export default FormSummary;
