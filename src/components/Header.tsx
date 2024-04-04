import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { colors } from '~utils/colors';
import { spacing } from '~utils/spacing';
import { typography } from '~utils/typography';

interface IHeaderProps {
    title: string;
    showBack?: boolean;
}

const Header = ({ title, showBack = false }: IHeaderProps) => {
    const navigation = useNavigation();

    const onBack = () => navigation.goBack();
    return (
        <View style={styles.container}>
            {showBack ? (
                <TouchableOpacity activeOpacity={0.7} style={styles.flex1} onPress={onBack}>
                    <Icon name='chevron-back-outline' color={'white'} size={22} />
                </TouchableOpacity>
            ) : (
                <View style={styles.flex1} />
            )}
            <View style={styles.flex1}>
                <Text style={styles.title}>{title}</Text>
            </View>
            <View style={styles.flex1} />
        </View>
    );
};

export default Header;

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.light.primary,
        paddingVertical: spacing.XL,
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
    },
    title: {
        color: colors.light.white,
        fontSize: typography.size.L,
        fontWeight: 'bold',
        textAlign: 'center',
        alignSelf: 'center',
    },
    flex1: {
        flex: 1,
    },
});
