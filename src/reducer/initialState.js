import { Country } from 'country-state-city';

import * as db from '../db';

const initial = {
    form: {
        // firstName: 'Zenon',
        //         value: 'Junior here and there',
        //         name: 'experience-1',
        //     },
        //     {
        //         id: 'experience-2',
        //         value: 'next job',
        //         name: 'experience-2',
        //     },
        //     {
        //         id: 'experience-3',
        //         value: 'another job',
        //         name: 'experience-3',
        //     },
        // ],// lastName: 'Zenonkiewicz',
        // email: 'test@test.com',
        // phone: '333333333',
        // country: 'Poland',
        // state: 'Lublin Voivodeship',
        // city: 'Abramów',
        // school: [
        //     {
        //         id: '8478c902-eda2-4ad8-9377-9c54a3a33fe2',
        //         value: 'School primary',
        //         name: 'school-1',
        //     },
        //     {
        //         id: 'school-2',
        //         value: 'School secondary',
        //         name: 'school-2',
        //     },
        //     {
        //         id: 'school-3',
        //         value: 'High school',
        //         name: 'school-3',
        //     },
        // ],
        // experience: [
        //     {
        //         id: '07c0a7f8-2ea8-43f7-a44d-cf0b9131483f',

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
