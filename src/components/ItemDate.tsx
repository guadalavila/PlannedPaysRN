import React, { useContext, useState } from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import DatePicker from 'react-native-date-picker';
import { ThemeContext } from '~contexts/ThemeContext';
import Text from './Text';
import { formatDateCalendar, getFirstDayOfMonth, getMinimumDate, getPreviousDay } from '~utils/helpers';
import { GlobalStyles } from '~utils/styles';
import { colors } from '~utils/colors';
import { spacing } from '~utils/spacing';
import CardDate from './CardDate';

interface IItemDateProps {
    onChangeValue: (value: Date) => void;
    placeholder?: string;
}

const ItemDate = ({ onChangeValue, placeholder = 'Fecha' }: IItemDateProps) => {
    const { theme } = useContext(ThemeContext);
    const [date, setDate] = useState(new Date());
    const [showCalendar, setShowCalendar] = useState(false);
    const [isToday, setIsToday] = useState(true);
    const [isYesterday, setIsYesterday] = useState(false);

    const onConfirmDate = (value: Date) => {
        onChangeValue(value);
        if (formatDateCalendar(value) === formatDateCalendar(getPreviousDay())) {
            setIsYesterday(true);
            setIsToday(false);
        } else if (formatDateCalendar(value) === formatDateCalendar(new Date())) {
            setIsToday(true);
            setIsYesterday(false);
        } else {
            setIsToday(false);
            setIsYesterday(false);
        }
        setDate(value);
        setShowCalendar(false);
    };

    return (
        <>
            <View style={styles.container}>
                <Text style={styles.label}>{placeholder}</Text>
                <View style={GlobalStyles.rowBetween}>
                    <View style={GlobalStyles.row}>
                        <CardDate
                            label='Hoy'
                            date={new Date()}
                            isSelected={isToday}
                            onSelected={() => {
                                setIsToday(true);
                                setIsYesterday(false);
                                onChangeValue(new Date());
                                setDate(new Date());
                            }}
                        />
                        <CardDate
                            label='Ayer'
                            date={getPreviousDay()}
                            isSelected={isYesterday}
                            onSelected={() => {
                                setIsYesterday(true);
                                setIsToday(false);
                                onChangeValue(getPreviousDay());
                                setDate(getPreviousDay());
                            }}
                        />
                        {!isToday && !isYesterday && (
                            <CardDate label='Fecha' date={date} isSelected onSelected={() => {}} />
                        )}
                    </View>
                    <TouchableOpacity
                        activeOpacity={0.7}
                        onPress={() => setShowCalendar(!showCalendar)}
                        style={styles.containerIcon}>
                        <Icon name='calendar' size={26} color={colors.light.primaryDark} />
                    </TouchableOpacity>
                </View>
            </View>
            <DatePicker
                locale={'es'}
                mode='date'
                maximumDate={new Date()}
                minimumDate={getMinimumDate()}
                modal
                title={'Seleccione fecha'}
                confirmText='Confirmar'
                cancelText='Cancelar'
                theme={theme === 'dark' ? 'dark' : 'light'}
                open={showCalendar}
                date={date}
                onConfirm={(value) => onConfirmDate(value)}
                onCancel={() => setShowCalendar(false)}
            />
        </>
    );
};

export default ItemDate;

const styles = StyleSheet.create({
    container: {
        marginHorizontal: spacing.XL,
    },
    containerIcon: {
        alignSelf: 'center',
    },
    label: {
        fontWeight: 'bold',
    },
});
