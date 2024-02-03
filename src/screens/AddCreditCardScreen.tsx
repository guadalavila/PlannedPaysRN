import React from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { ScrollView, View } from 'react-native';
import { RootStackLoginParamList } from '~navigations/types';
import Container from '~components/Container';
import Input from '~components/Input';
import Button from '~components/Button';
import Dropdown from '~components/Dropdown';
import CreditCard from '~components/CreditCard';
import useForm from '~hooks/useForm';
import TextError from '~components/TextError';

interface Props extends NativeStackScreenProps<RootStackLoginParamList, 'AddCreditCardScreen'> {}

const AddCreditCardScreen = ({}: Props) => {
    const { fields, setFieldValue, handleSubmit, errors } = useForm('NewCreditCard', () => console.log(fields));

    return (
        <Container>
            <ScrollView showsVerticalScrollIndicator={false}>
                <CreditCard name={fields.name} card={fields.card} />
                <View style={{ height: 20 }} />
                <Dropdown
                    placeholder='Seleccione Tarjeta'
                    onSelectCard={(cardSelected) => setFieldValue('card', cardSelected)}
                />
                <TextError text={errors.card} />
                <Input
                    maxLength={25}
                    value={fields.name}
                    placeholder='Nombre'
                    keyboardType='default'
                    onChangeText={(value) => setFieldValue('name', value)}
                />
                <TextError text={errors.name} />
                <Input
                    value={fields.description}
                    placeholder='Descripción'
                    keyboardType='default'
                    isTextArea
                    onChangeText={(value) => setFieldValue('description', value)}
                />
                <TextError text={errors.description} />
                <Button title='Agregar' onPress={handleSubmit} />
            </ScrollView>
        </Container>
    );
};

export default AddCreditCardScreen;
