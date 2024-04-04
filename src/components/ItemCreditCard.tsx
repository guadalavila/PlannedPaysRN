import React, { useContext } from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { RemoteConfigContext } from '~contexts/RemoteConfigContext';
import { colors } from '~utils/colors';
import { spacing } from '~utils/spacing';
import Text from './Text';
import { SvgUri } from 'react-native-svg';
import { ICard } from '~models/Card';

interface ItemCreditCardProps {
    onPress: (brand: ICard) => void;
}

const ItemCreditCard = ({ onPress }: ItemCreditCardProps) => {
    const { cards } = useContext(RemoteConfigContext);
    return (
        <View>
            {cards.map((card) => {
                return (
                    <TouchableOpacity
                        key={card.id}
                        style={styles.item}
                        activeOpacity={0.7}
                        onPress={() => onPress(card)}>
                        <SvgUri style={styles.svg} uri={card.img} width={40} height={40} />
                        <Text style={styles.brand}>{card.brand}</Text>
                    </TouchableOpacity>
                );
            })}
        </View>
    );
};

export default ItemCreditCard;

const styles = StyleSheet.create({
    item: {
        borderBottomColor: colors.light.separator,
        borderBottomWidth: 0.25,
        paddingVertical: spacing.M,
        paddingHorizontal: spacing.L,
        flexDirection: 'row',
    },
    brand: {
        alignSelf: 'center',
        // color: colors.light.primaryDark,
        fontWeight: '500',
    },
    svg: {
        marginRight: spacing.XXL,
    },
});
