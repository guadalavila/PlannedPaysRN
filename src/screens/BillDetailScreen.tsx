import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import Button from '~components/Button';
import Container from '~components/Container';
import Header from '~components/Header';
import Item from '~components/Item';
import Text from '~components/Text';
import { IBill } from '~models/Bill';
import { spacing } from '~utils/spacing';
import { typography } from '~utils/typography';

const BillDetailScreen = ({ route, navigation }) => {
    const [bill, setBill] = useState<IBill>(route.params.bill);
    console.log(bill);

    const getDate = (date: any) => {
        const current = new Date(date.seconds * 1000 + date.nanoseconds / 1000000);
        const day = current.getDate();
        const month = current.getMonth() + 1;
        const year = current.getFullYear();
        const hour = current.getHours();
        const min = current.getMinutes();
        // const seconds = current.getSeconds();
        const dateFormat = `${day}/${month}/${year} - ${hour}:${min}hs`;
        return dateFormat;
    };

    return (
        <Container>
            <Header title='Detalle de operación' showBack />
            <View style={styles.container}>
                <Text style={styles.amount}>$ {bill.amount}</Text>
                <Text style={styles.comment}>Descripción: {bill.comment}</Text>
                <Text style={styles.date}>{getDate(bill.date)}</Text>
                <Item
                    icon={bill.category.icon}
                    text={'Categoria: ' + bill.category.label}
                    color={bill.category.color}
                    onPress={() => {}}
                />
                <Button title='Editar' outlined onPress={() => navigation.navigate('EditBillScreen', { bill: bill })} />
                <Button title='Eliminar' onPress={() => {}} />
            </View>
        </Container>
    );
};

export default BillDetailScreen;

const styles = StyleSheet.create({
    container: {
        marginVertical: spacing.XXL,
    },
    amount: {
        fontSize: 40,
        textAlign: 'center',
        marginBottom: spacing.L,
    },
    date: {
        marginHorizontal: spacing.XL,
        marginVertical: spacing.XL,
    },
    comment: {
        marginHorizontal: spacing.XL,
        marginVertical: spacing.XL,
    },
});
