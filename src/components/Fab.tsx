import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { colors } from '~utils/colors';
import IconRound from './IconRound';

interface IFabProps {
    icon: string;
    onPress: () => void;
    color?: string;
}

const Fab = ({ icon, onPress, color = colors.light.white }: IFabProps) => {
    return (
        <TouchableOpacity activeOpacity={0.7} onPress={onPress} style={styles.container}>
            <IconRound iconColor={color} iconName={icon} />
        </TouchableOpacity>
    );
};

export default Fab;

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        right: 20,
        bottom: 10,
    },
});
