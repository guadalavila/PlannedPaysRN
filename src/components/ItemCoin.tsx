import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { ICoin } from '~models/Coin';
import { GlobalStyles } from '~utils/styles';
import Text from './Text';
import { typography } from '~utils/typography';
import { spacing } from '~utils/spacing';
import { colors } from '~utils/colors';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

interface ItemCoinProps {
    coin: ICoin;
    onPress: () => void;
    selected?: boolean;
}

const ItemCoin = ({ coin, onPress, selected }: ItemCoinProps) => {
    return (
        <TouchableOpacity style={[styles.container, GlobalStyles.row]} activeOpacity={0.7} onPress={onPress}>
            <Text style={styles.label}>{coin.label}</Text>
            <Text style={styles.symbol}>{coin.codeISO}</Text>
            {selected && (
                <View style={styles.containerIcon}>
                    <Icon name={'checkmark-outline'} size={24} color={colors.light.success} />
                </View>
            )}
        </TouchableOpacity>
    );
};

export default ItemCoin;

const styles = StyleSheet.create({
    container: {
        marginHorizontal: spacing.L,
        paddingVertical: spacing.M,
        paddingHorizontal: spacing.M,
        borderBottomColor: colors.light.separator,
        borderBottomWidth: 0.3,
    },
    symbol: {
        fontWeight: 'bold',
        fontSize: typography.size.M,
        marginLeft: spacing.L,
    },
    label: {
        alignSelf: 'center',
        textAlign: 'center',
    },
    containerIcon: {
        position: 'absolute',
        end: 10,
        alignSelf: 'center',
    },
});
