/* eslint-disable consistent-return */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/named */
/* eslint-disable no-unused-vars */
import React, { useReducer, useEffect } from 'react';
import { UilPlusCircle } from '@iconscout/react-unicons';

import reducer from '../reducer/reducer';
import initial from '../reducer/initialState';
import * as db from '../db';
import * as h from '../helpers';
import ContextProviders from '../context/ContextProviders';
import useGeoLocation from '../hooks/useGeoLocation';
import useImageUploader from '../hooks/useImageUploader';
import Form from './Form';
import FormSummary from './FormSummary';
import UserCard from './UserCard';
import Select from './FormFields/Select';
import CustomInput from './FormFields/CustomInput';
import useMultiStepForm from '../hooks/useMultiStepForm';
import Tab from './Tab/Tab';
import Button from './Button/Button';
import Wrapper from './Wrapper';
import IconWrapper from './IconWrapper';
import Checkbox from './FormFields/Checkbox';

function App() {
    const [state, dispatch] = useReducer(reducer, initial);
    const {
        currentStepIndex,
        isFirstStep,
        isLastStep,
        prevTab,
        nextTab,
        formDataFields,
        addFormField,
        removeFormField,
        goToIndexTab,
    } = useMultiStepForm(state, db.formFields, dispatch);
    const { selectedImage, previewUrl, isImageSelected, handleImageSelect, clearImage } = useImageUploader();
    const location = useGeoLocation();

    useEffect(() => {
    }, [state, selectedImage]);

    const updateState = (dataToUpdate, newValue) => {
        dispatch({ type: 'updateStateKey', payload: { name: dataToUpdate, value: newValue } });
    };

    useEffect(() => {
        h.renderConditionallySelects(state.form, updateState);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [state.form]);

    useEffect(() => {
        if (location.loaded && state.form.country === '') {
            const { lat, long } = location.coords;
            const userCountry = h.getUserCountry(lat, long);
            const newForm = { ...state.form, country: userCountry };
            updateState('form', newForm);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [location]);

    const liveValidation = (input) => {
        const inputName = input.name;
        const isErrorInState = state.errors[inputName];
        if (!isErrorInState) return;
        const inputError = h.validate(formDataFields, [input]);
        h.resetErrorInState(inputError, inputName, state.errors, updateState);
    };

    const handleChange = (e, id, groupName) => {
        const { name, value, type } = e.target;
        liveValidation(e.target);
        let newName = name;
        let newValue = value;

        if (groupName === 'school' || groupName === 'experience') {
            const arrayCopy = [...state.form[groupName]];
            const itemIndex = arrayCopy.findIndex((item) => item.id === id);
            if (itemIndex === -1) {
                const newObjItem = { id, value, name };
                arrayCopy.push(newObjItem);
            } else {
                arrayCopy[itemIndex].value = value;
            }
            newName = groupName;
            newValue = arrayCopy;
        }

        if (type === 'checkbox') {
            newValue = e.target.checked;
        }

        return dispatch({ type: 'updateFormKey', payload: { name: newName, value: newValue } });
    };

    const createInputs = (fields) => {
        const formInputs = fields.map((field) => {
            const { type, name, label, id, groupName, deleteButton } = field;
            const value = state.form[name];
            const error = state.errors[name];
            let data = { ...field, onChange: handleChange, value, error };

            if (type === 'select') {
                const options = state[name];
                return <Select key={name} data={data} options={options} value={value} />;
            }

            if (label === 'School' || label === 'Experience') {
                const group = state.form[groupName];
                const item = group.find((el) => el.id === id);
                const newValue = item ? item.value : '';
                data = { ...data, value: newValue, deleteButton, handleClick: removeFormField };
            }

            if (type === 'file') {
                data = { ...data, onChange: handleImageSelect };
            }

            if (type === 'checkbox') {
                return <Checkbox key={id} data={data} />;
            }

            return <CustomInput key={id} data={data} />;
        });

        return formInputs;
    };

    const generateTabsAndInputs = (formTabs, formFields) => {
        const tabs = formTabs.map((tabName) => {
            const inputs = createInputs(formFields);
            const name = h.capitalize(tabName);

            return (
                <Tab key={tabName} name={tabName}>
                    <h2>{name}</h2>
                    {inputs}
                </Tab>
            );
        });

        return tabs;
    };

    const onSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const inputElements = h.findInputElementsInForm(form);
        let errors = {};
        const submitErrors = h.validate(formDataFields, inputElements);
        errors = { ...errors, ...submitErrors };

        const requiredSelectsFields = h.checkForRequiredFieldType(formDataFields, 'select');
        if (requiredSelectsFields) {
            const selectErrors = h.validateSelects(requiredSelectsFields, state.form, errors);
            errors = { ...errors, ...selectErrors };
        }

        updateState('errors', errors);
        const isFormClean = h.isObjectEmpty(errors);
        const isStateClean = h.isObjectEmpty(state.errors);
        if (!isFormClean || !isStateClean) return;

        if (currentStepIndex + 1 === state.tabNames.length) {
            // eslint-disable-next-line no-alert, no-undef
            alert('wysłano');
            dispatch({ type: 'resetState' });
            goToIndexTab(0);
            clearImage();
            return;
        }
        nextTab();
    };

    const extraInputsJSX = state[`${state.tabNames[currentStepIndex]}ExtraInputs`];

    const selectContextValue = {
        form: state.form,
        updateState,
        errors: state.errors,
    };

    const imageUploaderContextValue = {
        previewUrl,
        isImageSelected,
        clearImage,
    };

    const renderAddFieldButton = () => {
        const isUserInputTab = currentStepIndex === 1 || currentStepIndex === 2;
        if (!isUserInputTab) return;

        return (
            <Button disabled={formDataFields.length === 3} onClick={addFormField} type="button">
                <IconWrapper style={{ marginRight: '10px' }}>
                    <UilPlusCircle />
                </IconWrapper>
                add field
            </Button>
        );
    };

    const renderSummary = () => {
        if (!isLastStep) return;

        return <UserCard data={state.form} />;
    };

    return (
        <Wrapper variant="container">
            <ContextProviders
                selectContextValue={selectContextValue}
                imageUploaderContextValue={imageUploaderContextValue}
            >
                <FormSummary
                    currentStepIndex={currentStepIndex}
                    tabNames={state.tabNames}
                    tabDescriptions={db.tabDescriptions}
                />
                <Wrapper variant="form">
                    <Form onSubmit={onSubmit}>
                        {generateTabsAndInputs(state.tabNames, formDataFields)[currentStepIndex]}
                        {extraInputsJSX}
                        {renderAddFieldButton()}
                        {renderSummary()}
                        <Wrapper variant="btnContainer">
                            <Button type="button" onClick={prevTab} disabled={isFirstStep}>
                                Back
                            </Button>
                            <Button type="submit" variant="dark">
                                {isLastStep ? 'Send form' : 'Next'}
                            </Button>
                        </Wrapper>
                    </Form>
                </Wrapper>
            </ContextProviders>
        </Wrapper>
    );
}

export default App;
