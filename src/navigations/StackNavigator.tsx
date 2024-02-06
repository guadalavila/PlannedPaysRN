import { createStackNavigator } from '@react-navigation/stack';
import { RootStackLoginParamList, RootStackLogoutParamList } from './types';
import Drawer from '~components/Drawer';
import LoginScreen from '~screens/LoginScreen';
import NewGoalScreen from '~screens/NewGoalScreen';
import AddCreditCardScreen from '~screens/AddCreditCardScreen';
import { colors } from '~utils/colors';
import Loading from '~components/Loading';
import SignUpScreen from '~screens/SignUpScreen';
import AddTransactionScreen from '~screens/AddTransactionScreen';

const StackLoggedIn = createStackNavigator<RootStackLoginParamList>();
const StackLoggedOut = createStackNavigator<RootStackLogoutParamList>();

export function StackNavigatorLogOut(loading: boolean) {
    return (
        <>
            {loading ? (
                <Loading />
            ) : (
                <StackLoggedOut.Navigator
                    initialRouteName={'LoginScreen'}
                    screenOptions={{
                        headerStyle: {
                            backgroundColor: colors.dark.background,
                        },
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
            )}
        </>
    );
}

export function StackNavigatorLogIn(loading: boolean) {
    return (
        <>
            {loading ? (
                <Loading />
            ) : (
                <StackLoggedIn.Navigator
                    screenOptions={{
                        headerShown: true,
                    }}>
                    <StackLoggedIn.Screen options={{ headerShown: false }} name='Drawer' component={Drawer} />
                    <StackLoggedIn.Screen
                        options={{
                            title: 'Nuevo Objetivo',
                            headerStyle: {
                                backgroundColor: colors.light.primary,
                            },
                            headerTintColor: '#fff',
                            headerTitleStyle: {
                                fontWeight: 'bold',
                            },
                            headerBackTitle: ' ',
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
                            headerTintColor: '#fff',
                            headerTitleStyle: {
                                fontWeight: 'bold',
                            },
                            headerBackTitle: ' ',
                        }}
                        name='AddCreditCardScreen'
                        component={AddCreditCardScreen}
                    />
                    <StackLoggedIn.Screen
                        options={{
                            title: 'Nueva Transacción',
                            headerStyle: {
                                backgroundColor: colors.light.primary,
                            },
                            headerTintColor: '#fff',
                            headerTitleStyle: {
                                fontWeight: 'bold',
                            },
                            headerBackTitle: ' ',
                        }}
                        name='AddTransactionScreen'
                        component={AddTransactionScreen}
                    />
                </StackLoggedIn.Navigator>
            )}
        </>
    );
}
