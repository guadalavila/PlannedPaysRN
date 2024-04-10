import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import Button from '~components/Button';
import Container from '~components/Container';
import Header from '~components/Header';
import Item from '~components/Item';
import Loading from '~components/Loading';
import Text from '~components/Text';
import useBill from '~hooks/useBill';
import { IBill } from '~models/Bill';
import { spacing } from '~utils/spacing';

const BillDetailScreen = ({ route, navigation }) => {
    const [bill, _] = useState<IBill>(route.params.bill);
    const { isLoading, deleteBill } = useBill();

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

    const doDelete = () => {
        deleteBill(bill.id).then(() => navigation.goBack());
    };

    return (
        <Container>
            <Header title='Detalle de operación' showBack />
            {isLoading ? (
                <Loading />
            ) : (
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
                    <Button
                        title='Editar'
                        outlined
                        onPress={() => navigation.navigate('EditBillScreen', { bill: bill })}
                    />
                    <Button title='Eliminar' onPress={doDelete} />
                </View>
            )}
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
