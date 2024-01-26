import React from 'react';
import { StyleSheet, View } from 'react-native';
import { spacing } from '~utils/spacing';
import Text from './Text';
import { colors } from '~utils/colors';
import Title from './Title';
import Card from './Card';

interface IProgressBar {
    label: string;
    percent: number;
    color?: string;
}

const ProgressBar = ({ label, percent, color = colors.light.primary }: IProgressBar) => {
    const getPercent = () => {
        const value = 100 - percent;
        return value.toString().concat('%');
    };
    return (
        <Card>
            <Title text={label} />
            <View style={styles.containerBar}>
                <View style={styles.bar}>
                    <View
                        style={[styles.borderStart, { backgroundColor: color, width: percent.toString().concat('%') }]}
                    />
                    <View
                        style={[styles.borderEnd, { width: getPercent(), backgroundColor: 'rgba(13, 64, 174, 0.2)' }]}
                    />
                </View>
            </View>
        </Card>
    );
};

export default ProgressBar;

const styles = StyleSheet.create({
    containerBar: {
        width: '90%',
        alignSelf: 'center',
    },
    bar: {
        width: '100%',
        backgroundColor: 'white',
        height: 25,
        // borderRadius: 10,
        // justifyContent: 'center',
        // alignSelf: 'center',
        display: 'flex',
        flexDirection: 'row',
        borderRadius: 10,
    },
    borderStart: {
        borderEndStartRadius: 10,
        borderTopLeftRadius: 10,
    },
    borderEnd: {
        borderTopEndRadius: 10,
        borderBottomEndRadius: 10,
    },
});
