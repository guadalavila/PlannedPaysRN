import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CustomTabBar from './CustomTabBar';
import { STRINGS } from '~utils/strings';
import HomeStack from '~navigations/Stacks/HomeStack';
import CardStack from '~navigations/Stacks/CardStack';
import SettingStack from '~navigations/Stacks/SettingStack';
import Drawer from './Drawer';
const Tab = createBottomTabNavigator();

const BottonTab = () => {
    return (
        <Tab.Navigator screenOptions={{ headerShown: false }} tabBar={(props) => <CustomTabBar {...props} />}>
            <Tab.Screen name='Drawer' component={Drawer} options={{ tabBarLabel: STRINGS.BOTTOM_TAB.home }} />

            <Tab.Screen name='HomeStack' component={HomeStack} options={{ tabBarLabel: STRINGS.BOTTOM_TAB.home }} />
            <Tab.Screen name='CardStack' component={CardStack} options={{ tabBarLabel: STRINGS.BOTTOM_TAB.card }} />
            <Tab.Screen
                name='SettingStack'
                component={SettingStack}
                options={{ tabBarLabel: STRINGS.BOTTOM_TAB.setting }}
            />
        </Tab.Navigator>
    );
};

export default BottonTab;
