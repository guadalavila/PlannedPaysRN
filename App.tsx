import React from 'react';
import { Text } from 'react-native';
import Container from '~components/Container';
import { ThemeContextProvider } from '~contexts/ThemeContext';

const App = () => {
    return (
        <ThemeContextProvider>
            <Container>
                <Text>Apsdsdsdp</Text>
            </Container>
        </ThemeContextProvider>
    );
};

export default App;
