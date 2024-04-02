interface BaseField {
    name: string;
    label: string;
    required?: boolean;
    id: string;
    type: string;
    pattern?: string;
    value?: string;
    groupName?: string;
    accept?: string;
    deleteButton?: boolean;
    handleClick?: () => void;
}

interface SelectField extends BaseField {
    type: 'select';
    options?: string[];
}

interface TextField extends BaseField {
    type: 'text';
}

interface EmailField extends BaseField {
    type: 'email';
}

interface FileField extends BaseField {
    type: 'file';
    accept: string;
}

interface CheckboxField extends BaseField {
    type: 'checkbox';
}

export type FormField = SelectField | TextField | EmailField | FileField | CheckboxField;

export default interface FormFields {
    'personal info': FormField[];
    education: FormField[];
    experience: FormField[];
    summary: FormField[];
}
