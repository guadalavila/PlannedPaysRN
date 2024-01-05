import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackLoginParamList, RootStackLogoutParamList } from './types';
import LoginScreen from '~screens/LoginScreen';
import DashboardScreen from '~screens/DashboardScreen';

const StackLoggedOut = createNativeStackNavigator<RootStackLogoutParamList>();
const StackLoggedIn = createNativeStackNavigator<RootStackLoginParamList>();

export function StackNavigatorLogOut() {
    return (
        <StackLoggedOut.Navigator initialRouteName={'LoginScreen'} screenOptions={{ headerShown: false }}>
            <StackLoggedOut.Screen name={'LoginScreen'} component={LoginScreen} />
        </StackLoggedOut.Navigator>
    );
}

export function StackNavigatorLogIn() {
    return (
        <StackLoggedIn.Navigator screenOptions={{ headerShown: false }} initialRouteName='DashboardScreen'>
            <StackLoggedIn.Screen name={'DashboardScreen'} component={DashboardScreen} />
        </StackLoggedIn.Navigator>
    );
}
