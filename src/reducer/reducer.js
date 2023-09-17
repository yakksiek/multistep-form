const reducer = (state, action) => {
    switch (action.type) {
        case 'updateStateKey':
            return { ...state, [action.payload.name]: action.payload.value };
        case 'updateFormKey':
            return { ...state, form: { ...state.form, [action.payload.name]: action.payload.value } };
        default:
            return state;
    }
};

export default reducer;
