import { createContext, useContext } from 'react';

export const SelectContext = createContext();

export function useSelectContext() {
    return useContext(SelectContext);
}
