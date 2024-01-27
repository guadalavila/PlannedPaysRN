import React from 'react';
import { StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Text from './Text';
import { colors } from '~utils/colors';
import { spacing } from '~utils/spacing';

interface ButtonProps {
    title: string;
    onPress: () => void;
}
const Button = ({ title, onPress }: ButtonProps) => {
    return (
        <TouchableOpacity activeOpacity={0.7} onPress={onPress} style={styles.button}>
            <Text style={styles.title}>{title}</Text>
        </TouchableOpacity>
    );
};

export default Button;

const styles = StyleSheet.create({
    button: {
        backgroundColor: colors.light.primary,
        marginVertical: spacing.L,
        marginHorizontal: spacing.S,
        borderRadius: spacing.S,
    },
    title: {
        color: colors.light.white,
        fontWeight: '700',
        textAlign: 'center',
        paddingVertical: spacing.XL,
    },
});
