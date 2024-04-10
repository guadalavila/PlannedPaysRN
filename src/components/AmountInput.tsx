import React, { useContext } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { ThemeContext } from '~contexts/ThemeContext';
import { colors } from '~utils/colors';
import { spacing } from '~utils/spacing';
import { GlobalStyles } from '~utils/styles';
import { Currency } from '~utils/types/Currency';
import { typography } from '~utils/typography';

interface IAmountInputProps {
    onChangeCurrency: () => void;
    currency: Currency;
    value: number;
    onChangeValue: (value: number) => void;
}

const AmountInput = ({ onChangeCurrency, currency, onChangeValue, value }: IAmountInputProps) => {
    // const [number, setNumber] = React.useState(value);
    const { themeApp } = useContext(ThemeContext);

    return (
        <View style={[styles.container]}>
            <TextInput
                focusable
                style={[styles.input, { color: themeApp.colors.textInput }]}
                onChangeText={(data) => {
                    // setNumber(value);
                    onChangeValue(Number(data));
                }}
                value={String(value)}
                placeholder=''
                keyboardType='numeric'
            />
            <TouchableOpacity style={GlobalStyles.alignSelf} activeOpacity={0.7} onPress={onChangeCurrency}>
                <Text style={styles.currency}>{currency.currency}</Text>
            </TouchableOpacity>
        </View>
    );
};

export default AmountInput;

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
    container: {
        alignSelf: 'center',
        flexDirection: 'row',
        marginVertical: spacing.XL,
    },
    currency: {
        fontSize: typography.size.XXL,
        alignSelf: 'center',
        color: colors.light.primary,
    },
});
