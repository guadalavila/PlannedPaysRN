import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { colors } from '~utils/colors';
import { spacing } from '~utils/spacing';
import { typography } from '~utils/typography';

interface IHeaderProps {
    title: string;
}

const Header = ({ title }: IHeaderProps) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
        </View>
    );
};

export default Header;

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.light.primary,
        paddingVertical: spacing.L,
    },
    title: {
        color: colors.light.white,
        fontSize: typography.size.L,
        fontWeight: 'bold',
        textAlign: 'center',
    },
});
