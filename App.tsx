import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { AuthContextProvider } from '~contexts/AuthContext';
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
                        <AuthContextProvider>
                            <NavigatorApp />
                        </AuthContextProvider>
                    </StateContextProvider>
                </RemoteConfigContextProvider>
            </ThemeContextProvider>
        </SafeAreaProvider>
    );
};

export default App;
