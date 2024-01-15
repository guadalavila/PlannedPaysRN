import React from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { FlatList, StyleSheet, View } from 'react-native';
import Container from '~components/Container';
import { DrawerStackList } from '~navigations/types';
import CreditCard from '~components/CreditCard';
import { ICreditCard } from '~models/CreditCard';
import Fab from '~components/Fab';
import Title from '~components/Title';

interface Props extends NativeStackScreenProps<DrawerStackList, 'CreditCardScreen'> {}
const CreditCardScreen = ({}: Props) => {
    const list: ICreditCard[] = [
        { id: 1, name: 'sda', description: 'sadas', type: 'MASTER' },
        { id: 2, name: 'sda', description: 'sadas', type: 'VISA' },
        { id: 3, name: 'sda', description: 'sadas', type: 'VISA' },
        { id: 4, name: 'sda', description: 'sadas', type: 'VISA' },
        { id: 5, name: 'sda', description: 'sadas', type: 'VISA' },
        { id: 6, name: 'sda', description: 'sadas', type: 'VISA' },
    ];
    return (
        <Container>
            <View>
                <FlatList
                    data={list}
                    horizontal
                    style={{ paddingEnd: 10 }}
                    contentContainerStyle={{ width: '70%' }}
                    renderItem={({ item }) => <CreditCard name='SAD' type='VISA' />}
                    snapToAlignment='center'
                    showsHorizontalScrollIndicator={false}
                />
            </View>
            <Title text={'Transacciones'} />

            <Fab icon='add' onPress={() => {}} />
        </Container>
    );
};

export default CreditCardScreen;

const styles = StyleSheet.create({
    flatListContainer: {
        flexDirection: 'row',
        width: '75%',
        padding: 10,
    },
});
