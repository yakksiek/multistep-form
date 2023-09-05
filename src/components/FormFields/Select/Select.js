/* eslint-disable default-case */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect, useRef, createRef } from 'react';

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
    const optionRefs = useRef([]);

    useEffect(() => {
        if (listVisible) setHeighlitedIndex(0);
        // console.log(`list open: ${listVisible}`);
    }, [listVisible]);

    // useEffect(() => {
    //     const handleKeyDown = (e) => {
    //         if (!listVisible) return;

    //         if (e.key === 'ArrowDown') {
    //             e.preventDefault();
    //             const newIndex = Math.min(highlightedIndex + 1, options.length - 1);
    //             setHeighlitedIndex(newIndex);
    //         } else if (e.key === 'ArrowUp') {
    //             e.preventDefault();
    //             const newIndex = Math.max(highlightedIndex - 1, 0);
    //             setHeighlitedIndex(newIndex);
    //         }
    //     };

    //     document.addEventListener('keydown', handleKeyDown);

    //     return () => {
    //         document.removeEventListener('keydown', handleKeyDown);
    //     };
    // }, [listVisible, highlightedIndex, options, onChange]);

    // useEffect(() => {
    //     const container = containerRef.current;
    //     const handler = (e) => {
    //         if (e.target !== container) return;

    //         switch (e.code) {
    //             case 'Enter':
    //             case 'Space':
    //                 setListVisible((prevState) => !prevState);
    //                 break;
    //             case 'ArrowUp':
    //             case 'ArrowDown':
    //                 if (!listVisible) {
    //                     setListVisible(true);
    //                     break;
    //                 }

    //                 // eslint-disable-next-line no-case-declarations
    //                 const newValue = highlightedIndex + (e.code === 'ArrowDown' ? 1 : -1);
    //                 if (newValue >= 0 && newValue < options.length) {
    //                     setHeighlitedIndex(newValue);
    //                 }
    //                 break;
    //             case 'Escape':
    //                 setListVisible(false);
    //                 break;
    //         }
    //     };

    //     container.addEventListener('keydown', handler);

    //     return () => {
    //         container.removeEventListener('keydown', handler);
    //     };
    // }, [listVisible, highlightedIndex, options]);

    useEffect(() => {
        const scrollIntoView = () => {
            if (highlightedIndex >= 0 && optionRefs.current[highlightedIndex]) {
                optionRefs.current[highlightedIndex].current.scrollIntoView({
                    behavior: 'auto',
                    block: 'nearest',
                    inline: 'nearest',
                });
            }
        };

        scrollIntoView();
    }, [highlightedIndex]);

    const handleKeyDown = (e) => {
        switch (e.code) {
            case 'Space':
                setListVisible((prevState) => !prevState);
                break;
            case 'ArrowUp':
            case 'ArrowDown':
                if (!listVisible) {
                    setListVisible(true);
                    break;
                }

                // eslint-disable-next-line no-case-declarations
                const newValue = highlightedIndex + (e.code === 'ArrowDown' ? 1 : -1);
                if (newValue >= 0 && newValue < options.length) {
                    setHeighlitedIndex(newValue);
                }
                break;
            case 'Enter':
                updateState('form', { ...form, country: options[highlightedIndex].name });
                setListVisible(false);
                break;
            case 'Escape':
                setListVisible(false);
                break;
        }
    };

    const handleOver = (index) => {
        setHeighlitedIndex(index);
    };

    const handleClick = () => {
        setListVisible(true);
    };

    const handleBlur = () => {
        setListVisible(false);
    };

    const selectOption = (e, listItem) => {
        e.stopPropagation();
        if (listItem === value) return;

        const newForm = { ...form, [name]: listItem };
        updateState('form', newForm);
        setListVisible(false);
    };

    const optionsJSX = options.map((item, index) => {
        const isOver = highlightedIndex === index;
        optionRefs.current[index] = optionRefs.current[index] || createRef();

        return (
            <StyledOptionItem
                key={item.isoCode}
                ref={optionRefs.current[index]}
                onMouseOver={() => handleOver(index)}
                isOver={isOver}
                onClick={(e) => selectOption(e, item.name)}
            >
                {item.name}
            </StyledOptionItem>
        );
    });

    return (
        <StyledCustomSelect tabIndex={0} onBlur={handleBlur} onClick={handleClick} onKeyDown={handleKeyDown}>
            <StyledValue name={name} value={value}>
                {value}
            </StyledValue>
            <StyledDivider />
            <StyledCaret />
            <StyledSelectOptions isVisible={listVisible}>{optionsJSX}</StyledSelectOptions>
        </StyledCustomSelect>
    );
}

export default Select;
