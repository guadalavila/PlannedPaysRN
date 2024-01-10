import { createStackNavigator } from '@react-navigation/stack';
import { RootStackLoginParamList, RootStackLogoutParamList } from './types';
import Drawer from '~components/Drawer';
import LoginScreen from '~screens/LoginScreen';

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
                headerShown: false,
            }}>
            <StackLoggedIn.Screen name='Drawer' component={Drawer} />
        </StackLoggedIn.Navigator>
    );
}
