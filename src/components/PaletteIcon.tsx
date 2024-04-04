import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { colors } from '~utils/colors';
import { ICONS } from '~utils/icons';
import { spacing } from '~utils/spacing';

const PaletteIcon = () => {
    return (
        <View style={styles.container}>
            {ICONS.map((x, index) => (
                <TouchableOpacity key={index} style={[styles.round]} activeOpacity={0.7} onPress={() => console.log(x)}>
                    <Icon name={x} size={22} color={colors.light.primary} />
                </TouchableOpacity>
            ))}

            <Text>PaletteIcon</Text>
        </View>
    );
};

export default PaletteIcon;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        width: '100%',
        backgroundColor: 'white',
        position: 'relative',
        zIndex: 9999,
        marginTop: -6,
    },
    round: {
        width: 28,
        height: 28,
        borderRadius: 28,
        margin: spacing.XS,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.light.white,
    },
});
