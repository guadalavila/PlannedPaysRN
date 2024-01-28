import React from 'react';
import { StyleSheet, View } from 'react-native';
import Button from '~components/Button';
import Container from '~components/Container';
import Input from '~components/Input';
import PaletteColor from '~components/PaletteColor';
import { spacing } from '~utils/spacing';

const NewGoalScreen = () => {
    return (
        <Container>
            <View style={{ height: 20 }} />
            <Input label='Objetivo' placeholder='Ingrese objetivo' />
            <Input label='Descripción' placeholder='Ingrese ' />
            <PaletteColor style={styles.containerPalette} />
            <Button title='Agregar' onPress={() => {}} />
        </Container>
    );
};

export default NewGoalScreen;

const styles = StyleSheet.create({
    containerPalette: {
        marginHorizontal: spacing.L,
    },
});
