/* eslint-disable no-unused-vars */

export const countries = ['Switzerland', 'Poland', 'England'];
export const states = {
    Switzerland: ['Zurich', 'Bern', 'Luzern'],
    Poland: ['Mazowieckie', 'Lubelskie'],
    England: ['Kent', 'Lancashire', 'Devon'],
};
export const cities = {
    Zurich: ['Zurich', 'Uster', 'Winthertur'],
    Bern: ['Huttwil', 'Ipsach', 'Jens'],
    Luzern: ['Ballwil', 'Dierikon', 'Ebikon'],
    Mazowieckie: ['Warsaw', 'Pułtusk', 'Piaseczno'],
    Lubelskie: ['Lublin', 'Chełm', 'Krasnystaw'],
    Kent: ['Canterbury', 'Maidstone', 'Rochester', 'Margate'],
    Lancashire: ['Preston', 'Blackburn', 'Burnley', 'Lancaster'],
    Devon: ['Exeter', 'Plymouth', 'Torquay', 'Newton Abbot'],
};

// export const formFields = [
//     {
//         name: 'firstName',
//         label: 'Name',
//         required: true,
//         pattern: '^[a-zA-Z -]+$',
//         id: crypto.randomUUID(),
//         type: 'text',
//     },
//     {
//         name: 'lastName',
//         label: 'Surname',
//         required: true,
//         pattern: '^[a-zA-Z -]+$',
//         id: crypto.randomUUID(),
//         type: 'text',
//     },
//     {
//         name: 'email',
//         label: 'Email',
//         required: true,
//         pattern: "^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$", // prettier-ignore
//         id: crypto.randomUUID(),
//         type: 'email',
//     },
//     {
//         name: 'phone',
//         label: 'Phone',
//         required: true,
//         pattern: '^[0-9]+$',
//         type: 'text',
//         value: '',
//     },
//     {
//         name: 'country',
//         label: 'Country',
//         required: true,
//         type: 'select',
//         id: crypto.randomUUID(),
//     },
//     {
//         name: 'state',
//         label: 'State',
//         required: true,
//         type: 'select',
//         id: crypto.randomUUID(),
//     },
//     {
//         name: 'city',
//         label: 'City',
//         type: 'select',
//         id: crypto.randomUUID(),
//     },
// ];

export const formTabsFields = ['address', 'education', 'experience'];

export const formFields = {
    address: [
        {
            name: 'firstName',
            label: 'Name',
            required: true,
            pattern: '^[a-zA-Z -]+$',
            id: crypto.randomUUID(),
            type: 'text',
        },
        {
            name: 'lastName',
            label: 'Surname',
            required: true,
            pattern: '^[a-zA-Z -]+$',
            id: crypto.randomUUID(),
            type: 'text',
        },
        {
            name: 'email',
            label: 'Email',
            required: true,
            pattern: "^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$", // prettier-ignore
            id: crypto.randomUUID(),
            type: 'email',
        },
        {
            name: 'phone',
            label: 'Phone',
            required: true,
            pattern: '^[0-9]+$',
            type: 'text',
            value: '',
        },
        {
            name: 'country',
            label: 'Country',
            required: true,
            type: 'select',
            id: crypto.randomUUID(),
        },
        {
            name: 'state',
            label: 'State',
            required: true,
            type: 'select',
            id: crypto.randomUUID(),
        },
        {
            name: 'city',
            label: 'City',
            type: 'select',
            id: crypto.randomUUID(),
        },
    ],
    education: [
        {
            name: 'highSchool',
            label: 'High School',
            required: true,
            pattern: '^[a-zA-Z -]+$',
            id: crypto.randomUUID(),
            type: 'text',
        },
        {
            name: 'university',
            label: 'University',
            required: true,
            pattern: '^[a-zA-Z -]+$',
            id: crypto.randomUUID(),
            type: 'text',
        },
    ],
    experience: [
        {
            name: 'job',
            label: 'Job',
            required: true,
            pattern: '^[a-zA-Z -]+$',
            id: crypto.randomUUID(),
            type: 'text',
        },
    ],
};
