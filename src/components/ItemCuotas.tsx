import React, { useState } from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import Text from './Text';
import { spacing } from '~utils/spacing';
import { colors } from '~utils/colors';
import Icon from 'react-native-vector-icons/Ionicons';

interface ItemCuotasProps {
    label: string;
    onPress: () => void;
    selected?: boolean;
}

const ItemCuotas = ({ label, onPress, selected = false }: ItemCuotasProps) => {
    return (
        <TouchableOpacity style={styles.container} activeOpacity={0.7} onPress={onPress}>
            <Text style={styles.text}>{label}</Text>
            {selected && (
                <View style={styles.containerIcon}>
                    <Icon name={'checkmark-outline'} size={24} color={colors.light.success} />
                </View>
            )}
        </TouchableOpacity>
    );
};

export default ItemCuotas;

const styles = StyleSheet.create({
    container: {
        marginVertical: spacing.M,
        borderBottomWidth: 0.4,
        borderBottomColor: colors.light.primary,
    },
    text: {
        alignSelf: 'center',
        paddingVertical: spacing.S,
    },
    containerIcon: {
        position: 'absolute',
        end: 10,
    },
});
