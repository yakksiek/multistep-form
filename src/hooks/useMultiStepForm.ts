/* eslint-disable no-unused-vars */
import { useState, Dispatch } from 'react';
import { InitialState } from 'types/initialState.interfaces';
import { MuliInputsGroupType } from 'types/mulitInputsGroupTypes';
import FormFields from 'types/formFieldData.interfaces';
import { FormActions } from 'types/actionInterfaces';
import FormActionTypes from '../types/FormActionTypes';

function useMultiStepForm(state: InitialState, allFields: FormFields, dispatch: Dispatch<FormActions>) {
    const [currentStepIndex, setCurrentStepIndex] = useState(1);
    const [allFormDataFields, setAllFormDataFields] = useState(allFields);
    const stepsNumber = state.tabNames.length;
    const isFirstStep = currentStepIndex === 0;
    const isLastStep = currentStepIndex === stepsNumber - 1;
    const currentTabName = state.tabNames[currentStepIndex];
    const formDataFields = allFormDataFields[currentTabName as keyof FormFields];

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

    const goToIndexTab = (index: number) => {
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

    const removeFormField = (id: string, groupName: MuliInputsGroupType) => {
        const filteredFormFields = formDataFields.filter((obj) => obj.id !== id);
        const filteredGroupState = state.form[groupName].filter((obj) => obj.id !== id);
        setAllFormDataFields((prevState) => ({ ...prevState, [currentTabName]: filteredFormFields }));
        dispatch({ type: FormActionTypes.UpdateFormKey, payload: { name: groupName, value: filteredGroupState } });
    };

    return {
        currentStepIndex,
        goToIndexTab,
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
