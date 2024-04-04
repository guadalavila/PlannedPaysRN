import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useEffect, useRef, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import BottomSheetItem from '~components/BottomSheetItem';
import Button from '~components/Button';
import Container from '~components/Container';
import DropdownIcons from '~components/DropdownIcons';
import Goal from '~components/Goal';
import Input from '~components/Input';
import Item from '~components/Item';
import ItemCoin from '~components/ItemCoin';
import PaletteColor from '~components/PaletteColor';
import TextError from '~components/TextError';
import useForm from '~hooks/useForm';
import { IGoal } from '~models/Goal';
import { RootStackLoginParamList } from '~navigations/types';
import { colors } from '~utils/colors';
import { formatMoney } from '~utils/helpers';
import { MOCK_COINS } from '~utils/mock';
import { spacing } from '~utils/spacing';

interface Props extends NativeStackScreenProps<RootStackLoginParamList, 'NewGoalScreen'> {}

const NewGoalScreen = ({ navigation }: Props) => {
    const { handleSubmit, fields, errors, setFieldValue } = useForm('NewGoalForm', () => addGoal());
    const coinRef = useRef();
    const [coin, setCoin] = useState(MOCK_COINS[0]);
    const [amount, setAmount] = useState<any>(0);

    useEffect(() => {
        setFieldValue('coin', MOCK_COINS[0]);
    }, []);

    const addGoal = () => {
        const goal: IGoal = {
            date: new Date(),
            title: fields.title,
            description: fields.description,
            amountTotal: fields.amountTotal,
            saved: 0,
            coin: fields.coin,
            icon: fields.icon,
            color: fields.color,
        };
        console.log(goal);
    };

    return (
        <Container>
            <View style={{ height: 20 }} />
            <Goal
                icon={fields.icon ?? 'rocket-outline'}
                title={fields.title ?? ''}
                amountTotal={fields.amountTotal}
                color={fields.color}
            />

            <Input
                value={fields.title}
                placeholder='Título'
                keyboardType='default'
                onChangeText={(value) => setFieldValue('title', value)}
            />
            {errors.title && <TextError text={errors.title} />}
            <Input
                value={fields.description}
                placeholder='Descripción'
                keyboardType='default'
                onChangeText={(value) => setFieldValue('description', value)}
            />
            {errors.description && <TextError text={errors.description} />}
            <Input
                value={amount}
                placeholder='Monto'
                keyboardType='number-pad'
                onChangeText={(value) => {
                    if (typeof Number(value) === 'number') {
                        setFieldValue('amountTotal', value);
                        const numericValue = parseFloat(value.replace(/[^\d.]/g, ''));
                        if (!isNaN(numericValue)) {
                            const formattedValue = new Intl.NumberFormat('en-US').format(numericValue);
                            setAmount('$' + formattedValue);
                        } else {
                            setAmount('$' + value);
                        }
                    }
                }}
            />
            {errors.amountTotal && <TextError text={errors.amountTotal} />}
            <Item
                icon={'cash-outline'}
                text={'Moneda: ' + coin.label}
                color={colors.light.primaryDark}
                onPress={() => {
                    //@ts-ignore
                    coinRef.current.show();
                }}
                style={styles.containerItem}
            />
            {errors.coin && <TextError text={errors.coin} />}
            <DropdownIcons onSelect={(icon) => setFieldValue('icon', icon)} />
            {errors.icon && <TextError text={errors.icon} />}
            <PaletteColor style={styles.containerPalette} onSelect={(color) => setFieldValue('color', color)} />
            {errors.color && <TextError text={errors.color} />}
            <BottomSheetItem refBottomSheet={coinRef} height={MOCK_COINS.length * 45}>
                {MOCK_COINS.map((item) => {
                    return (
                        <ItemCoin
                            key={item.id}
                            coin={item}
                            selected={coin === item}
                            onPress={() => {
                                setCoin(item);
                                //@ts-ignore
                                coinRef.current.close();
                            }}
                        />
                    );
                })}
            </BottomSheetItem>
            <Button title='Crear Objetivo' onPress={handleSubmit} />
        </Container>
    );
};

export default NewGoalScreen;

const styles = StyleSheet.create({
    containerPalette: {
        marginHorizontal: spacing.L,
    },
    containerItem: {
        marginVertical: spacing.S,
        marginHorizontal: spacing.L,
    },
});
