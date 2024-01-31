import React, { useState } from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { colors } from '~utils/colors';
import { spacing } from '~utils/spacing';
import Text from './Text';
import Icon from 'react-native-vector-icons/Ionicons';
import { GlobalStyles } from '~utils/styles';
import ItemCreditCard from './ItemCreditCard';
import { BRAND_CARD } from '~models/Card';

interface IDropdownProps {
    placeholder: string;
}

const Dropdown = ({ placeholder }: IDropdownProps) => {
    const [isOpen, setIsOpen] = useState(false);
    const [cardSelected, setCardSelected] = useState<BRAND_CARD | undefined>(undefined);

    const onSelect = (brand: BRAND_CARD) => {
        setCardSelected(brand);
        setIsOpen(!isOpen);
    };

    return (
        <>
            <TouchableOpacity
                style={[styles.container, !isOpen ? { marginBottom: spacing.L } : null]}
                activeOpacity={0.7}
                onPress={() => setIsOpen(!isOpen)}>
                <Text style={GlobalStyles.alignSelf}>{cardSelected ?? placeholder}</Text>
                {isOpen ? (
                    <Icon name='chevron-up-outline' color={colors.light.primary} size={22} />
                ) : (
                    <Icon name='chevron-down-outline' color={colors.light.primary} size={22} />
                )}
            </TouchableOpacity>
            {isOpen && (
                <View style={styles.dropdown}>
                    <ItemCreditCard onPress={(brand) => onSelect(brand)} />
                </View>
            )}
        </>
    );
};

export default Dropdown;

const styles = StyleSheet.create({
    container: {
        borderRadius: 10,
        paddingVertical: spacing.XL,
        paddingHorizontal: spacing.L,
        marginHorizontal: spacing.L,
        backgroundColor: 'white',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    dropdown: {
        borderRadius: 8,
        position: 'relative',
        marginHorizontal: spacing.L,
        backgroundColor: 'white',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        marginBottom: spacing.M,
    },

    placeholder: {},
});
