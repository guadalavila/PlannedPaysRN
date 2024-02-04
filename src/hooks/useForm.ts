import { useContext, useState } from 'react';
import { RemoteConfigContext } from '~contexts/RemoteConfigContext';
import { validateEmail } from '~utils/helpers';

interface IFormFields {
    [fieldName: string]: any;
}

interface IFormErrors {
    [fieldName: string]: string;
}

interface IUseFormReturn {
    fields: IFormFields;
    errors: IFormErrors;
    setFieldValue: (fieldName: string, value: any) => void;
    handleSubmit: () => void;
}

const useForm = (
    form: 'NewCreditCard' | 'SignUpForm' | 'LoginForm',
    onSubmit: (fields: IFormFields) => void,
): IUseFormReturn => {
    const { tokenLogin } = useContext(RemoteConfigContext);
    const [fields, setFields] = useState<IFormFields>({});
    const [errors, setErrors] = useState<IFormErrors>({});

    const setFieldValue = (fieldName: string, value: any) => {
        setFields((prevFields) => ({
            ...prevFields,
            [fieldName]: value,
        }));
    };

    const handleSubmit = () => {
        const formErrors: IFormErrors = {};
        if (form === 'NewCreditCard') {
            validateNewCreditCard();
        } else if (form === 'SignUpForm') {
            validateSignUp();
        } else if (form === 'LoginForm') {
            validateLogin();
        }
        // setErrors(formErrors);

        // if (Object.keys(formErrors).length === 0) {
        //     console.log('a');
        // } else {
        //     onSubmit(fields);
        // }
    };

    const validateNewCreditCard = () => {
        if (!fields.name) {
            setErrors({
                name: 'Debes ingresar un nombre',
            });
        } else if (!fields.card) {
            setErrors({
                card: 'Debes seleccionar una tarjeta',
            });
        } else {
            setErrors({});
            onSubmit(fields);
        }
    };

    const validateSignUp = () => {
        if (!fields.name) {
            setErrors({
                name: 'Debes ingresar un nombre',
            });
        } else if (!fields.lastName) {
            setErrors({
                lastName: 'Debes ingresar un apellido',
            });
        } else if (!fields.email) {
            setErrors({
                email: 'Debes ingresar un email',
            });
        } else if (fields.email && !validateEmail(String(fields.email))) {
            setErrors({
                email: 'Debes ingresar un email válido',
            });
        } else if (!fields.password) {
            setErrors({
                password: 'Debes ingresar una contraseña ',
            });
        } else if (fields.password && fields.password.length < 6) {
            setErrors({
                password: 'La contraseña debe tener como mínimo 6 caracteres',
            });
        } else if (!fields.token) {
            setErrors({
                token: 'Debes ingresar una clave de invitación',
            });
        } else if (fields.token && fields.token !== tokenLogin) {
            setErrors({
                token: 'Debes ingresar una clave de invitación válida',
            });
        } else {
            setErrors({});
            onSubmit(fields);
        }
    };

    const validateLogin = () => {
        if (!fields.email) {
            setErrors({
                email: 'Debes ingresar un email',
            });
        } else if (fields.email && !validateEmail(String(fields.email))) {
            setErrors({
                email: 'Debes ingresar un email válido',
            });
        } else if (!fields.password) {
            setErrors({
                password: 'Debes ingresar una contraseña ',
            });
        } else if (fields.password && fields.password.length < 6) {
            setErrors({
                password: 'La contraseña debe tener como mínimo 6 caracteres',
            });
        } else {
            setErrors({});
            onSubmit(fields);
        }
    };
    return {
        fields,
        errors,
        setFieldValue,
        handleSubmit,
    };
};

export default useForm;
