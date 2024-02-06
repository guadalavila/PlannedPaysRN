import React from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { StyleSheet, View } from 'react-native';
import Button from '~components/Button';
import ContainerSafe from '~components/ContainerSafe';
import Input from '~components/Input';
import TextError from '~components/TextError';
import useForm from '~hooks/useForm';
import { RootStackLogoutParamList } from '~navigations/types';
import useAuth from '~hooks/useAuth';

interface Props extends NativeStackScreenProps<RootStackLogoutParamList, 'SignUpScreen'> {}

const SignUpScreen = ({}: Props) => {
    const { fields, setFieldValue, handleSubmit, errors } = useForm('SignUpForm', () => doSignUp());
    const { signUp } = useAuth();

    const doSignUp = () => {
        signUp({
            name: fields.name,
            lastName: fields.lastName,
            password: fields.password, //TODO encrypted password
            email: String(fields.email).toLowerCase(),
            date: new Date(),
        });
    };

    return (
        <ContainerSafe>
            <View style={styles.container}>
                <Input
                    value={fields.name}
                    placeholder='Nombre'
                    keyboardType='default'
                    onChangeText={(value) => setFieldValue('name', value)}
                />
                {errors.name && <TextError text={errors.name} />}
                <Input
                    value={fields.lastName}
                    placeholder='Apellido'
                    keyboardType='default'
                    onChangeText={(value) => setFieldValue('lastName', value)}
                />
                {errors.lastName && <TextError text={errors.lastName} />}
                <Input
                    value={fields.email}
                    placeholder='Email'
                    keyboardType='email-address'
                    onChangeText={(value) => setFieldValue('email', value.trim().toLowerCase())}
                />
                {errors.email && <TextError text={errors.email} />}
                <Input
                    value={fields.password}
                    placeholder='Contraseña'
                    keyboardType='default'
                    secureTextEntry
                    onChangeText={(value) => setFieldValue('password', value)}
                />
                {errors.password && <TextError text={errors.password} />}
                <Input
                    maxLength={8}
                    value={fields.token}
                    placeholder='Clave de Invitación'
                    keyboardType='number-pad'
                    onChangeText={(value) => setFieldValue('token', value)}
                />
                {errors.token && <TextError text={errors.token} />}
                <Button title='Registrarse' onPress={handleSubmit} />
            </View>
        </ContainerSafe>
    );
};

export default SignUpScreen;

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'transparent',
        flex: 1,
    },
});
