import React, { useContext } from 'react';
import { StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Text from './Text';
import { colors } from '~utils/colors';
import { spacing } from '~utils/spacing';
import { ThemeContext } from '~contexts/ThemeContext';

interface ButtonProps {
    title: string;
    onPress: () => void;
    outlined?: boolean;
    disabled?: boolean;
}
const Button = ({ title, onPress, outlined = false, disabled = false }: ButtonProps) => {
    const { theme } = useContext(ThemeContext);
    return (
        <>
            {!outlined ? (
                <TouchableOpacity disabled={disabled} activeOpacity={0.7} onPress={onPress} style={styles.button}>
                    <Text style={styles.title}>{title}</Text>
                </TouchableOpacity>
            ) : (
                <TouchableOpacity disabled={disabled} activeOpacity={0.7} onPress={onPress} style={styles.outlined}>
                    <Text style={theme === 'dark' ? styles.titleOutlined : styles.titleOutlinedLight}>{title}</Text>
                </TouchableOpacity>
            )}
        </>
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
    outlined: {
        borderColor: colors.light.primary,
        marginVertical: spacing.L,
        marginHorizontal: spacing.S,
        borderRadius: spacing.S,
    },
    titleOutlined: {
        color: colors.dark.primary,
        fontWeight: '700',
        textAlign: 'center',
        paddingVertical: spacing.XL,
    },
    titleOutlinedLight: {
        color: colors.light.black,
        fontWeight: '700',
        textAlign: 'center',
        paddingVertical: spacing.XL,
    },
});
