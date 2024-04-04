import React, { useContext, useState } from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { colors } from '~utils/colors';
import { spacing } from '~utils/spacing';
import Text from './Text';
import Icon from 'react-native-vector-icons/Ionicons';
import { GlobalStyles } from '~utils/styles';
import ItemCreditCard from './ItemCreditCard';
import { ICard } from '~models/Card';
import { ThemeContext } from '~contexts/ThemeContext';

interface IDropdownProps {
    placeholder: string;
    onSelectCard: (card: ICard) => void;
}

const Dropdown = ({ placeholder, onSelectCard }: IDropdownProps) => {
    const [isOpen, setIsOpen] = useState(false);
    const { themeApp } = useContext(ThemeContext);
    const [cardSelected, setCardSelected] = useState<ICard | undefined>(undefined);

    const onSelect = (card: ICard) => {
        setCardSelected(card);
        setIsOpen(!isOpen);
        onSelectCard(card);
    };

    return (
        <>
            <TouchableOpacity
                style={[
                    styles.container,
                    { backgroundColor: themeApp.colors.bgInput },
                    !isOpen ? { marginBottom: spacing.L } : null,
                ]}
                activeOpacity={0.7}
                onPress={() => setIsOpen(!isOpen)}>
                <Text style={GlobalStyles.alignSelf}>{cardSelected?.brand ?? placeholder}</Text>
                {isOpen ? (
                    <Icon name='chevron-up-outline' color={colors.light.primary} size={22} />
                ) : (
                    <Icon name='chevron-down-outline' color={colors.light.primary} size={22} />
                )}
            </TouchableOpacity>
            {isOpen && (
                <View style={[styles.dropdown, { backgroundColor: themeApp.colors.bgInput }]}>
                    <ItemCreditCard onPress={(card) => onSelect(card)} />
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
