/* eslint-disable no-unused-vars */
import React from 'react';

function Select({ name, options, selectedOption, onChange }) {
    const renderDefault = options.length === 0 ? '-' : `Choose a ${name}`;
    const isDisabled = options.length === 0;

    return (
        <select disabled={isDisabled} name={name} value={selectedOption} onChange={onChange}>
            <option value="" disabled>
                {renderDefault}
                {/* Choose a {name} */}
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
