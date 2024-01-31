import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { RemoteConfigContextProvider } from '~contexts/RemoteConfigContext';
import { StateContextProvider } from '~contexts/StateContext';
import { ThemeContextProvider } from '~contexts/ThemeContext';
import NavigatorApp from '~navigations/NavigatorApp';

const App = () => {
    return (
        <SafeAreaProvider>
            <ThemeContextProvider>
                <RemoteConfigContextProvider>
                    <StateContextProvider>
                        <NavigatorApp />
                    </StateContextProvider>
                </RemoteConfigContextProvider>
            </ThemeContextProvider>
        </SafeAreaProvider>
    );
};

export default App;
