import React from 'react';
import { StyleSheet, View } from 'react-native';
import Card from './Card';
import Icon from 'react-native-vector-icons/Ionicons';
import { colors } from '~utils/colors';
import { typography } from '~utils/typography';
import Title from './Title';
import { GlobalStyles } from '~utils/styles';
import ProgressBar from './ProgressBar';

interface IGoalProps {
    icon: string;
    title: string;
    percentage: number;
    color?: string;
}

const Goal = ({ icon, title, percentage, color = colors.light.primary }: IGoalProps) => {
    return (
        <Card>
            <View style={[styles.avatar, { backgroundColor: color }]}>
                <Icon style={GlobalStyles.alignSelf} name={icon} color={colors.light.white} size={24} />
            </View>
            <Title style={GlobalStyles.alignSelf} text={title} size={typography.size.L} />
            <ProgressBar label='' percent={percentage} withCard={false} />
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
});
