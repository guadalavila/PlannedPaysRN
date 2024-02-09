import React, { useState } from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import Text from './Text';
import { colors } from '~utils/colors';
import { spacing } from '~utils/spacing';
import { typography } from '~utils/typography';
import Icon from 'react-native-vector-icons/Ionicons';

interface ICheckBoxProps {
    label: string;
}

const CheckBox = ({ label }: ICheckBoxProps) => {
    const [selected, setSelected] = useState(false);
    return (
        <TouchableOpacity style={styles.container} activeOpacity={0.7} onPress={() => setSelected(!selected)}>
            <Text style={styles.text}>{label}</Text>
            <View style={styles.containerIcon}>
                {selected ? <Icon name='checkmark-outline' size={24} color={colors.light.success} /> : <View />}
            </View>
        </TouchableOpacity>
    );
};

export default CheckBox;

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.light.white,
        marginHorizontal: spacing.L,
        paddingHorizontal: spacing.L,
        paddingVertical: spacing.XL,
        borderRadius: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    text: {
        fontSize: typography.size.M,
        alignSelf: 'center',
    },
    containerIcon: {
        backgroundColor: colors.light.background,
        padding: spacing.S,
        borderRadius: 10,
        width: 36,
        height: 36,
    },
});
