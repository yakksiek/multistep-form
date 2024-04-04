import {
    StyledFormSummary,
    StyledFormSummarySubtitle,
    StyledList,
    StyledListItem,
    StyledListNumber,
} from './FormSummary.styled';

interface Props {
    currentStepIndex: number;
    tabNames: string[];
    tabDescriptions: string[];
}

function FormSummary({ currentStepIndex, tabNames, tabDescriptions }: Props) {
    const stepsJSX = tabNames.map((item, index) => {
        const isActive = currentStepIndex === index;
        return (
            <StyledListItem isActive={isActive} key={crypto.randomUUID()}>
                <StyledListNumber>{index + 1}</StyledListNumber> {item}
            </StyledListItem>
        );
    });

    return (
        <StyledFormSummary>
            <header>
                <h2>Step {currentStepIndex + 1}</h2>
                <StyledFormSummarySubtitle>{tabDescriptions[currentStepIndex]}</StyledFormSummarySubtitle>
            </header>
            <StyledList>{stepsJSX}</StyledList>
        </StyledFormSummary>
    );
}

export default FormSummary;
