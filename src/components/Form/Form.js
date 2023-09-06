import React from 'react';

function Form({ onSubmit, children }) {
    return <form noValidate onSubmit={onSubmit}>{children}</form>;
}

export default Form;
