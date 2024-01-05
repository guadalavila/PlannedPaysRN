import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ThemeContextProvider } from '~contexts/ThemeContext';
import NavigatorApp from '~navigations/NavigatorApp';

const App = () => {
    return (
        <SafeAreaProvider>
            <ThemeContextProvider>
                <NavigatorApp />
            </ThemeContextProvider>
        </SafeAreaProvider>
    );
};

export default App;
