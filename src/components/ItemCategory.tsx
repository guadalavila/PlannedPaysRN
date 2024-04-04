import React, { useContext } from 'react';
import { StyleSheet, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { ThemeContext } from '~contexts/ThemeContext';
import { ICategory } from '~models/Category';
import { colors } from '~utils/colors';
import { spacing } from '~utils/spacing';
import { GlobalStyles } from '~utils/styles';
import Text from './Text';

const ItemCategory = ({ icon, color, label }: ICategory) => {
    const { themeApp } = useContext(ThemeContext);
    return (
        <View style={[styles.item, GlobalStyles.row, { backgroundColor: themeApp.colors.bgInput }]}>
            <View style={[styles.avatar, { backgroundColor: color }]}>
                <Icon name={icon} size={22} color={colors.light.white} />
            </View>
            <Text style={[GlobalStyles.alignSelf, styles.text]}>{label}</Text>
        </View>
    );
};

export default ItemCategory;

const styles = StyleSheet.create({
    item: {
        padding: spacing.L,
        marginVertical: spacing.XS,
        marginHorizontal: spacing.L,
        borderRadius: 8,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        elevation: 4,
    },
    avatar: {
        width: 40,
        height: 40,
        borderRadius: 40,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        paddingHorizontal: spacing.S,
    },
});
