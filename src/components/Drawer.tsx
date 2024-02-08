import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { DrawerStackList } from '~navigations/types';
import HomeScreen from '~screens/HomeScreen';
import CategoriesScreen from '~screens/CategoriesScreen';
import { headerStyle } from '~utils/styles';
import SettingsScreen from '~screens/SettingsScreen';
import { STRINGS } from '~utils/strings';
import { colors } from '~utils/colors';
import CreditCardScreen from '~screens/CreditCardScreen';
import GoalsScreen from '~screens/GoalsScreen';
import { StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { spacing } from '~utils/spacing';

const DrawerStack = createDrawerNavigator<DrawerStackList>();

const Drawer = ({ navigation }) => {
    return (
        <DrawerStack.Navigator screenOptions={{ ...headerStyle, drawerActiveTintColor: colors.light.primary }}>
            <DrawerStack.Screen options={{ title: STRINGS.DRAWER.home }} name='HomeScreen' component={HomeScreen} />
            <DrawerStack.Screen
                options={{ title: STRINGS.DRAWER.categories }}
                name='CategoriesScreen'
                component={CategoriesScreen}
            />
            <DrawerStack.Screen
                options={{
                    title: STRINGS.DRAWER.creditCard,
                    headerRight: () => (
                        <TouchableOpacity
                            activeOpacity={0.7}
                            style={styles.icon}
                            onPress={() => navigation.navigate('AddCreditCardScreen')}>
                            <Icon name='card-outline' color={colors.light.white} size={24} />
                        </TouchableOpacity>
                    ),
                }}
                name='CreditCardScreen'
                component={CreditCardScreen}
            />
            <DrawerStack.Screen options={{ title: STRINGS.DRAWER.goals }} name='GoalsScreen' component={GoalsScreen} />
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

const styles = StyleSheet.create({
    icon: { marginHorizontal: spacing.S },
});
