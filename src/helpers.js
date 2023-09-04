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
    const stateNames = getNamesFromCSC(states);
    return stateNames;
}

function getCities(countryName, stateName) {
    const [country] = findItemInCSC(countryName, Country.getAllCountries());
    if (typeof country === 'undefined') throw new Error('could not find the country');
    const { isoCode: countryCode } = country;

    const [state] = findItemInCSC(stateName, State.getStatesOfCountry(countryCode));
    if (typeof state === 'undefined') throw new Error('could not find the state');
    const { isoCode: stateCode } = state;

    const cities = City.getCitiesOfState(countryCode, stateCode);
    const citiesNamesArr = getNamesFromCSC(cities);
    return citiesNamesArr;
}

export function renderConditionallySelects(form, updateState) {
    const selectedCountry = form.country;
    const isCountryData = selectedCountry.length > 0;
    if (!isCountryData) return;

    const states = getStates(selectedCountry);
    updateState('state', states);

    const selectedState = form.state;
    const isStateData = selectedState.length > 0;
    if (!isStateData) return;

    const cities = getCities(selectedCountry, selectedState);
    updateState('city', cities);
}

export function disableConditionallySelect(name, form) {
    let disabled = false;
    if (name === 'state') {
        disabled = form.country === '';
    }
    if (name === 'city') {
        disabled = form.state === '';
    }

    return disabled;
}
