import React, { useEffect, useState } from 'react';
import { FlatList, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackLoginParamList } from '~navigations/types';
import Container from '~components/Container';
import Input from '~components/Input';
import Button from '~components/Button';
import Dropdown from '~components/Dropdown';
import CreditCard from '~components/CreditCard';
import useForm from '~hooks/useForm';
import TextError from '~components/TextError';
import useCreditCard from '~hooks/useCreditCard';
import { ICreditCard } from '~models/CreditCard';
import LinearGradient from 'react-native-linear-gradient';
import { GRADIENT_COLORS } from '~utils/mock';
import { GlobalStyles } from '~utils/styles';
import { spacing } from '~utils/spacing';
import Icon from 'react-native-vector-icons/Ionicons';
import { colors } from '~utils/colors';

interface Props extends NativeStackScreenProps<RootStackLoginParamList, 'AddCreditCardScreen'> {}

const AddCreditCardScreen = ({ navigation }: Props) => {
    const { fields, setFieldValue, handleSubmit, errors } = useForm('NewCreditCard', () => add());
    const { addCreditCard } = useCreditCard();
    const [gradientSelected, setGradientSelected] = useState(GRADIENT_COLORS[0]);

    useEffect(() => {
        setFieldValue('colors', gradientSelected);
    }, []);

    const add = () => {
        addCreditCard({ ...fields } as ICreditCard).then((id) => {
            // navigation.goBack();
        });
    };

    return (
        <Container>
            <ScrollView showsVerticalScrollIndicator={false}>
                <CreditCard
                    name={fields.name}
                    colorsCard={gradientSelected}
                    card={fields.card}
                    numbers={fields.number}
                />
                <FlatList
                    showsHorizontalScrollIndicator={false}
                    horizontal
                    data={GRADIENT_COLORS}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item, index }) => (
                        <TouchableOpacity
                            activeOpacity={0.7}
                            onPress={() => {
                                setGradientSelected(GRADIENT_COLORS[index]);
                                setFieldValue('colors', GRADIENT_COLORS[index]);
                            }}>
                            <LinearGradient
                                style={styles.listColors}
                                start={{ x: 0.3, y: 0 }}
                                end={{ x: 0.5, y: 1 }}
                                colors={item}>
                                {item === gradientSelected && (
                                    <Icon
                                        style={GlobalStyles.alignSelf}
                                        name='checkmark'
                                        color={colors.light.white}
                                        size={24}
                                    />
                                )}
                            </LinearGradient>
                        </TouchableOpacity>
                    )}
                />
                <Dropdown
                    placeholder='Seleccione Tarjeta'
                    onSelectCard={(cardSelected) => setFieldValue('card', cardSelected)}
                />
                {errors.card && <TextError text={errors.card} />}
                <Input
                    maxLength={25}
                    value={fields.name}
                    placeholder='Nombre'
                    keyboardType='default'
                    onChangeText={(value) => setFieldValue('name', value)}
                />
                {errors.name && <TextError text={errors.name} />}
                <Input
                    maxLength={2}
                    value={fields.number}
                    placeholder='Últimos 2 números'
                    keyboardType='number-pad'
                    onChangeText={(value) => setFieldValue('number', value)}
                />
                {errors.number && <TextError text={errors.number} />}
                <Input
                    value={fields.description}
                    placeholder='Descripción'
                    keyboardType='default'
                    isTextArea
                    onChangeText={(value) => setFieldValue('description', value)}
                />
                <Button title='Agregar' onPress={handleSubmit} />
            </ScrollView>
        </Container>
    );
};

export default AddCreditCardScreen;

const styles = StyleSheet.create({
    listColors: {
        margin: spacing.L,
        width: 40,
        height: 40,
        justifyContent: 'center',
        borderRadius: 10,
    },
});
