/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/named */
/* eslint-disable no-unused-vars */
import React, { useReducer, useEffect, useState } from 'react';
import { Country } from 'country-state-city';

import ContextProviders from '../context/ContextProviders';
import useGeoLocation from '../hooks/useGeoLocation';
import useImageUploader from '../hooks/useImageUploader';
import Form from './Form';
import Fieldset from './FormFields/Fieldset';
import Select from './FormFields/Select';
import * as db from '../db';
import * as h from '../helpers';
import TextInput from './FormFields/TextInput/TextInput';
import useMultiStepForm from '../hooks/useMultiStepForm';
import Tab from './Tab/Tab';

const initial = {
    form: {
        firstName: 'we',
        lastName: 'qwe',
        email: 'test@test.com',
        phone: '333',
        country: 'Poland',
        state: '',
        city: '',
        school: [],
        experience: [],
        newsletter: false,
        // firstName: '',
        // lastName: '',
        // email: '',
        // phone: '',
        // country: '',
        // state: '',
        // city: '',
        // school: [],
        // experience: [],
    },
    errors: {},
    tabNames: db.formTabsFields,
    country: Country.getAllCountries(),
    state: [],
    city: [],
};

const reducer = (state, action) => {
    switch (action.type) {
        case 'updateStateKey':
            return { ...state, [action.payload.name]: action.payload.value };
        case 'updateFormKey':
            return { ...state, form: { ...state.form, [action.payload.name]: action.payload.value } };
        default:
            return state;
    }
};

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
    } = useMultiStepForm(state, db.formFields, dispatch);
    const { selectedImage, previewUrl, isImageSelected, handleImageSelect, clearImage } = useImageUploader();
    const location = useGeoLocation();

    useEffect(() => {
        console.log(state);
    }, [state, selectedImage]);

    const updateState = (dataToUpdate, newValue) => {
        dispatch({ type: 'updateStateKey', payload: { name: dataToUpdate, value: newValue } });
    };

    useEffect(() => {
        h.renderConditionallySelects(state.form, updateState);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [state.form.country, state.form.state]);

    useEffect(() => {
        // if (location.loaded && state.form.country === '') {
        //     const { lat, long } = location.coords;
        //     const userCountry = h.getUserCountry(lat, long);
        //     const newForm = { ...state.form, country: userCountry };
        //     updateState('form', newForm);
        // }
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
            let stateValue = state.form[name];
            let onChange = handleChange;
            const error = state.errors[name];
            const data = { ...field, onChange, error };

            if (type === 'select') {
                const options = state[name];
                console.log(name)
                return <Select key={name} data={data} options={options} value={stateValue} />;
            }

            if (label === 'School' || label === 'Experience') {
                const group = state.form[groupName];
                const item = group.find((el) => el.id === id);
                stateValue = item ? item.value : '';
            }

            if (type === 'file') {
                onChange = handleImageSelect;
            }

            return (
                <TextInput key={id} data={data} value={stateValue}>
                    {deleteButton && (
                        <button
                            type="button"
                            onClick={() => {
                                removeFormField(id, groupName);
                            }}
                        >
                            DELETE
                        </button>
                    )}
                </TextInput>
            );
        });

        return formInputs;
    };

    const generateTabsAndInputs = function () {
        const tabs = state.tabNames.map((tabName) => {
            const inputs = createInputs(formDataFields);
            return (
                <Tab key={tabName} name={tabName}>
                    <h2>{tabName}</h2>
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
        nextTab();
    };

    const selectContextValue = {
        form: state.form,
        updateState,
        errors: state.errors,
    };

    return (
        <div style={{ border: '1px solid black' }}>
            <ContextProviders selectContextValue={selectContextValue}>
                <Form onSubmit={onSubmit}>
                    <div>
                        {currentStepIndex + 1} / {state.tabNames.length}
                    </div>
                    {generateTabsAndInputs()[currentStepIndex]}
                    <div>{state[`${state.tabNames[currentStepIndex]}ExtraInputs`]}</div>
                    {(currentStepIndex === 1 || currentStepIndex === 2) && (
                        <button disabled={formDataFields.length === 3} onClick={addFormField} type="button">
                            Add field
                        </button>
                    )}
                    <hr />
                    <Form.NavBtn type="button" onClick={prevTab} disabled={isFirstStep}>
                        Back
                    </Form.NavBtn>

                    <Form.NavBtn type="submit">{isLastStep ? 'Summary' : 'Next'}</Form.NavBtn>
                </Form>
            </ContextProviders>
        </div>
    );
}

export default App;
