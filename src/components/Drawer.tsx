import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { DrawerStackList } from '~navigations/types';
import HomeScreen from '~screens/HomeScreen';
import CategoriesScreen from '~screens/CategoriesScreen';
import { headerStyle } from '~utils/styles';
import SettingsScreen from '~screens/SettingsScreen';
import { STRINGS } from '~utils/strings';
import ProfileScreen from '~screens/ProfileScreen';
import { colors } from '~utils/colors';
import CreditCardScreen from '~screens/CreditCardScreen';
import AddNewExpense from '~screens/AddNewExpense';

const DrawerStack = createDrawerNavigator<DrawerStackList>();

const Drawer = () => {
    return (
        <DrawerStack.Navigator screenOptions={{ ...headerStyle, drawerActiveTintColor: colors.light.primary }}>
            <DrawerStack.Screen options={{ title: STRINGS.DRAWER.home }} name='HomeScreen' component={HomeScreen} />
            <DrawerStack.Screen
                options={{ title: STRINGS.DRAWER.categories }}
                name='CategoriesScreen'
                component={CategoriesScreen}
            />
            <DrawerStack.Screen
                options={{ title: STRINGS.DRAWER.profile }}
                name='ProfileScreen'
                component={ProfileScreen}
            />
            <DrawerStack.Screen
                options={{ title: STRINGS.DRAWER.creditCard }}
                name='CreditCardScreen'
                component={CreditCardScreen}
            />
            {/* <DrawerStack.Screen
                options={{ title: STRINGS.DRAWER.newExpense }}
                name='AddNewExpense'
                component={AddNewExpense}
            /> */}
            <DrawerStack.Screen
                options={{ title: STRINGS.DRAWER.settings }}
                name='SettingsScreen'
                component={SettingsScreen}
            />
        </DrawerStack.Navigator>
    );
};

export default Drawer;
