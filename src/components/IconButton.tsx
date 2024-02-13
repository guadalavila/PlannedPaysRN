import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { colors } from '~utils/colors';
import { spacing } from '~utils/spacing';
import { GlobalStyles } from '~utils/styles';

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
        <TouchableOpacity
            style={[styles.container, { backgroundColor: backgroundColor }]}
            activeOpacity={0.7}
            onPress={onPress}>
            <Icon style={GlobalStyles.alignSelf} name={icon} size={20} color={colorIcon} />
        </TouchableOpacity>
    );
};

export default IconButton;

const styles = StyleSheet.create({
    container: {
        borderRadius: 30,
        // width: '18%',
        padding: spacing.XXL,
        margin: spacing.S,
    },
});
