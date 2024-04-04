import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import CreditCardScreen from '~screens/CreditCardScreen';

const Stack = createStackNavigator();

const CardStack = () => {
    return (
        <Stack.Navigator
            initialRouteName={'CreditCardScreen'}
            screenOptions={{
                headerShown: false,
            }}>
            <Stack.Screen name={'CreditCardScreen'} component={CreditCardScreen} />
        </Stack.Navigator>
    );
};

export default CardStack;
