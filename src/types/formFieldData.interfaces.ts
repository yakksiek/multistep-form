import { MuliInputsGroupType } from './mulitInputsGroupTypes';

interface BaseField {
    name: string;
    label: string;
    required?: boolean;
    id: string;
    type: string;
    pattern?: string;
    value?: string;
    groupName?: MuliInputsGroupType;
    accept?: string;
    deleteButton?: boolean;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>, id: string, groupName?: MuliInputsGroupType) => void;
    error?: string;
    handleRemoveField?: (id: string, groupName: MuliInputsGroupType) => void;
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
    'profile details': FormField[];
    education: FormField[];
    experience: FormField[];
    summary: FormField[];
}
