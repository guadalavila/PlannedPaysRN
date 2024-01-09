import { createStackNavigator } from '@react-navigation/stack';
import { RootStackLoginParamList, RootStackLogoutParamList } from './types';
import LoginScreen from '~screens/LoginScreen';
import DashboardScreen from '~screens/DashboardScreen';

const StackLoggedIn = createStackNavigator<RootStackLoginParamList>();
const StackLoggedOut = createStackNavigator<RootStackLogoutParamList>();

export function StackNavigatorLogOut() {
    return (
        <StackLoggedOut.Navigator initialRouteName={'LoginScreen'}>
            <StackLoggedOut.Screen name={'LoginScreen'} component={LoginScreen} />
        </StackLoggedOut.Navigator>
    );
}

export function StackNavigatorLogIn() {
    return (
        <StackLoggedIn.Navigator initialRouteName='DashboardScreen'>
            <StackLoggedIn.Screen name={'DashboardScreen'} component={DashboardScreen} />
        </StackLoggedIn.Navigator>
    );
}
