import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { CategoriesContextProvider } from '~contexts/CategoriesContext';
import { ThemeContextProvider } from '~contexts/ThemeContext';
import NavigatorApp from '~navigations/NavigatorApp';

const App = () => {
    return (
        <SafeAreaProvider>
            <ThemeContextProvider>
                <CategoriesContextProvider>
                    <NavigatorApp />
                </CategoriesContextProvider>
            </ThemeContextProvider>
        </SafeAreaProvider>
    );
};

export default App;
