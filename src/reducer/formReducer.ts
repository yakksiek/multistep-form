// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import initial from './initialState';

const reducer = (state, action) => {
    switch (action.type) {
        case 'updateStateKey':
            return { ...state, [action.payload.name]: action.payload.value };
        case 'updateFormKey':
            return { ...state, form: { ...state.form, [action.payload.name]: action.payload.value } };
        case 'resetState':
            return initial;
        default:
            return state;
    }
};

export default reducer;
