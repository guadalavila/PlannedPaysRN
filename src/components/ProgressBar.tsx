import React from 'react';
import { StyleSheet, View } from 'react-native';
import { spacing } from '~utils/spacing';
import Text from './Text';
import { colors } from '~utils/colors';
import Title from './Title';
import Card from './Card';
import { typography } from '~utils/typography';

interface IProgressBar {
    percent: number;
    label?: string;
    color?: string;
    withCard?: boolean;
}

const ProgressBar = ({ percent, label, color = colors.light.primary, withCard = true }: IProgressBar) => {
    const getPercent = () => {
        const value = 100 - percent;
        return value.toString().concat('%');
    };

    const getChildren = () => {
        return (
            <>
                {label && <Title text={label} size={typography.size.S} />}
                <View style={styles.containerBar}>
                    <View style={styles.bar}>
                        <View
                            style={[
                                styles.borderStart,
                                { backgroundColor: color, width: percent.toString().concat('%') },
                            ]}
                        />
                        <View
                            style={[
                                styles.borderEnd,
                                { width: getPercent(), backgroundColor: 'rgba(13, 64, 174, 0.2)' },
                            ]}
                        />
                    </View>
                </View>
            </>
        );
    };

    return <>{withCard ? <Card>{getChildren()}</Card> : <View>{getChildren()}</View>}</>;
};

export default ProgressBar;

const styles = StyleSheet.create({
    containerBar: {
        width: '90%',
        alignSelf: 'center',
        marginTop: spacing.M,
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
