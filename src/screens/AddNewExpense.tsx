import React, { useState } from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { StyleSheet, Text, View } from 'react-native';
import { DrawerStackList } from '~navigations/types';
import { TextInput } from 'react-native-gesture-handler';
import Button from '~components/Button';
import Container from '~components/Container';
import Header from '~components/Header';

interface Props extends NativeStackScreenProps<DrawerStackList, 'AddNewExpense'> {}

const AddNewExpense = ({}: Props) => {
    const [number, onChangeNumber] = React.useState('');

    return (
        <Container>
            <Header title='Nuevo Gasto' showBack />
            <TextInput
                style={styles.input}
                onChangeText={onChangeNumber}
                value={number}
                placeholder='useless placeholder'
                keyboardType='numeric'
            />
            <Button title='Agregar Gasto' onPress={() => {}} />
        </Container>
    );
};

export default AddNewExpense;

const styles = StyleSheet.create({
    input: {},
});
