import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { colors } from '~utils/colors';
import { spacing } from '~utils/spacing';
import { GlobalStyles } from '~utils/styles';

interface ItemProps {
    text: string;
    onPress: () => void;
    icon?: string;
    color?: string;
}

const Item = ({ text, onPress, icon = 'add', color = colors.light.primary }: ItemProps) => {
    return (
        <TouchableOpacity onPress={onPress} style={[styles.item, GlobalStyles.row]} activeOpacity={0.7}>
            <View style={[styles.avatar, { backgroundColor: color }]}>
                <Icon name={icon} size={22} color={colors.light.white} />
            </View>
            <Text style={[GlobalStyles.alignSelf, styles.text]}>{text}</Text>
        </TouchableOpacity>
    );
};

export default Item;

const styles = StyleSheet.create({
    item: {
        borderBottomWidth: 1,
        borderBottomColor: colors.light.separator,
        padding: spacing.L,
        marginBottom: spacing.S,
        backgroundColor: colors.light.white,
    },
    text: {
        paddingHorizontal: spacing.S,
    },
    avatar: {
        width: 30,
        height: 30,
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
