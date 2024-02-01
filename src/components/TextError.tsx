import React from 'react';
import { StyleSheet, View } from 'react-native';
import Text from './Text';
import { colors } from '~utils/colors';
import { spacing } from '~utils/spacing';

interface ITextErrorProps {
    text: string;
}

const TextError = ({ text }: ITextErrorProps) => {
    return (
        <View style={styles.container}>
            <Text style={styles.error}>{text}</Text>
        </View>
    );
};

export default TextError;

const styles = StyleSheet.create({
    container: {
        marginHorizontal: spacing.L,
        paddingHorizontal: spacing.M,
        marginVertical: spacing.S,
    },
    error: {
        color: colors.light.error,
    },
});
