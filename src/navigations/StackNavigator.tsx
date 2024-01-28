import { createStackNavigator } from '@react-navigation/stack';
import { RootStackLoginParamList, RootStackLogoutParamList } from './types';
import Drawer from '~components/Drawer';
import LoginScreen from '~screens/LoginScreen';
import NewGoalScreen from '~screens/NewGoalScreen';
import { colors } from '~utils/colors';

const StackLoggedIn = createStackNavigator<RootStackLoginParamList>();
const StackLoggedOut = createStackNavigator<RootStackLogoutParamList>();

export function StackNavigatorLogOut() {
    return (
        <StackLoggedOut.Navigator initialRouteName={'LoginScreen'} screenOptions={{ headerTransparent: true }}>
            <StackLoggedOut.Screen name={'LoginScreen'} component={LoginScreen} />
        </StackLoggedOut.Navigator>
    );
}

export function StackNavigatorLogIn() {
    return (
        // eslint-disable-next-line react/react-in-jsx-scope
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
        </StackLoggedIn.Navigator>
    );
}
