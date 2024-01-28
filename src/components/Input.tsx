import React, { useState } from 'react';
import { KeyboardType, StyleSheet, View } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { colors } from '~utils/colors';
import { spacing } from '~utils/spacing';
import Text from './Text';
import { typography } from '~utils/typography';

interface InputProps {
    label: string;
    placeholder: string;
    type?: KeyboardType;
    textArea?: boolean;
}

const Input = ({ label, placeholder, type = 'default', textArea = false }: InputProps) => {
    const [text, onChangeText] = useState('');
    return (
        <View>
            <Text style={styles.text}>{label}</Text>
            <TextInput
                style={styles.input}
                onChangeText={onChangeText}
                value={text}
                placeholder={placeholder}
                keyboardType={type}
                placeholderTextColor={colors.light.primary}
            />
        </View>
    );
};

export default Input;

const styles = StyleSheet.create({
    input: {
        margin: spacing.L,
        borderRadius: 10,
        padding: spacing.XL,
        // borderWidth: 0.4,
        // borderColor: colors.light.primary,
        backgroundColor: colors.light.white,
    },
    text: {
        marginHorizontal: spacing.XL,
        fontSize: typography.size.S,
        color: colors.light.primary,
        fontWeight: '500',
    },
});
