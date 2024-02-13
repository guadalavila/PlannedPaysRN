import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { spacing } from '~utils/spacing';
import { colors } from '~utils/colors';
import { formatDate } from '~utils/helpers';
import Text from './Text';

interface ICardDateProps {
    label: string;
    date: Date;
    isSelected: boolean;
    onSelected: () => void;
}

const CardDate = ({ label, date, onSelected, isSelected }: ICardDateProps) => {
    return (
        <TouchableOpacity
            onPress={onSelected}
            activeOpacity={0.7}
            style={[styles.button, isSelected ? styles.buttonSelected : styles.buttonNoSelected]}>
            <Text style={[isSelected ? styles.textSelected : styles.text]}>{label}</Text>
            <Text style={[isSelected ? styles.dateSelected : styles.date]}>{formatDate(date)}</Text>
        </TouchableOpacity>
    );
};

export default CardDate;

const styles = StyleSheet.create({
    button: {
        borderRadius: 8,
        paddingHorizontal: spacing.XL,
        marginVertical: spacing.L,
        marginHorizontal: spacing.M,
    },
    buttonSelected: {
        backgroundColor: colors.light.primaryDark,
    },
    buttonNoSelected: {
        backgroundColor: colors.light.grey,
    },
    text: {
        textAlign: 'center',
        marginBottom: spacing.M,
        color: colors.light.white,
    },
    textSelected: {
        textAlign: 'center',
        marginBottom: spacing.M,
        color: colors.light.white,
        fontWeight: 'bold',
    },
    date: {
        color: colors.light.white,
        fontWeight: 'bold',
        marginBottom: spacing.L,
    },
    dateSelected: {
        color: colors.light.white,
        fontWeight: 'bold',
        marginBottom: spacing.L,
    },
});
