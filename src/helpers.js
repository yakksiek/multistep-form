/* eslint-disable no-unused-vars */
/* eslint-disable import/no-extraneous-dependencies */
import { Country, State, City } from 'country-state-city';

export function getNamesFromCSC(data) {
    const namesArr = data.map((el) => el.name);
    return namesArr;
}

function findItemInCSC(itemName, db) {
    const item = db.filter((element) => element.name === itemName);

    if (typeof item === 'undefined') throw new Error('could not find the item');
    return item;
}

function getStates(countryName) {
    const [country] = findItemInCSC(countryName, Country.getAllCountries());
    const { isoCode } = country;

    const states = State.getStatesOfCountry(isoCode);
    // const stateNames = getNamesFromCSC(states);
    return states;
}

function getCities(countryName, stateName) {
    const [country] = findItemInCSC(countryName, Country.getAllCountries());
    const { isoCode: countryCode } = country;

    const [state] = findItemInCSC(stateName, State.getStatesOfCountry(countryCode));
    const { isoCode: stateCode } = state;

    const cities = City.getCitiesOfState(countryCode, stateCode);
    // const citiesNamesArr = getNamesFromCSC(cities);
    return cities;
}

export function renderConditionallySelects(form, updateState) {
    const selectedCountry = form.country;
    if (selectedCountry.length === 0) return;

    const states = getStates(selectedCountry);
    updateState('state', states);

    const selectedState = form.state;
    if (selectedState.length === 0) return;

    const cities = getCities(selectedCountry, selectedState);
    updateState('city', cities);
}

export function getFirstElFromSplit(string, splitSign) {
    const isString = typeof string === 'string';
    if (!isString) throw new Error('not string type');
    return string.split(splitSign)[0];
}

export function getUserCountry(lat, long) {
    const [userLat, userLong] = [lat, long].map((el) => getFirstElFromSplit(el.toString(), '.'));

    // eslint-disable-next-line array-callback-return, consistent-return
    const getCountry = Country.getAllCountries().filter((country) => {
        const { latitude, longitude } = country;
        const [countryLat, countryLong] = [latitude, longitude].map((el) => getFirstElFromSplit(el, '.'));
        if (countryLat === userLat && userLong === countryLong) return country;
    });

    const isCountry = getCountry.length !== 0;
    if (!isCountry) throw new Error('no country found');

    const [country] = getCountry;
    return country.name;
}

// export validateSelects (selectFields, )

export function validate(validationFields, inputElementsArr) {
    let errors = {};
    inputElementsArr.forEach((input) => {
        const { name: inputName, value: inputValue } = input;
        const validationField = validationFields.find((el) => el.name === inputName);
        if (!validationField) throw new Error('no validation field');

        const { label, pattern, required, name } = validationField;

        if (required) {
            if (inputValue.length === 0) {
                const message = `[${label}] input is required`;
                errors = { ...errors, [name]: message };
                return;
            }
        }

        if (pattern) {
            const reg = new RegExp(pattern);
            const isPatternMatch = reg.test(inputValue);
            if (!isPatternMatch) {
                const message = `Provided data in [${label}] not valid`;
                errors = { ...errors, [name]: message };
            }
        }
    });

    return errors;
}

export function validateSelects(requiredSelectsFields, form) {
    let selectErrors = {};
    requiredSelectsFields.forEach((select) => {
        const { name } = select;
        const isInputValid = form[name] !== '';
        if (!isInputValid) selectErrors = { ...selectErrors, [name]: `Field [${name}] cannot be empty` };
    });

    return selectErrors;
}

export function findInputElementsInForm(form) {
    const inputElements = Array.from(form.elements).filter(
        (element) => element.tagName.toLowerCase() === 'input' && element.type !== 'submit',
    );

    return inputElements;
}

export function checkForRequiredFieldType(fields, fieldType) {
    return fields.filter((field) => field.type === fieldType && field.required);
}

export function isObjectEmpty(object) {
    return Object.keys(object).length === 0;
}
