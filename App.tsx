import React from 'react';
import Container from '~components/Container';
import Header from '~components/Header';
import { ThemeContextProvider } from '~contexts/ThemeContext';

const App = () => {
    return (
        <ThemeContextProvider>
            <Container>
                <Header title='Home' />
            </Container>
        </ThemeContextProvider>
    );
};

export default App;
