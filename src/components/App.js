/* eslint-disable import/named */
/* eslint-disable no-unused-vars */
import React, { useReducer, useEffect } from 'react';

import Form from './Form';
import { Select } from './FormFields';
import * as db from '../db';

const initial = {
    form: {
        country: '',
        state: '',
        city: '',
    },
    country: db.countries,
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

    const updateState = (dataToUpdate, newValue) => {
        dispatch({ type: 'update', payload: { name: dataToUpdate, value: newValue } });
    };

    useEffect(() => {
        console.log(state);
    }, [state]);

    useEffect(() => {
        const selectedCountry = state.form.country;
        const isCountryData = selectedCountry.length > 0;
        if (!isCountryData) return;

        const states = db.states[selectedCountry];
        updateState('state', states);

        const selectedState = state.form.state;
        const isStateData = selectedCountry.length > 0;
        if (!isStateData) return;

        const cities = db.cities[selectedState];
        updateState('city', cities || []);
    }, [state.form.country, state.form.state]);

    const handleChange = (e) => {
        const { name, value } = e.target;

        const newForm = { ...state.form, [name]: value };
        dispatch({ type: 'update', payload: { name: 'form', value: newForm } });
    };

    const createFormFields = () => {
        // eslint-disable-next-line array-callback-return, consistent-return
        const formInputs = db.formFields.map((field) => {
            const { type, id, name } = field;
            console.log(state[name]);
            const selectedOptions = state.form[name];
            const options = state[name];

            if (type === 'select') {
                let disabled = false;
                if (name === 'state') {
                    disabled = state.form.country === '';
                }
                if (name === 'city') {
                    disabled = state.form.state === '';
                }

                return (
                    <Select
                        name={name}
                        key={id}
                        options={options}
                        selectedOption={selectedOptions}
                        onChange={handleChange}
                        disabled={disabled}
                    />
                );
            }
        });

        return formInputs;
    };

    return (
        <div>
            <h1>Multistep form</h1>
            <h1 className="bold">The best multistep form work, designs, illustrations, and graphic elements</h1>
            <p>Lorem</p>
            <p className="bold">Lorem</p>
            <Form>{createFormFields()}</Form>
        </div>
    );
}

export default App;
