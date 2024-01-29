import React, { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StackNavigatorLogIn } from './StackNavigator';
import { StateContext } from '~contexts/StateContext';

const NavigatorApp = () => {
    const { loading } = useContext(StateContext);
    return <NavigationContainer>{StackNavigatorLogIn(loading)}</NavigationContainer>;
};

export default NavigatorApp;
