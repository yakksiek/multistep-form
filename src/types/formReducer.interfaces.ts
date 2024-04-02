import { ICountry, IState, ICity } from 'country-state-city';

interface School {
    id: string;
    value: string;
    name: string;
}

interface Experience {
    id: string;
    value: string;
    name: string;
}

interface Form {
    newsletter: boolean;
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    country: string;
    state: string;
    city: string;
    school: School[];
    experience: Experience[];
}

export interface InitialState {
    form: Form;
    errors: Record<string, string>;
    tabNames: string[];
    country: ICountry[];
    state: IState[];
    city: ICity[];
}
