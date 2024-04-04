import React, { useState } from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import Text from './Text';
import { colors } from '~utils/colors';
import { spacing } from '~utils/spacing';
import Icon from 'react-native-vector-icons/Ionicons';

interface ICheckBoxProps {
    label: string;
    onChange(value: boolean): void;
}

const CheckBox = ({ label, onChange }: ICheckBoxProps) => {
    const [selected, setSelected] = useState(false);

    const onSelected = () => {
        setSelected(!selected);
        onChange(!selected);
    };

    return (
        <TouchableOpacity style={styles.container} activeOpacity={0.7} onPress={onSelected}>
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
        paddingVertical: spacing.L,
        borderRadius: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    text: {
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
