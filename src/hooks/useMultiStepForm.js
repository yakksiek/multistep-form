/* eslint-disable no-unused-vars */
import { useState } from 'react';

function useMultiStepForm(state, allFields, dispatch) {
    const [currentStepIndex, setCurrentStepIndex] = useState(0);
    const [allFormDataFields, setAllFormDataFields] = useState(allFields);
    const stepsNumber = state.tabNames.length;
    const isFirstStep = currentStepIndex === 0;
    const isLastStep = currentStepIndex === stepsNumber - 1;
    const currentTabName = state.tabNames[currentStepIndex];
    const formDataFields = allFormDataFields[currentTabName];

    const nextTab = () => {
        setCurrentStepIndex((i) => {
            if (i > stepsNumber - 1) return i;
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

    const addFormField = () => {
        const extraInputsNumber = formDataFields.length;
        const dataFieldName = formDataFields[0].name.split('-')[0];
        const newName = `${dataFieldName}-${extraInputsNumber + 1}`;
        const copyCurrentFormField = {
            ...formDataFields[0],
            name: newName,
            id: newName,
            deleteButton: true,
        };
        const copyDataFields = [...formDataFields, copyCurrentFormField];
        setAllFormDataFields((prevState) => ({ ...prevState, [currentTabName]: copyDataFields }));
    };

    const removeFormField = (id, groupName) => {
        console.log(id);
        const filteredFormFields = formDataFields.filter((obj) => obj.id !== id);
        const filteredGroupState = state.form[groupName].filter((obj) => obj.id !== id);
        setAllFormDataFields((prevState) => ({ ...prevState, [currentTabName]: filteredFormFields }));
        dispatch({ type: 'updateFormKey', payload: { name: groupName, value: filteredGroupState } });
    };

    return {
        currentStepIndex,
        goTo,
        nextTab,
        prevTab,
        isFirstStep,
        isLastStep,
        formDataFields,
        addFormField,
        removeFormField,
    };
}

export default useMultiStepForm;
