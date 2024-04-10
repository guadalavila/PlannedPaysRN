import React, { useContext, useEffect, useRef } from 'react';
import { StyleSheet } from 'react-native';
import AmountInput from '~components/AmountInput';
import BottomSheetItem from '~components/BottomSheetItem';
import Container from '~components/Container';
import Header from '~components/Header';
import Input from '~components/Input';
import Item from '~components/Item';
import ItemCurrency from '~components/ItemCurrency';
import { RemoteConfigContext } from '~contexts/RemoteConfigContext';
import useForm from '~hooks/useForm';
import { ISubCategory } from '~models/Category';
import { CURRENCY_LIST } from '~utils/mock';
import { spacing } from '~utils/spacing';

const EditBillScreen = ({ route }) => {
    const { fields, handleSubmit, errors, setFieldValue } = useForm('EditBill', () => {});
    const refCategories = useRef();
    const refCurrency = useRef();
    const refSubCategories = useRef();
    const { categories, subCategories } = useContext(RemoteConfigContext);

    useEffect(() => {
        setFieldValue('amount', route.params.bill.amount);
        setFieldValue('comment', route.params.bill.comment);
        setFieldValue('category', route.params.bill.category);
        setFieldValue('currency', route.params.bill.currency);
    }, []);

    useEffect(() => {
        console.log(fields);
    }, [fields]);

    return (
        <Container>
            <Header title='Editar Gasto' showBack />
            {fields.currency && (
                <>
                    <AmountInput
                        value={fields.amount}
                        onChangeValue={(value) => setFieldValue('amount', value)}
                        currency={fields.currency}
                        //@ts-ignore
                        onChangeCurrency={() => refCurrency.current.show()}
                    />
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
                                        // handleSubCategory(item);
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
            {fields.category && fields.category.subCategory && (
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
                    <BottomSheetItem refBottomSheet={refSubCategories} height={400}>
                        {subCategories[fields.category.id].map((item: ISubCategory, index: number) => {
                            return (
                                <Item
                                    showBorder={index === subCategories[fields.category.id].length - 1 ? false : true}
                                    showIcon={false}
                                    key={item.id}
                                    text={item.label}
                                    selected={fields.category.subCategory.id === item.id}
                                    onPress={() => {
                                        setFieldValue('category', { ...fields.category, subCategory: item });
                                        //@ts-ignore
                                        refSubCategories.current.close();
                                    }}
                                />
                            );
                        })}
                    </BottomSheetItem>
                </>
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
