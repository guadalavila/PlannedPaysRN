import React from 'react';
import { StyleSheet, View } from 'react-native';
import { colors } from '~utils/colors';
import { spacing } from '~utils/spacing';
import { typography } from '~utils/typography';
import Text from './Text';
import { ICard } from '~models/Card';
import { SvgUri } from 'react-native-svg';
import LinearGradient from 'react-native-linear-gradient';

interface CreditCardProps {
    card: ICard | undefined;
    colorsCard: string[];
    numbers?: number | string;
    name?: string;
}

const CreditCard = ({ name = '', colorsCard, card, numbers = '**' }: CreditCardProps) => {
    return (
        <LinearGradient style={styles.container} start={{ x: 0.3, y: 0 }} end={{ x: 0.5, y: 1 }} colors={colorsCard}>
            {card && <SvgUri style={styles.image} height={100} width={90} uri={card.img} />}
            <View style={styles.start}>
                <Text style={styles.nameText}>{name} </Text>
            </View>
            <View style={styles.end}>
                <Text style={styles.numberText}>
                    ****{'   '}****{'   '}****{'   '}**{numbers}
                </Text>
            </View>
        </LinearGradient>
    );
};

export default CreditCard;

const styles = StyleSheet.create({
    container: {
        marginHorizontal: spacing.XL,
        marginVertical: spacing.XXL,
        borderRadius: 20,
    },
    start: {
        borderTopEndRadius: 20,
        borderTopStartRadius: 20,
        height: 140,
        padding: spacing.L,
    },
    end: {
        borderBottomEndRadius: 20,
        borderBottomStartRadius: 20,
        height: 70,
        padding: spacing.L,
    },
    numberText: {
        color: colors.light.white,
        fontWeight: '700',
        fontSize: typography.size.XXL,
        position: 'absolute',
        top: 10,
        left: 15,
    },
    nameText: {
        color: colors.light.white,
        fontWeight: 'bold',
        fontSize: typography.size.L,
        position: 'absolute',
        top: 100,
        left: 15,
        textTransform: 'uppercase',
    },
    image: {
        zIndex: 999,
        position: 'absolute',
        top: 0,
        right: 0,
    },
});
