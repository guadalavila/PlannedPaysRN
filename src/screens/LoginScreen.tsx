import React from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Button, Text, View } from 'react-native';
import { RootStackLogoutParamList } from '~navigations/types';

interface Props extends NativeStackScreenProps<RootStackLogoutParamList, 'LoginScreen'> {}

const LoginScreen = ({ navigation }: Props) => {
    return (
        <View>
            <Text>LogisdsnScreen</Text>
        </View>
    );
};

export default LoginScreen;