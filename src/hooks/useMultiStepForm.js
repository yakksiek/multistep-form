/* eslint-disable no-unused-vars */
import { useState } from 'react';

function useMultiStepForm(state, allFields, dispatch) {
    const [currentStepIndex, setCurrentStepIndex] = useState(0);
    const [formDataFields, setFormDataFields] = useState(allFields[state.tabNames[currentStepIndex]]);
    const stepsNumber = state.tabNames.length;
    const isFirstStep = currentStepIndex === 0;
    const isLastStep = currentStepIndex === stepsNumber - 1;

    const nextTab = () => {
        setCurrentStepIndex((i) => {
            if (i > stepsNumber - 1) return i;
            setFormDataFields(allFields[state.tabNames[currentStepIndex + 1]]);
            return i + 1;
        });
    };

    const prevTab = () => {
        setCurrentStepIndex((i) => {
            if (i <= 0) return i;
            setFormDataFields(allFields[state.tabNames[currentStepIndex - 1]]);
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
        setFormDataFields(copyDataFields);
    };

    const removeFormField = (id, groupName) => {
        const filteredFormFields = formDataFields.filter((obj) => obj.id !== id);
        const filteredSchoolState = state.form[groupName].filter((obj) => obj.id !== id);
        setFormDataFields(filteredFormFields);
        dispatch({ type: 'updateFormKey', payload: { name: groupName, value: filteredSchoolState } });
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
