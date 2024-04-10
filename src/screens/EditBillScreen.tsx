import React, { useContext, useEffect, useRef } from 'react';
import { StyleSheet, View } from 'react-native';
import AmountInput from '~components/AmountInput';
import BottomSheetItem from '~components/BottomSheetItem';
import Button from '~components/Button';
import Container from '~components/Container';
import Header from '~components/Header';
import Input from '~components/Input';
import Item from '~components/Item';
import ItemCurrency from '~components/ItemCurrency';
import Loading from '~components/Loading';
import TextError from '~components/TextError';
import { RemoteConfigContext } from '~contexts/RemoteConfigContext';
import useBill from '~hooks/useBill';
import useForm from '~hooks/useForm';
import { IBill } from '~models/Bill';
import { ISubCategory } from '~models/Category';
import { CURRENCY_LIST } from '~utils/mock';
import { spacing } from '~utils/spacing';

const EditBillScreen = ({ route, navigation }) => {
    const { fields, handleSubmit, errors, setFieldValue } = useForm('EditBill', () => doEdit());
    const refCategories = useRef();
    const refCurrency = useRef();
    const refSubCategories = useRef();
    const { isLoading, editBill } = useBill();
    const { categories, subCategories } = useContext(RemoteConfigContext);

    const doEdit = () => {
        const bill: IBill = {
            ...route.params.bill,
            amount: fields.amount,
            category: fields.category,
            currency: fields.currency,
            comment: fields.comment,
        };
        editBill(bill).then(() => {
            navigation.navigate('HomeScreen');
        });
    };

    useEffect(() => {
        setFieldValue('amount', route.params.bill.amount);
        setFieldValue('comment', route.params.bill.comment);
        setFieldValue('category', route.params.bill.category);
        setFieldValue('currency', route.params.bill.currency);
    }, []);

    return (
        <Container>
            <Header title='Editar Gasto' showBack />
            {isLoading ? (
                <Loading />
            ) : (
                <View>
                    {fields.currency && (
                        <>
                            <AmountInput
                                value={fields.amount}
                                onChangeValue={(value) => setFieldValue('amount', value)}
                                currency={fields.currency}
                                //@ts-ignore
                                onChangeCurrency={() => refCurrency.current.show()}
                            />
                            {errors.amount && <TextError text={errors.amount} />}
                            <BottomSheetItem refBottomSheet={refCurrency} height={CURRENCY_LIST.length * 60}>
                                {CURRENCY_LIST.map((item, index) => {
                                    return (
                                        <ItemCurrency
                                            onSelected={() => {
                                                setFieldValue('currency', item);
                                                //@ts-ignore
                                                refCurrency.current.close();
                                            }}
                                            selected={fields.currency.id === item.id}
                                            currency={item}
                                            key={index}
                                            showBorder={index === CURRENCY_LIST.length - 1 ? false : true}
                                        />
                                    );
                                })}
                            </BottomSheetItem>
                        </>
                    )}
                    <Input
                        value={fields.comment}
                        placeholder='Comentario'
                        keyboardType='default'
                        onChangeText={(value) => setFieldValue('comment', value)}
                    />
                    {errors.comment && <TextError text={errors.comment} />}
                    {fields.category && (
                        <>
                            <Item
                                icon={fields.category.icon}
                                text={'Categoria: ' + fields.category.label}
                                color={fields.category.color}
                                //@ts-ignore
                                onPress={() => refCategories.current.show()}
                                style={styles.containerCat}
                            />
                            {errors.category && <TextError text={errors.category} />}
                            <BottomSheetItem refBottomSheet={refCategories} height={categories.length * 60}>
                                {categories.map((item, index) => {
                                    return (
                                        <Item
                                            showBorder={index === categories.length - 1 ? false : true}
                                            color={item.color}
                                            key={item.id}
                                            icon={item.icon}
                                            text={item.label}
                                            selected={fields.category.id === item.id}
                                            onPress={() => {
                                                setFieldValue('category', item);
                                                //@ts-ignore
                                                refCategories.current.close();
                                            }}
                                        />
                                    );
                                })}
                            </BottomSheetItem>
                        </>
                    )}
                    {fields.category && subCategories[fields.category.id].length > 0 && (
                        <>
                            <Item
                                icon={'list'}
                                text={
                                    fields.category.subCategory
                                        ? `Subcategoría: ${fields.category.subCategory.label}`
                                        : 'Subcategoría'
                                }
                                color={'#FFBF00'}
                                //@ts-ignore
                                onPress={() => refSubCategories.current.show()}
                                style={styles.containerCat}
                            />
                            {fields.category.id && (
                                <BottomSheetItem refBottomSheet={refSubCategories} height={400}>
                                    {subCategories[fields.category.id].map((item: ISubCategory, index: number) => {
                                        return (
                                            <Item
                                                showBorder={
                                                    index === subCategories[fields.category.id].length - 1
                                                        ? false
                                                        : true
                                                }
                                                showIcon={false}
                                                key={item.id}
                                                text={item.label}
                                                selected={
                                                    fields.category.subCategory
                                                        ? fields.category.subCategory.id === item.id
                                                        : false
                                                }
                                                onPress={() => {
                                                    setFieldValue('category', {
                                                        ...fields.category,
                                                        subCategory: item,
                                                    });
                                                    //@ts-ignore
                                                    refSubCategories.current.close();
                                                }}
                                            />
                                        );
                                    })}
                                </BottomSheetItem>
                            )}
                        </>
                    )}
                    <Button title='Editar Gasto' onPress={() => handleSubmit()} />
                </View>
            )}
        </Container>
    );
};

export default EditBillScreen;

const styles = StyleSheet.create({
    containerCat: {
        marginHorizontal: spacing.L,
    },
});
