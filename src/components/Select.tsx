import React, { useContext } from 'react';
import { StyleSheet, Switch, View } from 'react-native';
import Text from './Text';
import { colors } from '~utils/colors';
import { spacing } from '~utils/spacing';
import { ThemeContext } from '~contexts/ThemeContext';

interface ISelectProps {
    title: string;
    selected: boolean;
    onChangeSelect: () => void;
}

const Select = ({ title, selected, onChangeSelect }: ISelectProps) => {
    const { themeApp } = useContext(ThemeContext);
    return (
        <View style={[styles.container, { backgroundColor: themeApp.colors.bgInput }]}>
            <Text style={[styles.title]}>{title}</Text>
            <Switch
                testID='switch'
                style={{ transform: [{ scaleX: 0.8 }, { scaleY: 0.8 }] }}
                trackColor={{ false: '#767577', true: colors.light.success }}
                thumbColor={true ? colors.light.white : colors.light.grey}
                ios_backgroundColor={colors.light.grey}
                onValueChange={onChangeSelect}
                value={selected}
            />
        </View>
    );
};

export default Select;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderRadius: 10,
        marginHorizontal: spacing.L,
        marginVertical: spacing.L,
        backgroundColor: colors.light.white,
        paddingHorizontal: spacing.L,
        paddingVertical: spacing.S,
    },
    title: {
        alignSelf: 'center',
    },
});
