/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/named */
/* eslint-disable no-unused-vars */
import React, { useReducer, useEffect } from 'react';
import { Country } from 'country-state-city';

import Form from './Form';
import { Select } from './FormFields';
import * as db from '../db';
import * as h from '../helpers';

const initial = {
    form: {
        country: '',
        state: '',
        city: '',
    },
    // country: h.getNamesFromCSC(Country.getAllCountries()),
    country: ['Poland'],
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
        console.log(state.form);
    }, [state.form]);

    useEffect(() => {
        h.renderConditionallySelects(state.form, updateState);
    }, [state.form]);

    const handleChange = (e) => {
        const { name, value } = e.target;

        const newForm = { ...state.form, [name]: value };
        dispatch({ type: 'update', payload: { name: 'form', value: newForm } });
    };

    const createFormFields = () => {
        // eslint-disable-next-line array-callback-return, consistent-return
        const formInputs = db.formFields.map((field) => {
            const { type, id, name } = field;

            if (type === 'select') {
                const selectedOptions = state.form[name];
                const options = state[name];
                const disabled = h.disableConditionallySelect(name, state.form);

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
