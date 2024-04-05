import { City, Country, ICity, ICountry, IState, State } from 'country-state-city';
import { FormField } from 'types/formFieldData.interfaces';
import { Form, InitialState } from 'types/initialState.interfaces';

type CountryStateCityInterfaces = ICountry | IState | ICity;

function findItemInCSC(itemName: string, db: CountryStateCityInterfaces[]) {
    const item = db.filter((element) => element.name === itemName);

    if (typeof item === 'undefined') throw new Error('could not find the item');
    return item;
}

function getStates(countryName: string) {
    const [country] = findItemInCSC(countryName, Country.getAllCountries());
    if ('isoCode' in country) {
        const { isoCode } = country;

        const states = State.getStatesOfCountry(isoCode);
        return states;
    }

    throw new Error('Country does not have an isoCode');
}

function getCities(countryName: string, stateName: string): ICity[] {
    const [country] = findItemInCSC(countryName, Country.getAllCountries());
    if (!('isoCode' in country)) return [];
    const { isoCode: countryCode } = country;

    const [state] = findItemInCSC(stateName, State.getStatesOfCountry(countryCode));
    if (!('isoCode' in state)) return [];
    const { isoCode: stateCode } = state;

    const cities = City.getCitiesOfState(countryCode, stateCode);
    return cities;
}

export function renderConditionallySelects(
    form: Form,
    updateState: (dataToUpdate: keyof InitialState, newValue: InitialState[keyof InitialState]) => void,
) {
    const selectedCountry = form.country;
    if (selectedCountry.length === 0) return;

    const states = getStates(selectedCountry);
    updateState('state', states);

    const selectedState = form.state;
    if (selectedState.length === 0) return;

    const cities = getCities(selectedCountry, selectedState);
    updateState('city', cities);
}

export function getFirstElFromSplit(string: string, splitSign: string) {
    const isString = typeof string === 'string';
    if (!isString) throw new Error('not string type');
    return string.split(splitSign)[0];
}

export function getUserCountry(lat: number | null, long: number | null) {
    if (!lat || !long) return '';
    const [userLat, userLong] = [lat, long].map((el) => getFirstElFromSplit(el.toString(), '.'));

    const getCountry = Country.getAllCountries().filter((country) => {
        const { latitude, longitude } = country;
        const [countryLat, countryLong] = [latitude, longitude].map((el) => getFirstElFromSplit(el, '.'));
        if (countryLat === userLat && userLong === countryLong) return country;
        return '';
    });

    const isCountry = getCountry.length !== 0;
    if (!isCountry) return '';

    const [country] = getCountry;
    return country.name;
}

export function validate(validationFields: FormField[], inputElementsArr: HTMLInputElement[]) {
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

export function validateSelects(requiredSelectsFields: FormField[], form: Form): Record<string, string> {
    let selectErrors = {};
    requiredSelectsFields.forEach((select) => {
        const { name } = select;
        const isInputValid = form[name as keyof Form] !== '';
        if (!isInputValid) selectErrors = { ...selectErrors, [name]: `Field [${name}] cannot be empty` };
    });

    return selectErrors;
}

export function findInputElementsInForm(form: HTMLFormElement): HTMLInputElement[] {
    const inputElements = Array.from(form.elements).filter(
        (element): element is HTMLInputElement =>
            element.tagName.toLowerCase() === 'input' && (element as HTMLInputElement).type !== 'submit',
    );

    return inputElements;
}

export function checkForRequiredFieldType(fields: FormField[], fieldType: string) {
    return fields.filter((field) => field.type === fieldType && field.required);
}

export function isObjectEmpty(object: Record<string, string>) {
    return Object.keys(object).length === 0;
}

export function resetErrorInState(
    inputError: Record<string, string>,
    inputName: string,
    stateErrors: Record<string, string>,
    updateState: (dataToUpdate: keyof InitialState, newValue: InitialState[keyof InitialState]) => void,
) {
    const isErrorObjEmpty = Object.keys(inputError).length === 0;
    if (!isErrorObjEmpty) return;

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { [inputName]: ommitedKey, ...rest } = stateErrors;
    updateState('errors', rest);
}

export function capitalize(string: string) {
    const isValidName = typeof string === 'string' && string !== '';
    if (!isValidName) throw new Error('not string type');
    return string.charAt(0).toUpperCase() + string.slice(1);
}
