/* eslint-disable default-case */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect, useRef, createRef } from 'react';

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
    const disabled = options.length === 0;

    useEffect(() => {
        if (listVisible) setHeighlitedIndex(0);
    }, [listVisible]);

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

    const handleStateUpdate = (newValue) => {
        if (name === 'country') {
            updateState('city', []);
            return updateState('form', { ...form, country: newValue, state: '', city: '' });
        }

        return updateState('form', { ...form, [name]: newValue });
    };

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
                handleStateUpdate(options[highlightedIndex].name);
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
        handleStateUpdate(listItem);
        setListVisible(false);
    };

    const optionsJSX = () => {
        const items = options.map((item, index) => {
            const isOver = highlightedIndex === index;
            optionRefs.current[index] = optionRefs.current[index] || createRef();

            return (
                <StyledOptionItem
                    key={item.isoCode || index}
                    ref={optionRefs.current[index]}
                    onMouseOver={() => handleOver(index)}
                    isOver={isOver}
                    onClick={(e) => selectOption(e, item.name)}
                >
                    {item.name}
                </StyledOptionItem>
            );
        });

        return items;
    };

    return (
        <StyledCustomSelect
            tabIndex={0}
            onBlur={handleBlur}
            onClick={handleClick}
            onKeyDown={handleKeyDown}
            disabled={disabled}
        >
            <StyledValue name={name} value={value}>
                {value}
            </StyledValue>
            <StyledDivider />
            <StyledCaret />
            <StyledSelectOptions isVisible={listVisible}>{optionsJSX()}</StyledSelectOptions>
        </StyledCustomSelect>
    );
}

export default Select;
