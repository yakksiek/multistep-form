import { useState } from 'react';

function useMultiStepForm(steps) {
    const [currentStepIndex, setCurrentStepIndex] = useState(1);
    const isFirstStep = currentStepIndex === 0;
    const isLastStep = currentStepIndex === steps - 1;

    const nextTab = () => {
        setCurrentStepIndex((i) => {
            if (i > steps - 1) return i;
            return i + 1;
        });
    };

    const prevTab = () => {
        setCurrentStepIndex((i) => {
            if (i <= 0) return i;
            return i - 1;
        });
    };

    const goTo = (index) => {
        setCurrentStepIndex(index);
    };

    return { currentStepIndex, goTo, nextTab, prevTab, isFirstStep, isLastStep };
}

export default useMultiStepForm;
