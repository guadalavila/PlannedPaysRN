import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { colors } from '~utils/colors';
import Icon from 'react-native-vector-icons/Ionicons';
import { GlobalStyles } from '~utils/styles';

interface FabProps {
    icon: string;
    onPress: () => void;
    color?: string;
}

const Fab = ({ icon, onPress, color = colors.light.white }: FabProps) => {
    return (
        <TouchableOpacity activeOpacity={0.7} onPress={onPress} style={styles.container}>
            <View style={styles.icon}>
                <Icon style={GlobalStyles.alignSelf} name={icon} size={30} color={color} />
            </View>
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
    icon: {
        flex: 1,
        justifyContent: 'center',
    },
});
