import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { colors } from '~utils/colors';
import { spacing } from '~utils/spacing';
import Text from './Text';

const CreditCard = () => {
    return (
        <View style={styles.container}>
            <View style={styles.start} />
            <View style={styles.end} />
        </View>
    );
};

export default CreditCard;

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.light.black,
        marginHorizontal: spacing.XXL,
        marginVertical: spacing.M,
        borderRadius: 16,
    },
    start: {
        backgroundColor: '#383855',
        borderTopEndRadius: 16,
        borderTopStartRadius: 16,
        height: 110,
    },
    end: {
        backgroundColor: '#A8A8C7',
        borderBottomEndRadius: 16,
        borderBottomStartRadius: 16,
        height: 60,
    },
});
