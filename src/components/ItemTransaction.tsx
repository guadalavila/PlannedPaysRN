import React, { useContext } from 'react';
import { StyleSheet, View } from 'react-native';
import Text from './Text';
import { GlobalStyles } from '~utils/styles';
import { spacing } from '~utils/spacing';
import { ITransaction } from '~models/Transaction';
import Title from './Title';
import IconRound from './IconRound';
import { ThemeContext } from '~contexts/ThemeContext';

interface ItemTransactionProps {
    transaction: ITransaction;
}

const ItemTransaction = ({ transaction }: ItemTransactionProps) => {
    const { category, cuota, reference, amount } = transaction;
    const { themeApp } = useContext(ThemeContext);
    return (
        <View style={[styles.container, GlobalStyles.row, { backgroundColor: themeApp.colors.bgCard }]}>
            <View style={GlobalStyles.row}>
                <View style={GlobalStyles.alignSelf}>
                    <IconRound iconName={category.icon} background={category.color} />
                </View>
                <View style={{ marginHorizontal: spacing.M }}>
                    <Title text={reference} />
                    <Text style={{ marginHorizontal: spacing.S }}>22/01/2024</Text>
                    <Text style={styles.cuota}>{cuota.label}</Text>
                </View>
            </View>
            <View style={GlobalStyles.alignSelf}>
                <Title text={`$${amount}`} />
            </View>
        </View>
    );
};

export default ItemTransaction;

const styles = StyleSheet.create({
    container: {
        marginVertical: spacing.XS,
        justifyContent: 'space-between',
        paddingBottom: spacing.XS,
        borderRadius: 10,
        paddingHorizontal: spacing.XS,
    },
    category: {
        borderRadius: 10,
        marginHorizontal: spacing.L,
        width: 30,
        height: 30,
        backgroundColor: 'red',
    },
    avatar: {
        width: 40,
        height: 40,
        borderRadius: 40,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
    },
    cuota: {
        marginHorizontal: spacing.S,
        marginBottom: spacing.XS,
    },
});
