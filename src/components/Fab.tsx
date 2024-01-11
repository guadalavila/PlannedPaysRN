import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { colors } from '~utils/colors';
import Text from './Text';
import { GlobalStyles } from '~utils/styles';

interface FabProps {
    onPress: () => void;
}

const Fab = ({ onPress }: FabProps) => {
    return (
        <TouchableOpacity activeOpacity={0.7} onPress={onPress} style={styles.container}>
            <Text style={GlobalStyles.alignSelf}>+</Text>
        </TouchableOpacity>
    );
};

export default Fab;

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        right: 0,
        bottom: 0,
        backgroundColor: colors.light.primary,
        width: 50,
        height: 50,
        borderRadius: 50,
    },
});
