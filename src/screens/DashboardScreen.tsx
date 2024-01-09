import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { Text, View } from 'react-native';
import Button from '~components/Button';
import Card from '~components/Card';
import { RootStackLoginParamList } from '~navigations/types';

interface Props extends NativeStackScreenProps<RootStackLoginParamList, 'DashboardScreen'> {}

const DashboardScreen = ({}: Props) => {
    return (
        <View>
            <Card title='Tendencia de equilibrio'>
                <Text>sdas</Text>
                <Text>sdas</Text>
                <Text>sdas</Text>
                <Text>sdas</Text>
            </Card>
            <Card title='Gastos'>
                <Text>sdas</Text>
                <Text>sdas</Text>
                <Text>sdas</Text>
                <Text>sdas</Text>
            </Card>
            <Button onPress={() => {}} title='Press me' />
        </View>
    );
};

export default DashboardScreen;
