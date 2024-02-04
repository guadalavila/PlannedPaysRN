import React, { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StackNavigatorLogIn, StackNavigatorLogOut } from './StackNavigator';
import { StateContext } from '~contexts/StateContext';
import useRemoteConfig from '~hooks/useRemoteConfig';
import useAuth from '~hooks/useAuth';

const NavigatorApp = () => {
    const { loading } = useContext(StateContext);
    useRemoteConfig();
    const { isAuthenticated } = useAuth();

    console.log({ isAuthenticated });
    return (
        <NavigationContainer>
            {isAuthenticated ? StackNavigatorLogIn(loading) : StackNavigatorLogOut(loading)}
        </NavigationContainer>
    );
};

export default NavigatorApp;
