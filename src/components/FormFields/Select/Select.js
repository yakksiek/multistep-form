/* eslint-disable default-case */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect, useRef, createRef } from 'react';
import { UilAngleDown, UilAngleUp } from '@iconscout/react-unicons';

import { useSelectContext } from '../../../context/SelectContext';
import Label from '../Label/Label';
import Wrapper from '../../Wrapper';
import * as h from '../../../helpers';

import { StyledCustomSelect, StyledSelectOptions, StyledValue, StyledOptionItem } from './Select.styled';
import FieldError from '../FieldError';

function Select({ options, value, data }) {
    const { name, label, error } = data;
    const [listVisible, setListVisible] = useState(false);
    const [highlightedIndex, setHeighlitedIndex] = useState(0);
    const { form, updateState, errors } = useSelectContext();
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

    const resetSelectError = () => {
        const errorInState = errors[name];
        if (!errorInState) return;
        const { [name]: ommitedKey, ...rest } = errors;
        updateState('errors', rest);
    };

    const handleStateUpdate = (newValue) => {
        console.log(name);
        if (name === 'country') {
            const newData = { country: newValue, state: '', city: '' };
            updateState('form', { ...form, ...newData });
            updateState('city', []);
            updateState('state', []);
            return;
        }

        resetSelectError();
        updateState('form', { ...form, [name]: newValue });
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
        setListVisible((prevState) => !prevState);
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
                    onMouseOver={() => {
                        handleOver(index);
                        handleStateUpdate(item.name);
                    }}
                    isOver={isOver}
                    onClick={(e) => selectOption(e, item.name)}
                >
                    {item.name}
                </StyledOptionItem>
            );
        });

        return items;
    };

    const renderArrow = listVisible ? <UilAngleUp /> : <UilAngleDown />;

    return (
        <Wrapper variant="flex-column">
            <Label>{label}:</Label>
            <StyledCustomSelect
                tabIndex={0}
                onBlur={handleBlur}
                onClick={handleClick}
                onKeyDown={handleKeyDown}
                disabled={disabled}
                isVisible={listVisible}
            >
                <StyledValue value={value} name={name} data-select={name}>
                    {value || (!disabled && 'Choose one option')}
                </StyledValue>
                {renderArrow}
                <StyledSelectOptions isVisible={listVisible}>{optionsJSX()}</StyledSelectOptions>
            </StyledCustomSelect>
            <FieldError>{error}</FieldError>
        </Wrapper>
    );
}

export default Select;
