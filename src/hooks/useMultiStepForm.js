import { useState } from 'react';

function useMultiStepForm(steps) {
    const [currentStepIndex, setCurrentStepIndex] = useState(0);
    const isFirstStep = currentStepIndex === 0;
    const isLastStep = currentStepIndex === steps - 1;

    const next = () => {
        setCurrentStepIndex((i) => {
            if (i > steps - 1) return i;
            return i + 1;
        });
    };

    const back = () => {
        setCurrentStepIndex((i) => {
            if (i <= 0) return i;
            return i - 1;
        });
    };

    const goTo = (index) => {
        setCurrentStepIndex(index);
    };

    return { currentStepIndex, goTo, next, back, isFirstStep, isLastStep };
}

export default useMultiStepForm;
