import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StackNavigatorLogIn, StackNavigatorLogOut } from './StackNavigator';
import useRemoteConfig from '~hooks/useRemoteConfig';
import useAuth from '~hooks/useAuth';

const NavigatorApp = () => {
    useRemoteConfig();
    const { isAuthenticated } = useAuth();

    return (
        <NavigationContainer>
            {isAuthenticated ? <StackNavigatorLogIn /> : <StackNavigatorLogOut />}
        </NavigationContainer>
    );
};

export default NavigatorApp;
