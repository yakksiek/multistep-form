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

export const formFields = [
    // {
    //     name: 'firstName',
    //     label: 'Name',
    //     required: true,
    //     pattern: '^[a-zA-Z -]+$',
    // },
    // {
    //     name: 'lastName',
    //     label: 'Surname',
    //     required: true,
    //     pattern: '^[a-zA-Z -]+$',
    // },
    // {
    //     name: 'email',
    //     label: 'Email',
    //     required: true,
    //     // eslint-disable-next-line no-useless-escape
    //     pattern: "^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$", // prettier-ignore
    // },
    // {
    //     name: 'date',
    //     label: 'Date',
    //     required: true,
    //     // eslint-disable-next-line no-useless-escape
    //     pattern: '^(20)\\d{2}-(0[1-9]|1[1,2])-(0[1-9]|[12][0-9]|3[01])$',
    //     type: 'date',
    // },
    {
        name: 'country',
        label: 'Country',
        required: true,
        type: 'select',
        id: 5,
    },
    {
        name: 'state',
        label: 'State',
        required: true,
        type: 'select',
        id: 6,
    },
    {
        name: 'city',
        label: 'City',
        type: 'select',
        id: 7,
    },
];
