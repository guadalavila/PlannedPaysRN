import React, { useContext, useEffect } from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { StyleSheet, View } from 'react-native';
import { DrawerStackList } from '~navigations/types';
import Container from '~components/Container';
import useAuth from '~hooks/useAuth';
import Input from '~components/Input';
import Text from '~components/Text';
import { colors } from '~utils/colors';
import { spacing } from '~utils/spacing';
import { typography } from '~utils/typography';
import Button from '~components/Button';
import useForm from '~hooks/useForm';
import TextError from '~components/TextError';
import Select from '~components/Select';
import { ThemeContext } from '~contexts/ThemeContext';
import Header from '~components/Header';

interface Props extends NativeStackScreenProps<DrawerStackList, 'SettingsScreen'> {}

const SettingsScreen = ({}: Props) => {
    const { user, update } = useAuth();
    const { fields, errors, handleSubmit, setFieldValue } = useForm('UpdateUser', () => doUpdate());
    const { setTheme, theme } = useContext(ThemeContext);

    useEffect(() => {
        setFieldValue('name', user.name);
        setFieldValue('lastName', user.lastName);
    }, []);

    const doUpdate = () => {
        update(fields.name, fields.lastName);
    };
    return (
        <Container>
            <Header title='Configuración' />
            <View style={styles.avatar}>
                <Text style={styles.textAvatar}>
                    {user.name.charAt(0).toUpperCase()}
                    {user.lastName.charAt(0).toUpperCase()}
                </Text>
            </View>
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
                editable={false}
                value={user.email}
                placeholder='Email'
                keyboardType='default'
                onChangeText={(value) => {}}
            />
            <Select title={'Modo Oscuro'} selected={theme === 'dark'} onChangeSelect={setTheme} />
            <Button onPress={handleSubmit} title='Guardar' />
        </Container>
    );
};

export default SettingsScreen;

const styles = StyleSheet.create({
    avatar: {
        marginVertical: spacing.XXL,
        alignSelf: 'center',
        width: 100,
        height: 100,
        borderRadius: 100,
        backgroundColor: colors.light.primary,
        position: 'relative',
        justifyContent: 'center',
    },
    textAvatar: {
        color: colors.light.white,
        fontWeight: 'bold',
        fontSize: typography.size.XXXL,
        alignSelf: 'center',
    },
});
