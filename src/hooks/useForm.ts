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
    form:
        | 'NewCreditCard'
        | 'SignUpForm'
        | 'LoginForm'
        | 'UpdateUser'
        | 'NewGoalForm'
        | 'AddTransactionForm'
        | 'AddBill'
        | 'EditBill',
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
        } else if (form === 'UpdateUser') {
            validateUpdateUser();
        } else if (form === 'NewGoalForm') {
            validateNewGoalForm();
        } else if (form === 'AddTransactionForm') {
            validateAddTransaction();
        } else if (form === 'AddBill') {
            validateAddNewExpense();
        } else if (form === 'EditBill') {
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
        } else if (!fields.number) {
            setErrors({
                number: 'Debes ingresar dos números',
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

    const validateUpdateUser = () => {
        if (!fields.name) {
            setErrors({
                name: 'Debes ingresar un nombre',
            });
        } else if (!fields.lastName) {
            setErrors({
                lastName: 'Debes ingresar un apellido ',
            });
        } else {
            setErrors({});
            onSubmit(fields);
        }
    };

    const validateNewGoalForm = () => {
        if (!fields.title) {
            setErrors({
                title: 'Debes ingresar un título',
            });
        } else if (!fields.amountTotal) {
            setErrors({
                amountTotal: 'Debes ingresar un monto',
            });
        } else if (!fields.coin) {
            setErrors({
                coin: 'Debes seleccionar una moneda',
            });
        } else if (!fields.icon) {
            setErrors({
                icon: 'Debes seleccionar un icono',
            });
        } else if (!fields.color) {
            setErrors({
                color: 'Debes seleccionar un color',
            });
        } else {
            setErrors({});
            onSubmit(fields);
        }
    };

    const validateAddTransaction = () => {
        if (!fields.amount) {
            setErrors({
                amount: 'Debes ingresar un monto',
            });
        } else if (!fields.reference) {
            setErrors({
                reference: 'Debes ingresar una referencia',
            });
        } else if (!fields.cuota) {
            setErrors({
                cuota: 'Debes seleccionar la cantidad de cuotas',
            });
        } else if (!fields.category) {
            setErrors({
                category: 'Debes seleccionar una categoria',
            });
        } else {
            setErrors({});
            onSubmit(fields);
        }
    };

    const validateAddNewExpense = () => {
        if (!fields.amount) {
            setErrors({
                amount: 'Debes ingresar un monto',
            });
        } else if (!fields.comment) {
            setErrors({
                comment: 'Debes ingresar un comentario',
            });
        } else if (!fields.category) {
            setErrors({
                category: 'Debes seleccionar una categoria',
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
