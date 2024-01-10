import React from 'react';
import { StyleSheet, View } from 'react-native';
import Text from './Text';
import { typography } from '~utils/typography';
import { spacing } from '~utils/spacing';

interface TitleProps {
    text: string;
}

const Title = ({ text }: TitleProps) => {
    return (
        <View>
            <Text style={styles.title}>{text}</Text>
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
