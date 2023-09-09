import React from 'react';

import StyledTextInput from './TextInput.styled';
import Label from '../Label/Label';
import Wrapper from '../Wrapper';
import FieldError from '../FieldError';

// function TextInput({
//     name,
//     error,
//     onChange,
//     value,
//     type,
//     label,
//     checked,
//     id,
//     groupName,
//     children,
//     accept,
//     deleteButton,
// }) {
//     const wrapperID = `${name}-${id}`;
//     return (
//         <Wrapper id={wrapperID}>
//             <Label htmlFor={name}>{label}</Label>
//             <StyledTextInput
//                 name={name}
//                 onChange={(e) => onChange(e, id, groupName)}
//                 value={value}
//                 type={type}
//                 id={name}
//                 checked={checked}
//                 data-id={id}
//                 accept={accept}
//             />
//             <FieldError>{error}</FieldError>
//             {children}
//             {deleteButton && (
//                 <button
//                     type="button"
//                     onClick={() => {
//                         removeFormField(id, groupName);
//                     }}
//                 >
//                     DELETE
//                 </button>
//             )}
//         </Wrapper>
//     );
// }

function TextInput({ children, data }) {
    const { type, name, label, id, checked, groupName, accept, onChange, error, value } = data;

    const wrapperID = `${name}-${id}`;
    return (
        <Wrapper id={wrapperID}>
            <Label htmlFor={name}>{label}</Label>
            <StyledTextInput
                name={name}
                onChange={(e) => onChange(e, id, groupName)}
                value={value}
                type={type}
                id={name}
                checked={checked}
                data-id={id}
                accept={accept}
            />
            <FieldError>{error}</FieldError>
            {children}
        </Wrapper>
    );
}

export default TextInput;
