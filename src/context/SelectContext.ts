import { createContext, useContext } from 'react';
import { Form, InitialState } from 'types/initialState.interfaces';
import initial from '../reducer/initialState';

export interface SelectContextType {
    form: Form;
    updateState: (dataToUpdate: keyof InitialState, newValue: InitialState[keyof InitialState]) => void;
    errors: Record<string, string>;
}

const defaultContextValue: SelectContextType = {
    form: initial.form,
    updateState: () => {},
    errors: {},
};

export const SelectContext = createContext<SelectContextType>(defaultContextValue);

export function useSelectContext() {
    return useContext(SelectContext);
}
