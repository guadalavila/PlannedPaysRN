import { createStackNavigator } from '@react-navigation/stack';
import { RootStackLoginParamList, RootStackLogoutParamList } from './types';
import LoginScreen from '~screens/LoginScreen';
import DashboardScreen from '~screens/DashboardScreen';
import { headerStyle } from '~utils/styles';

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
        <StackLoggedIn.Navigator
            initialRouteName='DashboardScreen'
            screenOptions={{
                ...headerStyle,
            }}>
            <StackLoggedIn.Screen options={{ title: 'Home' }} name={'DashboardScreen'} component={DashboardScreen} />
        </StackLoggedIn.Navigator>
    );
}
