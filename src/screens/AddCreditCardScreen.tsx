import React, { useEffect, useState } from 'react';
import { FlatList, ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native';
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

const AddCreditCardScreen = ({ navigation, route }: Props) => {
    const { fields, setFieldValue, handleSubmit, errors } = useForm('NewCreditCard', () => addOrEdit());
    const [gradientSelected, setGradientSelected] = useState(GRADIENT_COLORS[0]);
    const [card, setCard] = useState<ICreditCard | undefined>(undefined);
    const { addCreditCard, updateCreditCard } = useCreditCard();

    useEffect(() => {
        setFieldValue('colors', gradientSelected);
        const card = route.params?.card ?? undefined;
        console.log(card);
        card && setValues(card);
    }, []);

    const setValues = (card: ICreditCard) => {
        setCard(card);
        setFieldValue('name', card.name);
        setFieldValue('number', card.number);
        setFieldValue('card', card.card);
        setFieldValue('email', card.email);
        setFieldValue('description', card.description);
        setGradientSelected(card.colors);
        setFieldValue('colors', card.colors);
    };

    const addOrEdit = () => {
        if (card === undefined) {
            addCreditCard({ ...fields } as ICreditCard).then((id) => {});
        } else {
            updateCreditCard(card);
        }
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
                {card === undefined && (
                    <>
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
                    </>
                )}
                <Input
                    maxLength={25}
                    value={fields.name}
                    placeholder='Nombre'
                    keyboardType='default'
                    onChangeText={(value) => setFieldValue('name', value.toUpperCase())}
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
                    onChangeText={(value) => setFieldValue('description', value)}
                />
                <Button title={card === undefined ? 'Agregar' : 'Editar'} onPress={handleSubmit} />
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
    dropdown: {
        borderRadius: 8,
        position: 'relative',
        marginHorizontal: spacing.L,
        backgroundColor: 'white',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        marginBottom: spacing.M,
    },
});
