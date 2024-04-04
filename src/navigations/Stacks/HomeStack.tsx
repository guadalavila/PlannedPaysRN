import { createStackNavigator } from '@react-navigation/stack';
import AddNewExpense from '~screens/AddNewExpense';
import AddTransactionScreen from '~screens/AddTransactionScreen';
import HomeScreen from '~screens/HomeScreen';

const Stack = createStackNavigator();

function HomeStack() {
    return (
        <Stack.Navigator
            initialRouteName={'HomeScreen'}
            screenOptions={{
                headerShown: false,
            }}>
            <Stack.Screen name={'HomeScreen'} component={HomeScreen} />
            <Stack.Screen name={'AddNewExpense'} component={AddNewExpense} />
        </Stack.Navigator>
    );
}
export default HomeStack;
