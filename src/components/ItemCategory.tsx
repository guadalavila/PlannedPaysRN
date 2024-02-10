import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { ICategory } from '~models/Category';
import { colors } from '~utils/colors';
import { spacing } from '~utils/spacing';
import { GlobalStyles } from '~utils/styles';

const ItemCategory = ({ icon, color, label }: ICategory) => {
    return (
        <View style={[styles.item, GlobalStyles.row]}>
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
        borderBottomWidth: 1,
        borderBottomColor: colors.light.separator,
        padding: spacing.L,
        marginVertical: spacing.S,
        backgroundColor: colors.light.white,
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
