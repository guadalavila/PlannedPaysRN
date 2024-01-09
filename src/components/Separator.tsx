import React from 'react';
import { StyleSheet, View } from 'react-native';
import { colors } from '~utils/colors';

const Separator = () => {
    return <View style={styles.separator} />;
};

export default Separator;

const styles = StyleSheet.create({
    separator: {
        borderColor: colors.light.separator,
        borderWidth: 0.35,
    },
});
