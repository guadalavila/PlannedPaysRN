import React from 'react';
import { ActivityIndicator, View } from 'react-native';
import { colors } from '~utils/colors';
import { GlobalStyles } from '~utils/styles';

interface ILoadingProps {
    color?: string;
}
const Loading = ({ color = colors.light.primary }: ILoadingProps) => {
    return (
        <View style={GlobalStyles.flexCenter}>
            <ActivityIndicator color={color} size={'large'} />
        </View>
    );
};

export default Loading;
