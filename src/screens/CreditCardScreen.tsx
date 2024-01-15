import React from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { StyleSheet, Text, View } from 'react-native';
import Container from '~components/Container';
import { DrawerStackList } from '~navigations/types';
import CreditCard from '~components/CreditCard';

interface Props extends NativeStackScreenProps<DrawerStackList, 'CreditCardScreen'> {}
const CreditCardScreen = ({}: Props) => {
    return (
        <Container>
            <CreditCard />
        </Container>
    );
};

export default CreditCardScreen;

const styles = StyleSheet.create({});
