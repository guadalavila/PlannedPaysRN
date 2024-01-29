import React from 'react';
import { StyleProp, StyleSheet, TextStyle, View } from 'react-native';
import Text from './Text';
import { typography } from '~utils/typography';
import { spacing } from '~utils/spacing';

interface TitleProps {
    text: string;
    size?: number;
    style?: StyleProp<TextStyle> | undefined;
}

const Title = ({ text, size = typography.size.M, style = {} }: TitleProps) => {
    return (
        <View>
            <Text style={[styles.title, { fontSize: size }, style]}>{text}</Text>
        </View>
    );
};

export default Title;

const styles = StyleSheet.create({
    title: {
        fontWeight: 'bold',
        fontSize: typography.size.M,
        marginHorizontal: spacing.S,
        marginVertical: spacing.S,
    },
});
