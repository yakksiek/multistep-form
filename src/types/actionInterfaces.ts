import FormActionTypes from './FormActionTypes';
import { Form, InitialState } from './initialState.interfaces';

export interface UpdateStateKeyAction {
    type: FormActionTypes.UpdateStateKey;
    payload: {
        name: keyof InitialState;
        value: InitialState[keyof InitialState];
    };
}

export interface UpdateFormKeyAction {
    type: FormActionTypes.UpdateFormKey;
    payload: {
        name: keyof Form;
        value: Form[keyof Form];
    };
}

export interface ResetStateAction {
    type: FormActionTypes.ResetState;
}

export type FormActions = UpdateStateKeyAction | UpdateFormKeyAction | ResetStateAction;
