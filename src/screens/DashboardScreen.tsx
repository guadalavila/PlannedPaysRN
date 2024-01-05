import React from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Text, View } from 'react-native';
import { RootStackLoginParamList } from '~navigations/types';

interface Props extends NativeStackScreenProps<RootStackLoginParamList, 'DashboardScreen'> {}

const DashboardScreen = ({}: Props) => {
    return (
        <View>
            <Text>DashboardScreen</Text>
        </View>
    );
};

export default DashboardScreen;
