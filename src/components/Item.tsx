import React, { useContext } from 'react';
import { StyleSheet, View, TouchableOpacity, StyleProp, ViewStyle } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import IconFA from 'react-native-vector-icons/FontAwesome5';
import { colors } from '~utils/colors';
import { spacing } from '~utils/spacing';
import { GlobalStyles } from '~utils/styles';
import Text from './Text';
import { ThemeContext } from '~contexts/ThemeContext';

interface ItemProps {
    text: string;
    onPress: () => void;
    icon?: string;
    color?: string;
    selected?: boolean;
    style?: StyleProp<ViewStyle> | undefined;
    fontAwesome?: boolean;
    showBorder?: boolean;
    showIcon?: boolean;
}

const Item = ({
    text,
    onPress,

    icon = 'add',
    color = colors.light.primary,
    selected = false,
    style = {},
    fontAwesome = false,
    showBorder = false,
    showIcon = true,
}: ItemProps) => {
    const { themeApp } = useContext(ThemeContext);
    return (
        <TouchableOpacity
            onPress={onPress}
            style={[
                styles.item,
                GlobalStyles.row,
                style,
                { backgroundColor: themeApp.colors.bgInput },
                showBorder ? styles.border : null,
            ]}
            activeOpacity={0.7}>
            {showIcon && (
                <View style={[styles.avatar, { backgroundColor: color }]}>
                    {fontAwesome ? (
                        <IconFA name={icon} size={18} color={colors.light.white} />
                    ) : (
                        <Icon name={icon} size={18} color={colors.light.white} />
                    )}
                </View>
            )}
            <Text style={[GlobalStyles.alignSelf, styles.text]}>{text}</Text>
            {selected && (
                <View style={styles.containerCheck}>
                    <Icon name={'checkmark-outline'} size={24} color={colors.light.success} />
                </View>
            )}
        </TouchableOpacity>
    );
};

export default Item;

const styles = StyleSheet.create({
    item: {
        // borderBottomWidth: 1,
        // borderBottomColor: colors.light.separator,
        padding: spacing.L,
        marginBottom: spacing.XS,
        borderRadius: 10,
        marginVertical: spacing.XS,
    },
    text: {
        paddingHorizontal: spacing.S,
    },
    avatar: {
        width: 28,
        height: 28,
        borderRadius: 28,
        justifyContent: 'center',
        alignItems: 'center',
    },
    containerCheck: {
        position: 'absolute',
        end: 20,
        alignSelf: 'center',
    },
    border: {
        borderBottomWidth: 0.5,
        borderBottomColor: colors.light.separator,
    },
});
