import React from 'react';
import { StyleSheet, View } from 'react-native';
import Card from './Card';
import Icon from 'react-native-vector-icons/Ionicons';
import { colors } from '~utils/colors';
import { typography } from '~utils/typography';
import Title from './Title';
import { GlobalStyles } from '~utils/styles';
import ProgressBar from './ProgressBar';
import Text from './Text';
import { spacing } from '~utils/spacing';

interface IGoalProps {
    icon: string;
    title: string;
    percentage?: number;
    color?: string;
    amountTotal?: number;
    saved?: number;
}

const Goal = ({ icon, title, percentage = 0, color = colors.light.primaryDark, amountTotal, saved }: IGoalProps) => {
    return (
        <Card>
            <View style={[styles.avatar, { backgroundColor: color }]}>
                <Icon style={GlobalStyles.alignSelf} name={icon} color={colors.light.white} size={24} />
            </View>
            <Title style={GlobalStyles.alignSelf} text={title} size={typography.size.L} />
            <ProgressBar label='' percent={percentage} withCard={false} />
            <View style={[GlobalStyles.rowBetween, styles.containerAmount]}>
                {saved && <Text>Guardado: $20000</Text>}
                {amountTotal && <Text>Objetivo: {amountTotal}</Text>}
            </View>
        </Card>
    );
};

export default Goal;

const styles = StyleSheet.create({
    avatar: {
        width: 45,
        height: 45,
        borderRadius: 45,
        alignSelf: 'center',
        justifyContent: 'center',
    },
    containerAmount: {
        paddingVertical: spacing.S,
    },
});
