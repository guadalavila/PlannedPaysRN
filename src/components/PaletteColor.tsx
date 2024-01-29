import React, { useContext, useState } from 'react';
import { StyleProp, StyleSheet, TouchableOpacity, View, ViewStyle } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { colors } from '~utils/colors';
import { LIST_COLORS } from '~utils/mock';
import { spacing } from '~utils/spacing';
import Item from './Item';

interface IPaletteColor {
    colorDefault?: string;
    style?: StyleProp<ViewStyle> | undefined;
}

const PaletteColor = ({ colorDefault = colors.light.primary, style = {} }: IPaletteColor) => {
    const [colorSelected, setColorSelected] = useState(colorDefault);
    const [showPalette, setShowPalette] = useState(false);

    const onChangeColor = (color: string) => {
        setColorSelected(color);
        setShowPalette(false);
    };
    return (
        <View style={style}>
            <Item
                color={colorSelected}
                text='Color'
                icon='color-palette-outline'
                onPress={() => setShowPalette(!showPalette)}
            />
            {showPalette && (
                <View style={styles.container}>
                    {LIST_COLORS.map((color, index) => (
                        <TouchableOpacity
                            key={index}
                            style={[styles.round, { backgroundColor: color }]}
                            activeOpacity={0.7}
                            onPress={() => onChangeColor(color)}>
                            {colorSelected === color && <Icon name='checkmark' color={colors.light.white} size={20} />}
                        </TouchableOpacity>
                    ))}
                </View>
            )}
        </View>
    );
};

export default PaletteColor;

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
    },
    selected: {},
});
