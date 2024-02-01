import React from 'react';
import { ImageBackground, StyleSheet, View } from 'react-native';
import { colors } from '~utils/colors';
import { spacing } from '~utils/spacing';
import { typography } from '~utils/typography';
import Text from './Text';
import { ICard } from '~models/Card';
import { SvgUri } from 'react-native-svg';

interface CreditCardProps {
    card: ICard | undefined;
    name?: string;
}

const CreditCard = ({ name = '', card }: CreditCardProps) => {
    return (
        <ImageBackground resizeMode='cover' style={styles.container} source={require('../../assets/images/back1.png')}>
            {card && <SvgUri style={styles.image} height={80} width={90} uri={card.img} />}
            <View style={styles.start}>
                <Text style={styles.nameText}>{name} </Text>
            </View>
            <View style={styles.end}>
                <Text style={styles.numberText}>
                    ****{'  '}****{'  '}****{'  '}****
                </Text>
            </View>
        </ImageBackground>
    );
};

export default CreditCard;

const styles = StyleSheet.create({
    container: {
        marginHorizontal: spacing.XL,
        marginVertical: spacing.XXXXL,
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
        color: colors.light.primary,
        fontWeight: '700',
        fontSize: typography.size.XXL,
        position: 'absolute',
        top: 20,
        left: 15,
    },
    nameText: {
        color: colors.light.black,
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
