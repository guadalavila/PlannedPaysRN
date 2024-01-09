import React from 'react';
import { StackNavigatorLogIn } from './StackNavigator';
import { NavigationContainer } from '@react-navigation/native';

const NavigatorApp = () => {
    return (
        <NavigationContainer>
            <StackNavigatorLogIn />
        </NavigationContainer>
    );
};

export default NavigatorApp;
