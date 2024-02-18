import React, { useState } from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackLogoutParamList } from '~navigations/types';
import Text from '~components/Text';
import ContainerSafe from '~components/ContainerSafe';
import { StyleSheet } from 'react-native';
import { View } from 'react-native';
import Input from '~components/Input';
import useForm from '~hooks/useForm';
import Button from '~components/Button';
import useAuth from '~hooks/useAuth';
import TextError from '~components/TextError';
// import auth from '@react-native-firebase/auth';

interface Props extends NativeStackScreenProps<RootStackLogoutParamList, 'LoginScreen'> {}

const LoginScreen = ({ navigation }: Props) => {
    const { fields, setFieldValue, handleSubmit, errors } = useForm('LoginForm', () => doLogin());
    const { login } = useAuth();

    const doLogin = () => {
        login(fields.email, fields.password);
    };

    const signUp = () => {
        navigation.navigate('SignUpScreen');
    };

    return (
        <ContainerSafe>
            <View style={styles.container}>
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
                <Button title='¿No tenes cuenta? Registrate' onPress={signUp} outlined />
                <Button title='Ingresar' onPress={handleSubmit} />
            </View>
        </ContainerSafe>
    );
};

export default LoginScreen;

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'transparent',
        flex: 1,
    },
});
