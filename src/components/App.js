/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/named */
/* eslint-disable no-unused-vars */
import React, { useReducer, useEffect } from 'react';
import { Country } from 'country-state-city';

import ContextProviders from '../context/ContextProviders';
import Form from './Form';
import Select from './FormFields/Select';
import useGeoLocation from '../hooks/useGeoLocation';
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
        // firstName: '',
        // lastName: '',
        // email: '',
        // phone: '',
        // country: '',
        // state: '',
        // city: '',
    },
    errors: {
        // firstName: '',
        // lastName: '',
        // email: '',
        // phone: '',
        // country: '',
        // state: '',
        // city: '',
    },
    tabNames: db.formTabsFields,
    country: Country.getAllCountries(),
    state: [],
    city: [],
};

const reducer = (state, action) => {
    switch (action.type) {
        case 'update':
            return { ...state, [action.payload.name]: action.payload.value };
        default:
            return state;
    }
};

function App() {
    const [state, dispatch] = useReducer(reducer, initial);
    const { currentStepIndex, isFirstStep, isLastStep, prevTab, nextTab } = useMultiStepForm(state.tabNames.length);
    const location = useGeoLocation();

    const updateState = (dataToUpdate, newValue) => {
        dispatch({ type: 'update', payload: { name: dataToUpdate, value: newValue } });
    };

    useEffect(() => {
        console.log(state);
    }, [state]);

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

        const currentTabTitle = state.tabNames[currentStepIndex];
        const currentFormFields = db.formFields[currentTabTitle];
        const inputError = h.validate(currentFormFields, [input]);
        h.resetErrorInState(inputError, inputName, state.errors, updateState);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;

        const newForm = { ...state.form, [name]: value };
        updateState('form', newForm);
        liveValidation(e.target);
    };

    const createInputs = (fields) => {
        // eslint-disable-next-line array-callback-return, consistent-return
        const formInputs = fields.map((field) => {
            const { type, name, label } = field;
            const stateValue = state.form[name];
            const error = state.errors[name];
            console.log(type);

            if (type === 'select') {
                const options = state[name];

                return (
                    <Select key={name} label={label} name={name} options={options} value={stateValue} error={error} />
                );
            }

            return (
                <TextInput
                    key={name}
                    onChange={handleChange}
                    name={name}
                    value={stateValue}
                    type={type}
                    error={error}
                    label={label}
                />
            );
        });

        return formInputs;
    };

    const generateTabsAndInputs = function () {
        // eslint-disable-next-line array-callback-return
        const tabs = db.formTabsFields.map((tabName) => {
            const tabFields = db.formFields[tabName];

            const inputs = createInputs(tabFields);
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
        const currentTabTitle = state.tabNames[currentStepIndex];
        const currentFormFields = db.formFields[currentTabTitle];
        let errors = {};
        const submitErrors = h.validate(currentFormFields, inputElements);
        errors = { ...errors, ...submitErrors };

        const requiredSelectsFields = h.checkForRequiredFieldType(currentFormFields, 'select');
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
