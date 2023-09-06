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
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        country: '',
        state: '',
        city: '',
    },
    errors: {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        country: '',
        state: '',
        city: '',
    },
    tabsNumber: db.formTabsFields.length,
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
    const { currentStepIndex, isFirstStep, isLastStep, back, next } = useMultiStepForm(state.tabsNumber);
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
        if (location.loaded && state.form.country === '') {
            const { lat, long } = location.coords;
            const userCountry = h.getUserCountry(lat, long);
            const newForm = { ...state.form, country: userCountry };
            updateState('form', newForm);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [location]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        console.log(e.target);

        const newForm = { ...state.form, [name]: value };
        return updateState('form', newForm);
    };

    const createInputs = (fields) => {
        // eslint-disable-next-line array-callback-return, consistent-return
        const formInputs = fields.map((field) => {
            const { type, name } = field;
            const stateValue = state.form[name];

            if (type === 'select') {
                const options = state[name];

                return <Select name={name} key={name} options={options} value={stateValue} />;
            }

            return <TextInput key={name} onChange={handleChange} name={name} value={stateValue} type={type} />;
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

        console.log(e.target);
    };

    const selectContextValue = {
        form: state.form,
        updateState,
    };

    return (
        <div style={{ border: '1px solid black' }}>
            <ContextProviders selectContextValue={selectContextValue}>
                <Form onSubmit={onSubmit}>
                    <div>
                        {currentStepIndex + 1} / {state.tabsNumber}
                    </div>
                    {generateTabsAndInputs()[currentStepIndex]}

                    <Form.NavBtn type="button" onClick={back} disabled={isFirstStep}>
                        Back
                    </Form.NavBtn>

                    <Form.NavBtn type="submit" onClick={next}>
                        {isLastStep ? 'Summary' : 'Next'}
                    </Form.NavBtn>
                </Form>
            </ContextProviders>
        </div>
    );
}

export default App;
