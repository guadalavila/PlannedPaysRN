import React, { useContext, useEffect, useRef, useState } from 'react';
import { ScrollView, View } from 'react-native';
import { StyleSheet, TextInput } from 'react-native';
import Button from '~components/Button';
import Container from '~components/Container';
import Input from '~components/Input';
import TextError from '~components/TextError';
import useForm from '~hooks/useForm';
import { colors } from '~utils/colors';
import { spacing } from '~utils/spacing';
//@ts-ignore
import { CUOTAS } from '~utils/mock';
import ItemCuotas from '~components/ItemCuotas';
import { RemoteConfigContext } from '~contexts/RemoteConfigContext';
import Item from '~components/Item';
import { ICategory } from '~models/Category';
import { ICuota } from '~models/Cuota';
import { DrawerStackList } from '~navigations/types';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { ICreditCard } from '~models/CreditCard';
import CreditCard from '~components/CreditCard';
import { ThemeContext } from '~contexts/ThemeContext';
import BottomSheetItem from '~components/BottomSheetItem';
import ItemDate from '~components/ItemDate';
import useCreditCard from '~hooks/useCreditCard';
import { ITransaction } from '~models/Transaction';

interface Props extends NativeStackScreenProps<DrawerStackList, 'AddTransactionScreen'> {}
const AddTransactionScreen = ({ route }: Props) => {
    const { fields, handleSubmit, errors, setFieldValue } = useForm('AddTransactionForm', () => saveTransaction());
    const [text, setText] = useState('');
    const { categories } = useContext(RemoteConfigContext);
    const bottomSheetCuotas = useRef();
    const bottomSheetCategories = useRef();
    const [selectedCategory, setSelectedCategory] = useState<ICategory>(categories[0]);
    const [cuotasSelected, setCuotasSelected] = useState<ICuota>(CUOTAS[0]);
    const [card, setCard] = useState<ICreditCard>();
    const { themeApp } = useContext(ThemeContext);
    const { addTransaction } = useCreditCard();

    useEffect(() => {
        setCard(route.params.card);
        setFieldValue('card', route.params.card.id);
        setFieldValue('cuota', CUOTAS[0]);
        setFieldValue('category', categories[0]);
        setFieldValue('date', new Date());
    }, []);

    const onChangeText = (value: string) => {
        setFieldValue('amount', value);
        if (!text.includes('$')) {
            setText('$' + value);
        } else {
            setText(value);
        }
    };

    const saveTransaction = () => {
        const trx: ITransaction = {
            date: fields.date,
            amount: fields.amount.replace('$', ''),
            reference: fields.reference,
            description: fields.description ?? '',
            cuota: fields.cuota,
            category: fields.category,
            cardId: fields.card,
        };
        console.log({ trx });
        addTransaction(trx).then((x) => console.log(x));
    };
    return (
        <Container>
            <ScrollView showsVerticalScrollIndicator={false}>
                {card && (
                    <CreditCard colorsCard={card.colors} name={card.name} card={card.card} numbers={card.number} />
                )}
                <ItemDate placeholder='Fecha de Gasto' onChangeValue={(value) => setFieldValue('date', value)} />
                {errors.date && <TextError text={errors.date} />}
                <Input
                    value={text}
                    placeholder='Monto'
                    keyboardType='number-pad'
                    onChangeText={(value) => onChangeText(value)}
                />
                {errors.amount && <TextError text={errors.amount} />}
                <Input
                    value={fields.reference}
                    placeholder='Referencia'
                    onChangeText={(value) => setFieldValue('reference', value)}
                />
                {errors.reference && <TextError text={errors.reference} />}
                <Input
                    value={fields.description}
                    placeholder='Descripción'
                    isTextArea
                    keyboardType='default'
                    onChangeText={(value) => setFieldValue('description', value)}
                />
                <Item
                    icon={'wallet-outline'}
                    text={'Cuotas: ' + cuotasSelected.value}
                    //@ts-ignore
                    onPress={() => bottomSheetCuotas.current.show()}
                    style={styles.containerItem}
                />
                <Item
                    icon={selectedCategory.icon}
                    text={'Categoria: ' + selectedCategory.label}
                    color={selectedCategory.color}
                    //@ts-ignore
                    onPress={() => bottomSheetCategories.current.show()}
                    style={styles.containerItem}
                />
                <BottomSheetItem refBottomSheet={bottomSheetCategories} height={categories.length * 58}>
                    {categories.map((item, index) => {
                        return (
                            <Item
                                showBorder={index === categories.length - 1 ? false : true}
                                color={item.color}
                                key={item.id}
                                icon={item.icon}
                                text={item.label}
                                selected={selectedCategory === item}
                                onPress={() => {
                                    setSelectedCategory(item);
                                    setFieldValue('category', item);
                                    //@ts-ignore
                                    bottomSheetCategories.current.close();
                                }}
                            />
                        );
                    })}
                </BottomSheetItem>
                <BottomSheetItem refBottomSheet={bottomSheetCuotas} height={CUOTAS.length * 50}>
                    {CUOTAS.map(({ label, code, value }) => {
                        return (
                            <ItemCuotas
                                key={code}
                                label={label}
                                selected={code === cuotasSelected.code}
                                onPress={() => {
                                    setCuotasSelected({ label, code, value });
                                    setFieldValue('cuota', { label, code, value });
                                    //@ts-ignore
                                    bottomSheetCuotas.current.close();
                                }}
                            />
                        );
                    })}
                </BottomSheetItem>
                <Button title='Guardar' onPress={handleSubmit} />
            </ScrollView>
        </Container>
    );
};

export default AddTransactionScreen;

const styles = StyleSheet.create({
    containerItem: {
        marginVertical: spacing.S,
        marginHorizontal: spacing.L,
    },
    amountInput: {
        fontSize: 50,
        textAlign: 'center',
        marginVertical: 10,
        paddingVertical: 20,
        backgroundColor: 'white',
        marginHorizontal: spacing.L,
        borderRadius: 10,
    },
});
