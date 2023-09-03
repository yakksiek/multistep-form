/* eslint-disable no-unused-vars */
import React from 'react';

function Select({ name, options, selectedOption, onChange, disabled }) {
    return (
        <select disabled={disabled} name={name} value={selectedOption} onChange={onChange}>
            <option value="" disabled>
                Choose a {name}
            </option>
            {options.map((option, index) => (
                // eslint-disable-next-line react/no-array-index-key
                <option key={index} value={option}>
                    {option}
                </option>
            ))}
        </select>
    );
}

export default Select;
