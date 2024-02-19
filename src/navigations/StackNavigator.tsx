import { createStackNavigator } from '@react-navigation/stack';
import { RootStackLoginParamList, RootStackLogoutParamList } from './types';
import Drawer from '~components/Drawer';
import LoginScreen from '~screens/LoginScreen';
import NewGoalScreen from '~screens/NewGoalScreen';
import AddCreditCardScreen from '~screens/AddCreditCardScreen';
import { colors } from '~utils/colors';
import SignUpScreen from '~screens/SignUpScreen';
import AddTransactionScreen from '~screens/AddTransactionScreen';
import IconsScreen from '~screens/IconsScreen';

const StackLoggedIn = createStackNavigator<RootStackLoginParamList>();
const StackLoggedOut = createStackNavigator<RootStackLogoutParamList>();

export function StackNavigatorLogOut() {
    return (
        <StackLoggedOut.Navigator
            initialRouteName={'LoginScreen'}
            screenOptions={{
                headerStyle: {
                    backgroundColor: colors.dark.primary,
                },
                headerTintColor: colors.light.white,
            }}>
            <StackLoggedOut.Screen name={'LoginScreen'} component={LoginScreen} options={{ title: 'Login' }} />
            <StackLoggedOut.Screen
                name={'SignUpScreen'}
                component={SignUpScreen}
                options={{
                    title: 'Registro',
                    headerBackTitle: ' ',
                }}
            />
        </StackLoggedOut.Navigator>
    );
}

export function StackNavigatorLogIn() {
    return (
        <StackLoggedIn.Navigator
            screenOptions={{
                headerShown: true,
                headerTintColor: 'red',
            }}>
            <StackLoggedIn.Screen options={{ headerShown: false }} name='Drawer' component={Drawer} />
            <StackLoggedIn.Screen
                options={{
                    title: 'Nuevo Objetivo',
                    headerStyle: {
                        backgroundColor: colors.light.primary,
                    },
                    headerTitleStyle: {
                        fontWeight: 'bold',
                    },
                    headerBackTitle: ' ',
                    headerTintColor: '#FFFFFF',
                }}
                name='NewGoalScreen'
                component={NewGoalScreen}
            />
            <StackLoggedIn.Screen
                options={{
                    title: 'Nueva Tarjeta',
                    headerStyle: {
                        backgroundColor: colors.light.primary,
                    },
                    headerTitleStyle: {
                        fontWeight: 'bold',
                    },
                    headerBackTitle: ' ',
                    headerTintColor: '#FFFFFF',
                }}
                name='AddCreditCardScreen'
                component={AddCreditCardScreen}
            />
            <StackLoggedIn.Screen
                options={{
                    title: 'Agregar Gasto',
                    headerStyle: {
                        backgroundColor: colors.light.primary,
                    },
                    headerTintColor: '#FFFFFF',
                    headerTitleStyle: {
                        fontWeight: 'bold',
                    },
                    headerBackTitle: ' ',
                }}
                name='AddTransactionScreen'
                component={AddTransactionScreen}
            />
            <StackLoggedIn.Screen
                options={{
                    title: 'Iconos',
                    headerStyle: {
                        backgroundColor: colors.light.primary,
                    },
                    headerTintColor: '#FFFFFF',
                    headerTitleStyle: {
                        fontWeight: 'bold',
                    },
                    headerBackTitle: ' ',
                }}
                name='IconsScreen'
                component={IconsScreen}
            />
        </StackLoggedIn.Navigator>
    );
}
