import React from 'react';
import { StyleProp, StyleSheet, View, ViewStyle } from 'react-native';
import { colors } from '~utils/colors';
import { GlobalStyles } from '~utils/styles';
import Icon from 'react-native-vector-icons/Ionicons';
import Text from './Text';

interface IconRoundProps {
    iconName: string;
    background?: string;
    iconColor?: string;
    style?: StyleProp<ViewStyle> | undefined;
    iconSize?: number;
    label?: string;
}

const IconRound = ({
    iconName,
    background = colors.light.primary,
    iconColor = colors.light.white,
    style,
    iconSize = 22,
    label,
}: IconRoundProps) => {
    return (
        <View>
            <View style={[styles.item, { backgroundColor: background }, style]}>
                <Icon style={GlobalStyles.alignSelf} name={iconName} size={iconSize} color={iconColor} />
            </View>
            {label && <Text style={styles.label}>{label}</Text>}
        </View>
    );
};

export default IconRound;

const styles = StyleSheet.create({
    item: {
        borderRadius: 50,
        width: 50,
        height: 50,
        justifyContent: 'center',
    },
    label: {
        alignSelf: 'center',
    },
});
