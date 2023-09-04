/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/named */
/* eslint-disable no-unused-vars */
import React, { useReducer, useEffect } from 'react';
import { Country } from 'country-state-city';

import ContextProviders from '../context/ContextProviders';
import Form from './Form';
import { Select } from './FormFields';
import useGeoLocation from '../hooks/useGeoLocation';
import * as db from '../db';
import * as h from '../helpers';

const initial = {
    form: {
        country: '',
        state: '',
        city: '',
    },
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
    const location = useGeoLocation();

    const updateState = (dataToUpdate, newValue) => {
        dispatch({ type: 'update', payload: { name: dataToUpdate, value: newValue } });
    };

    useEffect(() => {
        console.log(state.form);
    }, [state.form]);

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

        if (name === 'country') {
            return updateState('form', { ...state.form, country: value, state: '', city: '' });
        }

        const newForm = { ...state.form, [name]: value };
        return updateState('form', newForm);
    };

    const createFormFields = () => {
        // eslint-disable-next-line array-callback-return, consistent-return
        const formInputs = db.formFields.map((field) => {
            const { type, id, name } = field;

            if (type === 'select') {
                const value = state.form[name];
                const options = state[name];

                return (
                    <Select
                        name={name}
                        key={id}
                        options={options}
                        value={value}
                        // onChange={handleChange}
                        // updateState={updateState}
                    />
                );
            }
        });

        return formInputs;
    };

    const selectContextValue = {
        form: state.form,
        updateState,
    };

    return (
        <div>
            <h1>Multistep form</h1>
            <h1 className="bold">The best multistep form work, designs, illustrations, and graphic elements</h1>
            <p>Lorem</p>
            <p className="bold">Lorem</p>
            <ContextProviders selectContextValue={selectContextValue}>
                <Form>{createFormFields()}</Form>
            </ContextProviders>
        </div>
    );
}

export default App;
