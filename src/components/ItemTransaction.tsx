import React from 'react';
import { StyleSheet, View } from 'react-native';
import Text from './Text';
import { GlobalStyles } from '~utils/styles';
import { spacing } from '~utils/spacing';
import { ITransaction } from '~models/Transaction';
import { colors } from '~utils/colors';
import Title from './Title';
import IconRound from './IconRound';

interface ItemTransactionProps {
    transaction: ITransaction;
}

const ItemTransaction = ({ transaction }: ItemTransactionProps) => {
    const { category, cuota, reference, amount } = transaction;
    console.log(category);
    return (
        <View style={[styles.container, GlobalStyles.row]}>
            <View style={GlobalStyles.row}>
                <IconRound iconName={category.icon} background={category.color} />
                <View style={{ marginHorizontal: spacing.M }}>
                    <Title text={reference} />
                    <Text style={styles.cuota}>{cuota.label}</Text>
                    <Text style={{ marginHorizontal: spacing.S }}>22/01/2024</Text>
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
        marginVertical: spacing.L,
        justifyContent: 'space-between',
        borderBottomWidth: 1,
        borderBottomColor: colors.light.separator,
        paddingBottom: spacing.S,
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
