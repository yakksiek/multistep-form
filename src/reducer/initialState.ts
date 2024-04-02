import { Country } from 'country-state-city';

import { InitialState } from '../types/formReducer.interfaces';

import * as db from '../db';

const initial: InitialState = {
    form: {
        newsletter: false,
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        country: '',
        state: '',
        city: '',
        school: [],
        experience: [],
    },
    errors: {},
    tabNames: db.formTabsFields,
    country: Country.getAllCountries(),
    state: [],
    city: [],
};

export default initial;

// form: {
//     newsletter: true,
//     firstName: 'Marcin',
//     lastName: 'Kulbicki',
//     email: 'marcin.kulbicki@gmail.com',
//     phone: '32423',
//     country: 'Central African Republic',
//     state: 'Bangui',
//     city: 'Bangui',
//     school: [
//         {
//             id: 'ff3e0fe0-f585-40c7-916e-6df6b6fba154',
//             value: 'school 1',
//             name: 'school-1',
//         },
//         {
//             id: 'school-2',
//             value: 'school 2',
//             name: 'school-2',
//         },
//     ],
//     experience: [
//         {
//             id: '13c84e56-38f5-4e10-9230-86235f7e6bc9',
//             value: 'exp 1',
//             name: 'experience-1',
//         },
//     ],
// },
