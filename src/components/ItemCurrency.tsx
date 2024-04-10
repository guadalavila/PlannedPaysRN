import React, { useContext } from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { ThemeContext } from '~contexts/ThemeContext';
import { colors } from '~utils/colors';
import { spacing } from '~utils/spacing';
import { GlobalStyles } from '~utils/styles';
import { Currency } from '~utils/types/Currency';
import Text from './Text';
import { typography } from '~utils/typography';

interface ItemCurrencyProps {
    currency: Currency;
    onSelected: (c: Currency) => void;
    selected?: boolean;
    showBorder?: boolean;
}

const ItemCurrency = ({ currency, onSelected, showBorder = false, selected = false }: ItemCurrencyProps) => {
    const { themeApp } = useContext(ThemeContext);

    return (
        <TouchableOpacity
            onPress={() => onSelected(currency)}
            activeOpacity={0.7}
            style={[
                styles.item,
                GlobalStyles.row,
                { backgroundColor: themeApp.colors.bgInput },
                showBorder ? styles.border : null,
                selected ? { backgroundColor: themeApp.colors.background } : {},
            ]}>
            <Text>{currency.label}</Text>
            <Text style={styles.currency}>{currency.currency}</Text>
        </TouchableOpacity>
    );
};

export default ItemCurrency;

const styles = StyleSheet.create({
    item: {
        paddingHorizontal: spacing.L,
        paddingVertical: spacing.XL,
        // borderRadius: 10,
        justifyContent: 'space-between',
    },
    border: {
        borderBottomWidth: 0.5,
        borderBottomColor: colors.light.separator,
    },
    currency: {
        color: colors.light.primary,
        fontWeight: 'bold',
        fontSize: typography.size.M,
    },
});
