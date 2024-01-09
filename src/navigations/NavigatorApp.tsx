import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StackNavigatorLogIn } from './StackNavigator';

const NavigatorApp = () => {
    return (
        <NavigationContainer>
            <StackNavigatorLogIn />
        </NavigationContainer>
    );
};

export default NavigatorApp;
