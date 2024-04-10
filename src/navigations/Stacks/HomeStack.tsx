import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import AddBillScreen from '~screens/AddBillScreen';
import BillDetailScreen from '~screens/BillDetailScreen';
import EditBillScreen from '~screens/EditBillScreen';
import HomeScreen from '~screens/HomeScreen';

const Stack = createStackNavigator();

function HomeStack() {
    return (
        <Stack.Navigator
            initialRouteName={'HomeScreen'}
            screenOptions={{
                headerShown: false,
            }}>
            <Stack.Screen name={'HomeScreen'} component={HomeScreen} />
            <Stack.Screen name={'AddBillScreen'} component={AddBillScreen} />
            <Stack.Screen name={'BillDetailScreen'} component={BillDetailScreen} />
            <Stack.Screen name={'EditBillScreen'} component={EditBillScreen} />
        </Stack.Navigator>
    );
}
export default HomeStack;
