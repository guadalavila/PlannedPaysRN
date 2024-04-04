import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { colors } from '~utils/colors';
import { spacing } from '~utils/spacing';
import IconRound from './IconRound';

interface IconButtonProps {
    icon: string;
    onPress: () => void;
    colorIcon?: string;
    backgroundColor?: string;
}
const IconButton = ({
    icon,
    onPress,
    colorIcon = colors.light.black,
    backgroundColor = '#f6f8fa',
}: IconButtonProps) => {
    return (
        <TouchableOpacity activeOpacity={0.7} onPress={onPress}>
            <IconRound
                style={styles.item}
                background={backgroundColor}
                iconName={icon}
                iconSize={22}
                iconColor={colorIcon}
            />
        </TouchableOpacity>
    );
};

export default IconButton;

const styles = StyleSheet.create({
    item: {
        marginHorizontal: spacing.M,
    },
});
