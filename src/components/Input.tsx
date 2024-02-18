import React, { useContext, useState } from 'react';
import { KeyboardType, StyleSheet, TouchableOpacity, View } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { colors } from '~utils/colors';
import { spacing } from '~utils/spacing';
import Text from './Text';
import { typography } from '~utils/typography';
import Icon from 'react-native-vector-icons/Ionicons';
import { ThemeContext } from '~contexts/ThemeContext';

interface InputProps {
    value: string;
    placeholder: string;
    helperText?: string;
    isTextArea?: boolean;
    required?: boolean;
    onChangeText: (value: string) => void;
    secureTextEntry?: boolean;
    keyboardType?: KeyboardType;
    editable?: boolean;
    autocomplete?:
        | 'birthdate-day'
        | 'birthdate-full'
        | 'birthdate-month'
        | 'birthdate-year'
        | 'cc-csc'
        | 'cc-exp'
        | 'cc-exp-day'
        | 'cc-exp-month'
        | 'cc-exp-year'
        | 'cc-number'
        | 'email'
        | 'gender'
        | 'name'
        | 'name-family'
        | 'name-given'
        | 'name-middle'
        | 'name-middle-initial'
        | 'name-prefix'
        | 'name-suffix'
        | 'password'
        | 'password-new'
        | 'postal-address'
        | 'postal-address-country'
        | 'postal-address-extended'
        | 'postal-address-extended-postal-code'
        | 'postal-address-locality'
        | 'postal-address-region'
        | 'postal-code'
        | 'street-address'
        | 'sms-otp'
        | 'tel'
        | 'tel-country-code'
        | 'tel-national'
        | 'tel-device'
        | 'username'
        | 'username-new'
        | 'off'
        | undefined;
    maxLength?: number | undefined;
}

const Input = ({
    value,
    placeholder,
    onChangeText,
    helperText,
    isTextArea = false,
    required = false,
    secureTextEntry = false,
    keyboardType,
    editable = true,
    autocomplete,
    maxLength = undefined,
}: InputProps) => {
    const [showText, setShowText] = useState(secureTextEntry);
    const { themeApp } = useContext(ThemeContext);
    return (
        <View style={[styles.container, isTextArea ? styles.textArea : undefined]}>
            <Text style={[isTextArea ? styles.labelTextArea : styles.label]}>
                {placeholder}
                <Text>{required ? ' *' : ''}</Text>
            </Text>
            {helperText && <Text style={[styles.helperText, { color: colors.light.primary }]}>{helperText}</Text>}
            <View>
                <TextInput
                    returnKeyType='next'
                    secureTextEntry={showText}
                    focusable
                    editable={editable}
                    autoComplete={autocomplete}
                    maxLength={maxLength}
                    autoCorrect={false}
                    keyboardType={keyboardType}
                    multiline={isTextArea}
                    numberOfLines={isTextArea ? 4 : 2}
                    placeholderTextColor={colors.light.grey}
                    style={[
                        isTextArea ? styles.textArea : styles.input,
                        {
                            // borderColor: themeApp.colors.backgroundInput,
                            color: themeApp.colors.textInput,
                            backgroundColor: themeApp.colors.bgInput,
                        },
                    ]}
                    value={value}
                    placeholder={placeholder}
                    onChangeText={onChangeText}
                />
                {secureTextEntry && (
                    <TouchableOpacity style={styles.icon} activeOpacity={0.7} onPress={() => setShowText(!showText)}>
                        <Icon name='eye' size={20} color={colors.light.primaryDark} />
                    </TouchableOpacity>
                )}
            </View>
        </View>
    );
};

export default Input;

const styles = StyleSheet.create({
    container: {
        marginHorizontal: spacing.S,
        marginVertical: spacing.S,
    },
    input: {
        marginHorizontal: spacing.S,
        borderRadius: 10,
        padding: spacing.XL,
    },
    text: {
        marginHorizontal: spacing.XL,
        fontSize: typography.size.S,
        color: colors.light.primary,
        fontWeight: '500',
    },
    textArea: {
        height: 40,
        marginBottom: 10,
    },
    helperText: {
        fontSize: typography.size.XS,
        marginTop: spacing.S,
        marginLeft: spacing.S,
    },
    label: {
        fontWeight: 'bold',
        marginHorizontal: spacing.M,
        marginBottom: spacing.XS,
    },
    labelTextArea: {
        fontWeight: 'bold',
        marginHorizontal: spacing.M,
        marginBottom: spacing.XS,
    },
    icon: {
        position: 'absolute',
        right: 20,
        top: 13,
    },
});
