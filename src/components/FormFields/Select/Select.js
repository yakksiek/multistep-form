/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';

// function Select({ name, options, value, onChange }) {
//     const renderDefault = options.length === 0 ? '-' : `Choose a ${name}`;
//     const isDisabled = options.length === 0;

//     return (
//         <select disabled={isDisabled} name={name} value={value} onChange={onChange}>
//             <option value="" disabled>
//                 {renderDefault}
//                 {/* Choose a {name} */}
//             </option>
//             {options.map((option, index) => (
//                 // eslint-disable-next-line react/no-array-index-key
//                 <option key={index} value={option}>
//                     {option}
//                 </option>
//             ))}
//         </select>
//     );
// }

// export default Select;

import { useSelectContext } from '../../../context/SelectContext';
import {
    StyledCustomSelect,
    StyledDivider,
    StyledCaret,
    StyledSelectOptions,
    StyledValue,
    StyledOptionItem,
} from './Select.styled';

function Select({ name, options, value, onChange }) {
    const [listVisible, setListVisible] = useState(false);
    const [highlightedIndex, setHeighlitedIndex] = useState(0);
    const { form, updateState } = useSelectContext();

    useEffect(() => {
        if (listVisible) setHeighlitedIndex(0);
    }, [listVisible]);

    const handleOver = (index) => {
        setHeighlitedIndex(index);
    };

    const handleClick = () => {
        setListVisible((prevState) => !prevState);
    };

    const handleBlur = () => {
        setListVisible(false);
    };

    const selectOption = (listItem) => {
        const newForm = { ...form, [name]: listItem };
        updateState('form', newForm);
        setListVisible(false);
    };

    const optionsJSX = options.map((item, index) => {
        const isOver = highlightedIndex === index;
        return (
            <StyledOptionItem
                key={item.isoCode}
                onMouseOver={() => handleOver(index)}
                isOver={isOver}
                onClick={() => selectOption(item.name)}
            >
                {item.name}
            </StyledOptionItem>
        );
    });

    return (
        <StyledCustomSelect tabIndex={0} onBlur={handleBlur}>
            <StyledValue name={name} value={value}>
                {value}
            </StyledValue>
            <StyledDivider />
            <StyledCaret onClick={handleClick} />
            <StyledSelectOptions isVisible={listVisible}>{optionsJSX}</StyledSelectOptions>
        </StyledCustomSelect>
    );
}

export default Select;
