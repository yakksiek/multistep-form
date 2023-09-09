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
            id: crypto.randomUUID(),
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
            name: 'school-1',
            label: 'School',
            pattern: "^[a-zA-Z0-9\\s.'-]*$",
            id: crypto.randomUUID(),
            type: 'text',
            groupName: 'school',
        },
    ],
    experience: [
        {
            name: 'experience-1',
            label: 'Experience',
            pattern: "^[a-zA-Z0-9\\s.'-]*$",
            id: crypto.randomUUID(),
            type: 'text',
            groupName: 'experience',
        },
    ],
    summary: [
        {
            name: 'photo',
            label: 'Upload your photo',
            id: crypto.randomUUID(),
            type: 'file',
            accept: 'image/*',
        },
        {
            name: 'newsletter',
            label: 'Receive job offers straight to your email',
            id: crypto.randomUUID(),
            type: 'checkbox',
        },
    ],
};

export const formTabsFields = Object.keys(formFields);
