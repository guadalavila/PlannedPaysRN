import React, { useContext, useState } from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { colors } from '~utils/colors';
import { LIST_COLORS } from '~utils/mock';
import { spacing } from '~utils/spacing';
import Item from './Item';
import { ThemeContext } from '~contexts/ThemeContext';

interface IPaletteColor {
    colorDefault?: string;
}

const PaletteColor = ({ colorDefault = colors.light.primary }: IPaletteColor) => {
    const [colorSelected, setColorSelected] = useState(colorDefault);
    const [showPalette, setShowPalette] = useState(false);
    const { changeColor } = useContext(ThemeContext);

    const onChangeColor = (color: string) => {
        setColorSelected(color);
        changeColor(color);
    };
    return (
        <View>
            <Item text='Color' icon='color-palette-outline' onPress={() => setShowPalette(!showPalette)} />
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
        backgroundColor: 'red',
        alignItems: 'center',
        justifyContent: 'center',
    },
    selected: {},
});
