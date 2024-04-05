import { FormActions } from 'types/actionInterfaces';
import { InitialState } from 'types/initialState.interfaces';
import initialState from './initialState';
import ActionT from '../types/formActionTypes';

const reducer = (state: InitialState, action: FormActions): InitialState => {
    switch (action.type) {
        case ActionT.UpdateStateKey:
            return { ...state, [action.payload.name]: action.payload.value };
        case ActionT.UpdateFormKey:
            return { ...state, form: { ...state.form, [action.payload.name]: action.payload.value } };
        case ActionT.ResetState:
            return initialState;
        default:
            return state;
    }
};

export default reducer;
