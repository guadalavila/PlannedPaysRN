import React, { useEffect, useState } from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import useBill from '~hooks/useBill';
import { IBill } from '~models/Bill';
import Card from './Card';
import Text from './Text';
import Title from './Title';
import { GlobalStyles } from '~utils/styles';
import { colors } from '~utils/colors';
import Icon from 'react-native-vector-icons/Ionicons';
import { spacing } from '~utils/spacing';
import { typography } from '~utils/typography';

interface ILastBills {
    onPress: (bill: IBill) => void;
}

const LastBills = ({ onPress }: ILastBills) => {
    const [bills, setBills] = useState<IBill[]>([]);
    const { getBillsByMonth } = useBill();

    useEffect(() => {
        getBillsByMonth().then((data) => {
            setBills(data as IBill[]);
        });
    }, []);

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
        <View>
            <Title text='Últimos Gastos' />
            {bills.map((bill) => (
                <Card key={bill.id}>
                    <TouchableOpacity
                        style={[GlobalStyles.rowBetween]}
                        activeOpacity={0.7}
                        onPress={() => onPress(bill)}>
                        <View style={[GlobalStyles.row]}>
                            <View style={[styles.avatar, { backgroundColor: bill.category.color }]}>
                                <Icon name={bill.category.icon} size={18} color={colors.light.white} />
                            </View>
                            <View>
                                <Text style={styles.label}>{bill.comment}</Text>
                                <Text style={styles.date}>{getDate(bill.date)}</Text>
                            </View>
                        </View>
                        <Text style={styles.amount}>${bill.amount}</Text>
                    </TouchableOpacity>
                </Card>
            ))}
        </View>
    );
};

export default LastBills;

const styles = StyleSheet.create({
    amount: {
        fontWeight: 'bold',
        alignSelf: 'center',
        fontSize: typography.size.M,
    },
    avatar: {
        width: 28,
        height: 28,
        borderRadius: 28,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
    },
    label: {
        marginHorizontal: spacing.L,
        marginVertical: spacing.XS,
        fontSize: typography.size.S,
    },
    date: {
        marginHorizontal: spacing.L,
        fontSize: typography.size.XS,
        color: colors.light.grey,
    },
});
