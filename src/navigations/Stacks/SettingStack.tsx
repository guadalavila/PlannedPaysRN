import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SettingsScreen from '~screens/SettingsScreen';

const Stack = createStackNavigator();

function SettingStack() {
    return (
        <Stack.Navigator
            initialRouteName={'SettingsScreen'}
            screenOptions={{
                headerShown: false,
            }}>
            <Stack.Screen name={'SettingsScreen'} component={SettingsScreen} />
        </Stack.Navigator>
    );
}
export default SettingStack;
