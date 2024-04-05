import React, { useState, useEffect, useRef } from 'react';
import { FormField } from 'types/formFieldData.interfaces';
import { ICity, ICountry, IState } from 'country-state-city';
import { UilAngleDown, UilAngleUp } from '@iconscout/react-unicons';
import { useSelectContext } from '../../../context/SelectContext';
import Label from '../Label/Label';
import Wrapper from '../../Wrapper';
import { StyledCustomSelect, StyledSelectOptions, StyledValue, StyledOptionItem } from './Select.styled';
import FieldError from '../FieldError';

interface Props {
    options: ICountry[] | IState[] | ICity[];
    value: string;
    data: FormField;
}

function Select({ options, value, data }: Props) {
    const { name, label, error } = data;
    const [listVisible, setListVisible] = useState(false);
    const [highlightedIndex, setHeighlitedIndex] = useState(0);
    const { form, updateState, errors } = useSelectContext();
    const optionRefs = useRef<Array<HTMLLIElement | null>>([]);
    const disabled = options.length === 0;

    useEffect(() => {
        if (listVisible) setHeighlitedIndex(0);
    }, [listVisible]);

    useEffect(() => {
        const scrollIntoView = () => {
            if (highlightedIndex >= 0 && optionRefs.current[highlightedIndex]) {
                optionRefs.current[highlightedIndex]?.scrollIntoView({
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
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const { [name]: ommitedKey, ...rest } = errors;
        updateState('errors', rest);
    };

    const handleStateUpdate = (newValue: string) => {
        resetSelectError();

        if (name === 'country') {
            const newData = { country: newValue, state: '', city: '' };
            updateState('form', { ...form, ...newData });
            updateState('city', []);
            updateState('state', []);
            return;
        }

        updateState('form', { ...form, [name]: newValue });
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
        if (disabled) return;

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
            default:
                break;
        }
    };

    const handleOver = (index: number) => {
        setHeighlitedIndex(index);
    };

    const handleClick = () => {
        setListVisible((prevState) => !prevState);
    };

    const handleBlur = () => {
        setListVisible(false);
    };

    const selectOption = (e: React.MouseEvent<HTMLElement>, listItem: string) => {
        e.stopPropagation();
        handleStateUpdate(listItem);
        setListVisible(false);
    };

    const optionsJSX = () => {
        const items = options.map((item, index) => {
            const isOver = highlightedIndex === index;

            return (
                <StyledOptionItem
                    key={item.name}
                    ref={(el) => {
                        optionRefs.current[index] = el;
                    }}
                    onMouseOver={() => {
                        handleOver(index);
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
                <StyledValue>{value || (!disabled && 'Choose one option')}</StyledValue>
                {!disabled && renderArrow}
                <StyledSelectOptions isVisible={listVisible}>{optionsJSX()}</StyledSelectOptions>
            </StyledCustomSelect>
            <FieldError>{error}</FieldError>
        </Wrapper>
    );
}

export default Select;
