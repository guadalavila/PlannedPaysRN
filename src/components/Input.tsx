import React from 'react';
import { KeyboardType, StyleSheet, View } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { colors } from '~utils/colors';
import { spacing } from '~utils/spacing';
import Text from './Text';
import { typography } from '~utils/typography';

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
    return (
        <View style={[styles.container, isTextArea ? styles.textArea : undefined]}>
            {/* <Text style={[isTextArea ? styles.labelTextArea : styles.label]}>
                {placeholder}
                <Text>{required ? ' *' : ''}</Text>
            </Text> */}
            {helperText && <Text style={[styles.helperText, { color: colors.light.primary }]}>{helperText}</Text>}
            <TextInput
                returnKeyType='next'
                secureTextEntry={secureTextEntry}
                focusable
                editable={editable}
                autoComplete={autocomplete}
                maxLength={maxLength}
                autoCorrect={false}
                keyboardType={keyboardType}
                multiline={isTextArea}
                numberOfLines={isTextArea ? 4 : 2}
                placeholderTextColor={colors.light.primary}
                style={[
                    styles.input,
                    isTextArea ? styles.textArea : styles.input,
                    {
                        // borderColor: themeApp.colors.backgroundInput,
                        // color: themeApp.colors.textInput,
                        // backgroundColor: themeApp.colors.backgroundInput,
                    },
                ]}
                value={value}
                placeholder={placeholder}
                onChangeText={onChangeText}
            />
        </View>
    );
};

export default Input;

const styles = StyleSheet.create({
    container: {
        marginHorizontal: spacing.S,
    },
    input: {
        marginHorizontal: spacing.S,
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
    textArea: {
        height: 100,
        marginBottom: 50,
    },
    helperText: {
        fontSize: typography.size.XS,
        marginTop: spacing.S,
        marginLeft: spacing.S,
    },
    label: {
        fontWeight: 'bold',
        marginHorizontal: spacing.S,
    },
    labelTextArea: {
        fontWeight: 'bold',
        marginHorizontal: spacing.S,
        paddingTop: spacing.XXL,
        marginBottom: spacing.S,
    },
});
