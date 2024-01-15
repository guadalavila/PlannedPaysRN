import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { colors } from '~utils/colors';
import { spacing } from '~utils/spacing';
import { typography } from '~utils/typography';
import Text from './Text';
import { CREDIT_CARD_TYPE } from '~models/CreditCard';

interface CreditCardProps {
    name: string;
    type: CREDIT_CARD_TYPE;
}

const CreditCard = ({ type, name }: CreditCardProps) => {
    return (
        <View style={styles.container}>
            {type === 'MASTER' ? (
                <Image resizeMode={'contain'} style={styles.image} source={require('../../assets/images/master.png')} />
            ) : (
                <Image resizeMode={'contain'} style={styles.image} source={require('../../assets/images/visa.png')} />
            )}
            <View style={styles.start}>
                <Text style={styles.nameText}>{name}</Text>
            </View>
            <View style={styles.end}>
                <Text style={styles.numberText}>**** **** **** ****</Text>
            </View>
        </View>
    );
};

export default CreditCard;

const styles = StyleSheet.create({
    container: {
        marginHorizontal: spacing.XXXXL,
        marginVertical: spacing.XXXXL,
        borderRadius: 20,
        paddingEnd: 10,
        width: '100%',
    },
    start: {
        backgroundColor: '#383855',
        borderTopEndRadius: 20,
        borderTopStartRadius: 20,
        height: 110,
        padding: spacing.L,
    },
    end: {
        backgroundColor: '#A8A8C7',
        borderBottomEndRadius: 20,
        borderBottomStartRadius: 20,
        height: 60,
        padding: spacing.L,
    },
    numberText: {
        color: colors.light.white,
        fontWeight: '700',
        fontSize: typography.size.L,
        position: 'absolute',
        top: 20,
        left: 25,
    },
    nameText: {
        color: colors.light.white,
        fontWeight: '700',
        fontSize: typography.size.M,
        position: 'absolute',
        top: 56,
        left: 25,
    },
    image: {
        width: 90,
        height: 50,
        zIndex: 999,
        position: 'absolute',
        top: 10,
        right: 14,
    },
});
