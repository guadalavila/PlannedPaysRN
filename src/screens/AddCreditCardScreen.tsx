import React from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { View } from 'react-native';
import { RootStackLoginParamList } from '~navigations/types';
import Container from '~components/Container';
import Input from '~components/Input';
import Button from '~components/Button';
import Dropdown from '~components/Dropdown';

interface Props extends NativeStackScreenProps<RootStackLoginParamList, 'AddCreditCardScreen'> {}

const AddCreditCardScreen = ({}: Props) => {
    return (
        <Container>
            <View style={{ height: 20 }} />
            <Dropdown placeholder='Seleccione Tarjeta' />
            <Input label='Marca' placeholder='Ingrese ' />
            <Input label='Descripción' placeholder='Ingrese ' />
            <Button title='Agregar' onPress={() => {}} />
        </Container>
    );
};

export default AddCreditCardScreen;
