import React, { useContext } from 'react';
import { StyleSheet, View } from 'react-native';
import { colors } from '~utils/colors';
import { spacing } from '~utils/spacing';
import { GlobalStyles } from '~utils/styles';
import Text from './Text';
import { typography } from '~utils/typography';
import Separator from './Separator';
import { ThemeContext } from '~contexts/ThemeContext';

interface CardProps {
    children: React.ReactNode;
    title?: string;
}

const Card = ({ children, title }: CardProps) => {
    const { themeApp } = useContext(ThemeContext);
    return (
        <View style={[styles.container, GlobalStyles.dropdown, { backgroundColor: themeApp.colors.bgInput }]}>
            {title && (
                <>
                    <Text style={styles.title}>{title}</Text>
                    <Separator />
                </>
            )}
            {children}
        </View>
    );
};

export default Card;

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.light.white,
        marginHorizontal: spacing.M,
        marginVertical: spacing.S,
        padding: spacing.M,
        borderRadius: spacing.S,
    },
    title: {
        fontSize: typography.size.M,
        fontWeight: '600',
        marginBottom: spacing.S,
    },
});
