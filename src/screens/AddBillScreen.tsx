import React, { useContext, useEffect, useRef } from 'react';
import { StyleSheet } from 'react-native';
import Button from '~components/Button';
import Container from '~components/Container';
import Header from '~components/Header';
import Input from '~components/Input';
import BottomSheetItem from '~components/BottomSheetItem';
import { RemoteConfigContext } from '~contexts/RemoteConfigContext';
import Item from '~components/Item';
import { ISubCategory } from '~models/Category';
import { spacing } from '~utils/spacing';
import ItemDate from '~components/ItemDate';
import { typography } from '~utils/typography';
import { colors } from '~utils/colors';
import AmountInput from '~components/AmountInput';
import { CURRENCY_LIST } from '~utils/mock';
import ItemCurrency from '~components/ItemCurrency';
import useForm from '~hooks/useForm';
import TextError from '~components/TextError';
import useBill from '~hooks/useBill';
import { Bill } from '~models/Bill';
import Loading from '~components/Loading';

const AddBillScreen = ({ navigation }) => {
    const refCategories = useRef();
    const refCurrency = useRef();
    const refSubCategories = useRef();
    const { categories, subCategories } = useContext(RemoteConfigContext);
    // const [selectedCategory, setSelectedCategory] = useState<ICategory>(categories[categories.length - 1]);
    const { fields, handleSubmit, errors, setFieldValue } = useForm('AddBill', () => onSaveBill());
    const { addBill, isLoading } = useBill();

    useEffect(() => {
        // default
        setFieldValue('currency', CURRENCY_LIST[2]);
        setFieldValue('date', new Date());
    }, []);

    const onSaveBill = () => {
        const preBill: Bill = {
            amount: fields.amount,
            category: fields.category,
            date: fields.date,
            currency: fields.currency,
            comment: fields.comment,
        };
        addBill(preBill).then(() => {
            navigation.goBack();
        });
    };
    return (
        <Container>
            <Header title='Nuevo Gasto' showBack />
            {isLoading ? (
                <Loading />
            ) : (
                <>
                    <AmountInput
                        value={fields.amount ?? ''}
                        onChangeValue={(value) => setFieldValue('amount', value)}
                        currency={fields.currency ?? CURRENCY_LIST[2]}
                        //@ts-ignore
                        onChangeCurrency={() => refCurrency.current.show()}
                    />
                    {errors.amount && <TextError text={errors.amount} />}
                    <ItemDate placeholder='Fecha de Gasto' onChangeValue={(value) => setFieldValue('date', value)} />
                    <Input
                        value={fields.comment}
                        placeholder='Comentario'
                        keyboardType='default'
                        onChangeText={(value) => setFieldValue('comment', value)}
                    />
                    {errors.comment && <TextError text={errors.comment} />}
                    <Item
                        icon={fields.category?.icon ?? 'albums-outline'}
                        text={fields.category ? `Categoria: ${fields.category.label}` : 'Seleccione Categoria'}
                        color={fields.category ? fields.category.color : '#FFBF00'}
                        //@ts-ignore
                        onPress={() => refCategories.current.show()}
                        style={styles.containerItem}
                    />
                    {errors.category && <TextError text={errors.category} />}
                    {fields.category && subCategories.hasOwnProperty(fields.category.id) && (
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
                            style={styles.containerItem}
                        />
                    )}
                    <Button title='Agregar Gasto' onPress={() => handleSubmit()} />
                </>
            )}
            <BottomSheetItem refBottomSheet={refCategories} height={categories.length * 60}>
                {categories.map((item, index) => {
                    return (
                        <Item
                            showBorder={index === categories.length - 1 ? false : true}
                            color={item.color}
                            key={item.id}
                            icon={item.icon}
                            text={item.label}
                            selected={fields.category ? fields.category.id === item.id : false}
                            onPress={() => {
                                setFieldValue('category', item);
                                //@ts-ignore
                                refCategories.current.close();
                            }}
                        />
                    );
                })}
            </BottomSheetItem>
            {fields.category && subCategories.hasOwnProperty(fields.category.id) && (
                <BottomSheetItem refBottomSheet={refSubCategories} height={300}>
                    {subCategories[fields.category.id].map((item: ISubCategory, index: number) => {
                        return (
                            <Item
                                showBorder={index === subCategories[fields.category.id].length - 1 ? false : true}
                                showIcon={false}
                                key={item.id}
                                text={item.label}
                                selected={fields.category?.subCategory?.id === item.id}
                                onPress={() => {
                                    setFieldValue('category', { ...fields.category, subCategory: item });
                                    //@ts-ignore
                                    refSubCategories.current.close();
                                }}
                            />
                        );
                    })}
                </BottomSheetItem>
            )}
            <BottomSheetItem refBottomSheet={refCurrency} height={CURRENCY_LIST.length * 60}>
                {CURRENCY_LIST.map((item, index) => {
                    return (
                        <ItemCurrency
                            onSelected={() => {
                                setFieldValue('currency', item);
                                //@ts-ignore
                                refCurrency.current.close();
                            }}
                            selected={fields.currency?.id === item.id}
                            currency={item}
                            key={index}
                            showBorder={index === CURRENCY_LIST.length - 1 ? false : true}
                        />
                    );
                })}
            </BottomSheetItem>
        </Container>
    );
};

export default AddBillScreen;

const styles = StyleSheet.create({
    input: {
        width: '40%',
        height: 40,
        margin: 12,
        padding: 10,
        borderBottomWidth: 1,
        fontSize: typography.size.XXL,
        textAlign: 'center',
        borderBottomColor: colors.light.primary,
    },
    containerItem: {
        marginVertical: spacing.S,
        marginHorizontal: spacing.L,
    },
});
