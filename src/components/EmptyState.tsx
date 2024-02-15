import React from 'react';
import { StyleSheet, View } from 'react-native';
import Text from './Text';
import Icon from 'react-native-vector-icons/Ionicons';
import { colors } from '~utils/colors';
import { GlobalStyles } from '~utils/styles';
import { typography } from '~utils/typography';
import { spacing } from '~utils/spacing';

interface IEmptyStateProps {
    title: string;
    icon?: string;
}
const EmptyState = ({ title, icon }: IEmptyStateProps) => {
    return (
        <View style={styles.container}>
            {icon && (
                <View style={[GlobalStyles.alignSelf, { marginBottom: spacing.S }]}>
                    <Icon name={icon} color={colors.light.primaryDark} size={100} />
                </View>
            )}
            <Text style={styles.text}>{title}</Text>
        </View>
    );
};

export default EmptyState;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    text: {
        alignSelf: 'center',
        justifyContent: 'center',
        alignContent: 'center',
        fontWeight: '600',
        fontSize: typography.size.L,
        color: colors.light.primary,
    },
});
