import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Container from '~components/Container';
import Header from '~components/Header';
import { ThemeContextProvider } from '~contexts/ThemeContext';

const App = () => {
    return (
        <SafeAreaProvider>
            <ThemeContextProvider>
                <Container>
                    <Header title='Home' />
                </Container>
            </ThemeContextProvider>
        </SafeAreaProvider>
    );
};

export default App;
